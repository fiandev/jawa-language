const valueTransform = require("../../utils/valueTransform");
const mapCompare = require("../../utils/mapCompare");

const conditionIf = (msg) => {
  let format = /(nek|ꦤꦼꦏ꧀) ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;
  if (match[3]) {
    match[3] = mapCompare[match[3]];
  }

  return {
    exp: `if (${match[2]} ${match[3]} ${valueTransform(match[4])})`,
    openGroup: true,
  };
};

module.exports = conditionIf;
