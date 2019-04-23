//SCRAPE SCRIPT


//These packages make scrapes possible
var request = require('request');
var cheerio = require('cheerio');

var scrape = function(cb) {

    request("http://www.newyorktimes.com"), function(err, res, body){
        
    var $ = cheerio.load(body);
        
    var articles = [];
        
        $(".theme-summary").each(function(i, element){
            
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();

            if(head && summary){
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                        
                 var dataToAdd = {
                     headline: headNeat,
                     summary: sumNeat
                 };
                 
                 articles.push(dataToAdd);   
            }
        });
        cb(articles);
    }};

    module.exports = scrape;
