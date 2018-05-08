'use strict';

var _parsePost = require('./parsePost');

var _parsePost2 = _interopRequireDefault(_parsePost);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//url: 'https://www.riadagestan.ru/news/president/vladimir_vasilev_pozdravil_rabotnikov_otrasli_svyazi_dagestana_s_dnem_radio/',

//url: 'http://grozny-inform.ru/news/politic/95747/',

//url: 'http://magastimes.ru/mezhdunarodnoe-agentstvo-interrekord-priznalo-zhitelya-ingushetii-appaza-ilieva-starejshim-chelovekom-planety/',        ,

(0, _parsePost2.default)('http://grozny-inform.ru/news/politic/95747/', _config.elems.groznyInform);