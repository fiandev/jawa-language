const consoleLog = (msg) => {
  let format = /(tulisen|ꦠꦸꦭꦶꦱꦺꦤ꧀) (.*)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[2]});`,
  };
};

module.exports = consoleLog;
