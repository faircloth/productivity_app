// node runs file with strict interpretation
'use strict';

// Express router
var express = require('express');
var router = express.Router();


// scrape helpers
var request = require('request');
var cheerio = require('cheerio');


// get player info api route
router.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

    // var playerId = '1890'; // matt moore
    var playerId = '4153'; //jake arrieta
    // var playerId = '14106'; //addison russell

    // var playerId = '6345'; // archer
    var position = 'P';
    var url = 'http://www.fangraphs.com/statss.aspx?playerid=' + playerId + '&position=' + position + '/';

    // todo: build a data object

    request(url, function(error, response, html){

        console.log(url);

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            let headers = $('#SeasonStats1_dgSeason2').children('table').children('thead').children('tr').children('th');
            let headerNums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15'];
            let headerNames = [];

            headerNums.forEach( (num) => {
              let header = headers[num].children[0].children[0].data;
              headerNames.push(header);
            });

            setTimeout( () => { 
               let data = getData(headerNames, $);

               res.json( {data: data});

            }, 1000);
        }
    });
});



// function creates data for fangraphs scrape
function getData (headers, html) {
  
  let rows = html('#SeasonStats1_dgSeason2').children('table').children('tbody').children('.grid_minors_show, .rgAltRow, .grid_projectionsin_show, .grid_total');  
  let response = [];

  for (var i = 0; i < rows.length; i++) {
    
    // empty obj at the start of each iteration
    let data = {};
    let rowNum = i;
    console.log('rowNum', rowNum);
    
    // control for year variances
    if (rows[rowNum].children[1].children[0].children) {
      data.year  = rows[rowNum].children[1].children[0].children[0].data;       
    } else {
      data.year  = rows[rowNum].children[1].children[0].data;
      // data.team  = rows[rowNum].children[2].children[0].children[0].data;
    }

    // control for team variances
    if (rows[rowNum].children[2].children[0].children) {
      data.team  = rows[rowNum].children[2].children[0].children[0].data;
    } else {
      data.team  = rows[rowNum].children[2].children[0].data;
    }
    
    // get all data for each year and team
    for (var x = 0; x < headers.length; x++) {
      let name = headers[x];
      data[name] = rows[rowNum].children[x + 3].children[0].data;
    };
    response.push(data);
  };

  return response;
}


module.exports = router;