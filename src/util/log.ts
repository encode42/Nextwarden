/**
 * Log a message to the console.
 *
 * @param message Message to log
 */
export function log(message: string) {
    console.log(message);
}

/**
 * Log an error to the console then exit the prcess.
 *
 * @param message Message to log
 */
export function fatal(message?: string) {
    console.error(message || "Unknown error");
    process.exit(1);
}
