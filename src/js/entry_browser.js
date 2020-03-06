// Assets
require('regenerator-runtime/runtime'); // babel dependency needed to compile
require('../css/main.scss');

// Stockfish to be serve as instances of this factory
global.StockfishFactory = Stockfish;

// Engine functions shared between browser and node implementation
const engine = require('./engine_functions.js');

// Temporary
engine.test();
engine.test();
