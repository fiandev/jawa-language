/**
 * @param msg {string}
 */
const functionDeclarationEnd = (msg) => {
  let format = /(wes|sak mene|ꦱꦏ꧀ꦩꦼꦤꦼ|ꦮꦼꦱ꧀)/g;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: "",
    closeGroup: true,
  };
};

module.exports = functionDeclarationEnd;
