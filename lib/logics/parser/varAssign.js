const valueTransform = require("../../utils/valueTransform");

const varAssign = (msg) => {
  let format = /(aturen|ꦄꦠꦸꦫꦺꦤ꧀) ([a-zA-Z0-9]+) iku ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `let ${match[2]} = ${valueTransform(match[3])};`,
  };
};

module.exports = varAssign;
