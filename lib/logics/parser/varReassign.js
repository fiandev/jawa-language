const valueTransform = require("../../utils/valueTransform");

const varReassign = (msg) => {
  let format = /(gantien|gentien|ꦒꦼꦤ꧀ꦠꦶꦪꦺꦤ꧀|ꦒꦤ꧀ꦠꦶꦪꦺꦤ꧀) ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `${match[2]} = ${valueTransform(match[3])};`,
  };
};

module.exports = varReassign;
