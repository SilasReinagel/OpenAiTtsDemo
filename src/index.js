// @ts-check
import { createOpenAi } from "./openAiClient.js";

import fs from "fs";
import path from "path";

const openai = createOpenAi()

const speechFile = path.resolve("./_output/speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1-hd",
    voice: "onyx",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

main();
