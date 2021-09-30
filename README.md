# console-emoji-log
show console logs with emoji

## Usage
```bash
yarn add console-emoji-log
npm install console-emoji-log
```

```js
// use as commonjs
const console = require("console-emoji-log");
// use as ES module
// import console from "console-emoji-log";

console.log("log"); // ⚪️ => log
console.info("info"); // 🔵 => info
console.warn("warn"); // 🟡 => warn
console.error("error"); // 🔴 => error
console.success("success"); // ✅ => success 
```

## Custom Setting
> console.setConfig(options)
```js
console.setConfig({
  // change log prefix
  prefix: "->", 

  // change emoji settings
  emoji: {
    log: "👉",
  },
});

console.log("log");  // 👉 -> log
console.success("success"); // ✅ -> success
```

```js
console.setConfig({
  // turn emoji icon off
  useEmoji: false,

  // clear log prefix
  prefix: "",
});
console.log("log"); // log
console.success("success"); // success
```
