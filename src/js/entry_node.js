require('regenerator-runtime/runtime'); // babel dependency needed to compile

// eslint-disable-next-line global-require
global.StockfishFactory = require('stockfish.wasm');

// eslint-disable-next-line global-require
const engine = require('./engine_functions');

engine.test();
engine.test();
