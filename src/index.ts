import type { OptionsProps } from "./init";
import { typeEmoji, whichColor, typeColor } from "./init";

const harexsLog = (opts?: OptionsProps) => {
  let title = "Harexs-Log：";
  // normal title
  if (opts?.title) {
    title = opts.title;
  }
  // Is window or node
  let node = true;
  if (typeof window !== "undefined") {
    node = false;
  }
  let emoji = "🌈";
  let titleCSS = typeColor["primary"];
  let nodeType = "primary";

  let result: any = [];

  if (opts?.type) {
    emoji = typeEmoji[opts.type];
    titleCSS = typeColor[opts.type];
    nodeType = opts.type;
  }
  if (opts?.icon) {
    emoji = opts.icon;
  }

  return (...messages: any[]) => {
    messages.forEach((msg) => {
      if (node) {
        result.push(msg);
      } else {
        result.push(msg);
      }
    });

    if (node) {
      result.unshift(
        `\x1b[${
          whichColor[nodeType as keyof typeof whichColor]
        }m${emoji} ${title}\x1b[0m`
      );
      if (opts?.nodeLogType) {
        console[opts.nodeLogType](...result);
      } else {
        console.log(...result);
      }
    } else {
      result.unshift(titleCSS);
      result.unshift(`%c${emoji} ${title}`);
      if (opts?.windowLogType) {
        console[opts.windowLogType](...result);
      } else {
        console.trace(...result);
      }
    }
  };
};

export default harexsLog;
