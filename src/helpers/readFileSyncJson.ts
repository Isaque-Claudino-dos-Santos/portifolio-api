import { readFileSync } from "fs";

export default function readFileSyncJson(filePath: string) {
  return JSON.parse(readFileSync(filePath, "utf-8"));
}
