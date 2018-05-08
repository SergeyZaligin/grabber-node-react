import parsePost from './parsePost';
import { elems } from './config';

//url: 'https://www.riadagestan.ru/news/president/vladimir_vasilev_pozdravil_rabotnikov_otrasli_svyazi_dagestana_s_dnem_radio/',

//url: 'http://grozny-inform.ru/news/politic/95747/',

//url: 'http://magastimes.ru/mezhdunarodnoe-agentstvo-interrekord-priznalo-zhitelya-ingushetii-appaza-ilieva-starejshim-chelovekom-planety/',        ,

parsePost (
    'http://grozny-inform.ru/news/politic/95747/', 
    elems.groznyInform
);