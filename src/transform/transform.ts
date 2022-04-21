import { transformations } from "./data";
import { fatal, log } from "../util/log";
import { CSVResult } from "../csv/read";

interface Value {
    "type": "index" | "value",
    "value": any
}

/**
 * Convert data from Nextcloud Passwords to a Bitwarden compatible format.
 *
 * @param csv CSV file to transform from
 */
export function transform(csv: CSVResult): any[][] {
    // Iterate each transformation
    const bitwarden: any[] = [];
    for (const [i, transformation] of transformations.entries()) {
        log(`\nStarting transformation for ${transformation.key}!\n`);

        // Define how to get the value
        let value: Value;
        if ("from" in transformation) {
            // Get an index from the target keys
            const index = csv.keys?.indexOf(transformation.from);
            if (index === undefined) {
                fatal(`Field ${transformation.from} cannot be found!`);
            }

            value = {
                "type": "index",
                "value": index
            };
        } else if ("value" in transformation) {
            value = {
                "type": "value",
                "value": transformation.value
            };
        } else {
            fatal(`Invalid transformation structure!`);
            break;
        }

        // Iterate each entry of the target
        for (const [j, entry] of csv.values.entries()) {
            log(`Transforming ${entry[0]}...`);

            let effectiveValue = value.value;

            // Get the original value from the entry
            if (value.type === "index") {
                effectiveValue = entry[value.value];
            }

            // Perform condition transformations
            if (transformation.condition) {
                effectiveValue = transformation.condition(effectiveValue);
            }

            // Add the effective value to the new array
            if (!bitwarden[j]) {
                bitwarden[j] = [];
            }

            bitwarden[j][i] = effectiveValue;
        }
    }

    return bitwarden;
}
