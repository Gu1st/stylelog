export type optionTypes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

export type logTypes = "log" | "trace" | "warn";

export interface OptionsProps {
  type?: optionTypes;
  icon?: string;
  title?: string;
  windowLogType?: logTypes;
  nodeLogType?: logTypes;
}

export const whichColor = {
  success: 92,
  error: 91,
  warning: 93,
  primary: 94,
  secondary: 96,
  info: 97,
};

export const typeEmoji: Record<optionTypes, any> = {
  success: "✅",
  error: "❌",
  secondary: "🌈",
  primary: "🌈",
  warning: "🌟",
  info: "🏐",
};

export const typeColor = {
  primary: `background:#30B6F1;color:#F8F8F8;padding:5px;border-radius:4px;`,
  secondary: `background:#50CAFF;color:#F8F8F8;padding:5px;border-radius:4px;`,
  success: `background:#079507;color:#F8F8F8;padding:5px;border-radius:4px;`,
  warning: `background:#DFD10E;color:#F8F8F8;padding:5px;border-radius:4px;`,
  error: `background:#E50808;color:#F8F8F8;padding:5px;border-radius:4px;`,
  info: `background:#ccc;color:#F8F8F8;padding:5px;border-radius:4px;`,
};
