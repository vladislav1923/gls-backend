const request = require('request-promise');
const cheerio = require('cheerio');

const htmlParseController = function (queryParams) {
    return new Promise((resolve, reject) => {
        request(encodeURI(queryParams.url))
            .then((html) => {
                const dom = cheerio.load(html);
                const language = dom('html').attr('lang') || '';
                const title = dom("title").text();
                const description = dom('meta[name="description"]').attr('content') || '';
                const keywords = dom('meta[name="keywords"]').attr('content');
                const imageUrl = dom('meta[property="og:image"]').attr('content') || '';

                resolve({
                    language,
                    title,
                    description,
                    keywords: keywords ? keywords.split(', ') : [],
                    imageUrl
                })
            })
            .catch((e) => reject(e))
    });
};

module.exports = htmlParseController;
