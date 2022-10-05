const loopFor = (msg) => {
  let format = /(gae|ꦒꦌ) ([a-zA-Z0-9]+) (peng|ꦥꦼꦁ) ([a-zA-Z0-9]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `for(let ${match[2]} = 0; ${match[2]} <= ${match[4]}; ${match[2]}++)`,
    openGroup: true,
  };
};

module.exports = loopFor;
