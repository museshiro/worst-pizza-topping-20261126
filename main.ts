import { mkdirSync, writeFileSync } from "node:fs";

const setup = "Picture a pizza crowned with alarm-clock croutons—little wind-up bells that ring when you chew—";
const punch = "so breakfast becomes a hostage negotiation between your molars and 6 a.m.";
const line = setup + punch;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
