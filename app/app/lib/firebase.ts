import "server-only";
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const decodedKey = Buffer.from(
  process.env.FIREBASE_PRIVATE_KEY!!,
  "base64"
).toString("utf-8");

//Certificado
export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID!!,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL!!,
  privateKey: decodedKey,
});

//Instancia do app
//Verifica se já existe uma instância para não criar múltiplas
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET!!,
  });
}


export const db = getFirestore();
export const storage = getStorage().bucket();