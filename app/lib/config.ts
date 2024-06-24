export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BACKEND_URL
    : "http://localhost:8000";
