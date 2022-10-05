const conditionClose = (msg) => {
  let format = /(wes|ꦮꦼꦱ꧀)$/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  };
};

module.exports = conditionClose;
