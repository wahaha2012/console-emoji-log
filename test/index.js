const console = require("../dist/console");

console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.success("success");

console.setConfig({
  prefix: "->",
  emoji: {
    log: "👉",
  },
});

console.log("log");
console.success("success");

console.setConfig({
  useEmoji: false,
  prefix: "",
});
console.log("log");
console.success("success");
