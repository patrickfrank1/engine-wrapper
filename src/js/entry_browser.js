require('regenerator-runtime/runtime'); // babel dependency needed to compile

require('../css/main.scss');

global.s = Stockfish();

// eslint-disable-next-line global-require
const engine = require('./engine_functions.js');

engine.test();
