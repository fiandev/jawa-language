const tryFn = (msg) => {
  let format = /(nyobak|try|ꦚꦺꦴꦧꦏ꧀)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  };
};

module.exports = tryFn;
