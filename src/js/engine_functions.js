module.exports.test = function test() {
  const sf = new global.StockfishFactory();

  sf.addMessageListener((line) => {
    console.log(line);
  });

  sf.postMessage('uci');
  sf.postMessage('go depth 15');
};
