'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var elems = {
    riadagestan: {
        title: '.itemTitle',
        domen: 'https://www.riadagestan.ru',
        image: '.preview_picture',
        text: '.text',
        views: '.itemHits b'
    },
    groznyInform: {
        title: '.news h1',
        domen: 'http://grozny-inform.ru',
        image: '.imgA img',
        text: '.news p',
        views: '.news p.views'
    },
    magastimes: {
        title: '.td-post-title h1',
        domen: 'http://magastimes.ru',
        image: '.td-module-thumb img',
        text: '.td-post-content p',
        views: '.td-nr-views-1898'
    }
};

exports.elems = elems;