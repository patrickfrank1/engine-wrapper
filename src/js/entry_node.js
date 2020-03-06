// Assets
require('regenerator-runtime/runtime'); // babel dependency needed to compile

// Stockfish to be serve as instances of this factory
global.StockfishFactory = require('stockfish.wasm');

// Engine functions shared between browser and node implementation
const engine = require('./engine_functions');

// Temporary
engine.test();
engine.test();

// module.exports go here
