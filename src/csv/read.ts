import fs from "fs";
import path from "path";
import * as csv from "csv-string";
import { fatal } from "../util/log";

/**
 * The resulting structure.
 */
export interface CSVResult {
    /**
     * Keys of the provided file.
     */
    "keys": string[],

    /**
     * Values of the provided file.
     */
    "values": any[][]
}

/**
 * Read and parse a provided file.
 *
 * @param filename Name of the file to read
 */
export function read(filename: string): CSVResult {
    const contents = fs.readFileSync(path.resolve(filename), { "encoding": "utf8" });
    if (!contents) {
        cannotRead();
    }

    // Parse the contents
    const nextcloud = csv.parse(contents);
    if (nextcloud.length === 0) {
        cannotRead();
    }

    // Process the target's keys
    const keys = nextcloud.shift();

    return {
        // @ts-ignore
        keys,
        "values": nextcloud
    };
}

/**
 * Wrapper for fatal with read error message.
 */
function cannotRead() {
    fatal("File cannot be read!");
}
