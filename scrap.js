
const request = require('request-promise');
const cheerio = require('cheerio')

request("https://www.washingtonpost.com/national-security/china-us-alaska-meeting/2021/03/19/a18de1c8-88dd-11eb-8a67-f314e5fcf88d_story.html",(error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const siteHeading = $(".pb-md");
        console.log(siteHeading.text());
    }
})
ad