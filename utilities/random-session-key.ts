import crypto from "crypto";

export function randomSessionSecret(): string {
  return crypto.randomBytes(32).toString("hex");
}
