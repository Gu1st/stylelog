import type { OptionsProps, optionTypes } from "./init";
import { typeEmoji, whichColor, typeColor } from "./init";

const harexsLog = (title: string, info?: string, opts?: OptionsProps) => {
  // argument warn
  if (!title) {
    title = "Harexs_Log";
    console.warn("arguments title is must be set");
  }

  // Is window or node
  let node = true;
  if (typeof window !== "undefined") {
    node = false;
  }
  // inital and normal Set
  let emoji = "🌈";
  let titleCSS = typeColor["primary"];
  let infoCSS = "";
  let infoText = "";
  let titleText = `%c${title}`;
  let nodeType = "primary";

  let result = [];

  if (opts?.type) {
    emoji = typeEmoji[opts.type];
    titleCSS = typeColor[opts.type];
    nodeType = opts.type;
  }
  if (opts?.icon) {
    emoji = opts.icon;
  }

  // insert emoji
  titleText = node
    ? titleText.replace("%c", `${emoji} `)
    : titleText.replace("%c", `%c${emoji} `);

  result = [`${titleText}`, titleCSS];
  if (info) {
    infoCSS = typeColor["info"];
    infoText = node ? `${info}` : `%c${info}`;
    result = [`${titleText}${infoText}`, titleCSS, infoCSS];
  }

  if (node) {
    result = info
      ? [
          `\x1b[${
            whichColor[nodeType as keyof typeof whichColor]
          }m${titleText}\x1b[${whichColor["info"]}m[${infoText}]`,
        ]
      : [
          `\x1b[${
            whichColor[nodeType as keyof typeof whichColor]
          }m${titleText}\x1b[0m`,
        ];
  }
  console.log(...result);
};

export default harexsLog;
