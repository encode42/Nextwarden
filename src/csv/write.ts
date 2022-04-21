import fs from "fs";
import * as csv from "csv-string";
import { bitwardenFormat } from "../transform/data";

/**
 * Write a resulting CSV array to a file.
 *
 * @param result Resulting CSV array
 */
export function write(result: any[][]) {
    // Add the destination keys
    result.unshift(bitwardenFormat);

    // Save the file
    fs.writeFileSync("output.csv", csv.stringify(result));
}
