import { helloWorld } from "./api/hello";
import admin from "firebase-admin";

admin.initializeApp();

/**
 * Export all functions from the api folder
 */
export { helloWorld };
