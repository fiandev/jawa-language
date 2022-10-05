const conditionElse = (msg) => {
  let format = /(gak blas|ꦒꦏ꧀ꦧ꧀ꦭꦱ꧀)$/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true,
  };
};

module.exports = conditionElse;
