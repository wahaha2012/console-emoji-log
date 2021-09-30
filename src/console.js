const getCSSText = (color) => ["font-size: 11px;", `color: ${color};`];
const emoji = {
  log: "\u26aa\ufe0f",
  info: "\ud83d\udd35",
  warn: "\u26a0\ufe0f",
  warn: "\ud83d\udfe1",
  error: "\ud83d\udd34",
  success: "\u2705",
};

export class Console {
  constructor(config) {
    this.config = Object.assign(
      {
        useEmoji: true,
        prefix: "=>",
        // emoji: {}
      },
      config || {}
    );
    this.config.emoji = Object.assign({}, emoji, (config || {}).emoji);
  }

  setConfig(options) {
    this.config = Object.assign({}, this.config, options || {});
    this.config.emoji = Object.assign({}, emoji, this.config.emoji || {});
  }

  _getPrefix(emojiType) {
    return `%c${this.config.useEmoji ? this.config.emoji[emojiType] : ""}%c${
      this.config.prefix ? " " + this.config.prefix : ""
    }`;
  }

  log(...args) {
    console.log(this._getPrefix("log"), ...getCSSText("#000000"), ...args);
  }

  info(...args) {
    console.log(this._getPrefix("info"), ...getCSSText("#409EFF"), ...args);
  }

  warn(...args) {
    console.log(this._getPrefix("warn"), ...getCSSText("#E6A23C"), ...args);
  }

  error(...args) {
    console.log(this._getPrefix("error"), ...getCSSText("#ff0000"), ...args);
  }

  success(...args) {
    console.log(this._getPrefix("success"), ...getCSSText("#67C23A"), ...args);
  }
}

const instance = new Console();

export default instance;

module.exports = instance;
