const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const AKHMED_CODE = 'AKHMED' as const;
const NEKA_CODE = 'NEKIS' as const;

export {
  AKHMED_CODE,
  NEKA_CODE,
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
};
