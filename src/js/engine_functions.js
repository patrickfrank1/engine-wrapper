module.exports.test = function () {
  global.s.addMessageListener((line) => {
    console.log(line);
  });

  global.s.postMessage('uci');
};
