import { read } from "./csv/read";
import { transform } from "./transform/transform";
import { write } from "./csv/write";

const args = process.argv.slice(2);

// Read the file
const csv = read(args[0] ?? "Passwords.csv");

// Transform the file
const result = transform(csv);

// Write the file
write(result);
