const throwError = (msg) => {
  const format = /(uncalen|ꦈꦚ꧀ꦕꦭꦺꦤ꧀) (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`,
  };
};

module.exports = throwError;
