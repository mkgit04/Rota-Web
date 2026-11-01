import { getApps, initializeApp } from "@firebase/app";
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
  isSupported,
} from "@firebase/remote-config";

function normalizeColor(value, field) {
  if (typeof value !== "string") {
    throw new Error(`Ticket field "${field}" must be a color string.`);
  }

  const match = /^(?:0x|#)?([\da-f]{6}|[\da-f]{8})$/i.exec(value.trim());
  if (!match) {
    throw new Error(`Ticket field "${field}" has an invalid color.`);
  }

  const hex = match[1];
  return `#${hex.length === 8 ? hex.slice(2) : hex}`;
}

function normalizeTickets(config) {
  if (!config || typeof config !== "object" || !Array.isArray(config.metro) || config.metro.length === 0) {
    throw new Error('Remote Config parameter "tickets" must contain a non-empty "metro" array.');
  }

  return config.metro.map((ticket, index) => {
    const position = `tickets.metro[${index}]`;
    if (!ticket || typeof ticket !== "object" || Array.isArray(ticket)) {
      throw new Error(`${position} must be an object.`);
    }

    const id = String(ticket.id ?? "").trim();
    const title = typeof ticket.title === "string" ? ticket.title.trim() : "";
    const subtitle = typeof ticket.subtitle === "string" ? ticket.subtitle.trim() : "";
    if (!id || !title || !subtitle) {
      throw new Error(`${position} must have an id, title, and subtitle.`);
    }

    for (const field of ["maxNumOfStations", "price", "elderlyPrice", "disabilityPrice"]) {
      const value = ticket[field];
      if (
        typeof value !== "number"
        || !Number.isFinite(value)
        || value < 0
        || (field === "maxNumOfStations" && (!Number.isInteger(value) || value === 0))
      ) {
        throw new Error(`${position}.${field} must be a valid ${field === "maxNumOfStations" ? "positive" : "non-negative"} number.`);
      }
    }

    return {
      id,
      title,
      subtitle,
      maxNumOfStations: ticket.maxNumOfStations,
      price: ticket.price,
      elderlyPrice: ticket.elderlyPrice,
      disabilityPrice: ticket.disabilityPrice,
      color: normalizeColor(ticket.color, `${position}.color`),
      secondaryColor: normalizeColor(ticket.secondaryColor, `${position}.secondaryColor`),
      tertiaryColor: normalizeColor(ticket.tertiaryColor, `${position}.tertiaryColor`),
    };
  });
}

function parseTickets(value) {
  let config;
  try {
    config = JSON.parse(value);
  } catch {
    throw new Error('Remote Config parameter "tickets" must be valid JSON.');
  }
  return normalizeTickets(config);
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const requiredConfigKeys = ["apiKey", "projectId", "appId"];

async function fetchMetroTickets() {
  const missingKeys = requiredConfigKeys.filter((key) => !firebaseConfig[key]);
  if (missingKeys.length > 0) {
    return {
      tickets: [],
      source: "none",
      error: {
        en: "Firebase is not configured. Add the Firebase web app values to .env.local and try again.",
        ar: "لم يتم إعداد Firebase. أضف بيانات تطبيق الويب في ملف .env.local ثم حاول مرة أخرى.",
      },
    };
  }

  try {
    if (!(await isSupported())) {
      return {
        tickets: [],
        source: "none",
        error: {
          en: "This browser does not support Firebase Remote Config.",
          ar: "هذا المتصفح لا يدعم Firebase Remote Config.",
        },
      };
    }

    const defaultApp = getApps().find((app) => app.name === "[DEFAULT]");
    const app = defaultApp || initializeApp(firebaseConfig);
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings = {
      fetchTimeoutMillis: 10000,
      minimumFetchIntervalMillis: 0,
    };

    await fetchAndActivate(remoteConfig);
    const value = getValue(remoteConfig, "tickets");
    if (value.getSource() !== "remote") {
      return {
        tickets: [],
        source: "none",
        error: {
          en: 'The "tickets" parameter has no published Remote Config value.',
          ar: 'لا توجد قيمة منشورة للمعامل "tickets" في Remote Config.',
        },
      };
    }

    return {
      tickets: parseTickets(value.asString()),
      source: "remote",
      warning: null,
    };
  } catch (error) {
    console.error("Firebase Remote Config could not load ticket information.", error);
    return {
      tickets: [],
      source: "none",
      error: {
        en: "Could not load ticket information from Firebase Remote Config. Check your connection and try again.",
        ar: "تعذر تحميل معلومات التذاكر من Firebase Remote Config. تحقق من اتصالك وحاول مرة أخرى.",
      },
    };
  }
}

let ticketsPromise;

export function getMetroTickets() {
  if (!ticketsPromise) {
    ticketsPromise = fetchMetroTickets().finally(() => {
      ticketsPromise = undefined;
    });
  }
  return ticketsPromise;
}
