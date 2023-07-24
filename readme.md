# @harexs/style-log

a simple console style log for devtools or nodejs

## Install

```
$ npm install @harexs/style-log
```

## Usage

```js
import hLog from "@harexs/style-log";

const Log = hLog();
const warningLog = hLog({ type: "warning", title: "This is a Warning Log" });

Log("do something...", 1000);
warningLog("Let me see");
```

## configuration

> You can customize the title content and type
> Eexample:

```js
const Log = hLog({
  type: "warning",
  title: "This is a Warning Log",
  icon: "🌈",
  windowLogType: "trace",
  nodeLogType: "log",
});
```

Options Props:

```typescript
interface OptionsProps {
  type?: optionTypes; // primary | secondary | success | warning | error | info
  icon?: string;
  title?: string;
  windowLogType?: logTypes; // log | trace | warn;
  nodeLogType?: logTypes; // log | trace | warn;
}
```
