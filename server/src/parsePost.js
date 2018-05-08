import unirest from 'unirest';
import cheerio from 'cheerio';

async function parsePost (url, elems) {

    await unirest.get(url)
    .end(function(response){
        const body = response.body;
        const $ = cheerio.load(body);
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