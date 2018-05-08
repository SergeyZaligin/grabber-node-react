const unirest = require('unirest');
const cheerio = require('cheerio');

function parsePost (url, elems) {

    unirest.get(url)
    .end(function(response){
        const body = response.body;
        const $ = cheerio.load(body);
        //console.log($);
        const title = $(elems.title).text().trim();
        const image = elems.domen + $(elems.image).attr('src');
        const text = $(elems.text).text().trim();
        const views = $(elems.views).text().trim();

        const post = {
            title,
            image,
            text,
            views
        };

        console.log(post);
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    })

}

module.exports = parsePost;