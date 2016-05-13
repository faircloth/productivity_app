// node runs file with strict interpretation
'use strict';

// Express router
var express = require('express');
var router = express.Router();


// scrape helpers
var request = require('request');
var cheerio = require('cheerio');


// get player info api route
router.post('/scrape', function(req, res){
    
    var player   = req.body;
    var fgId     = player.fgId;
    var position = player.position;
    var url = 'http://www.fangraphs.com/statss.aspx?playerid=' + fgId + '&position=' + position + '/';

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
  
  let rows = html('#SeasonStats1_dgSeason2').children('table').children('tbody').children('.grid_minors_show, .rgAltRow, .grid_projectionsin_show, .grid_total, .rgRow').not('.grid_projections_hide, .grid_postseason, .grid_average, .grid_postseason, .grid_postseason_total, .grid_multi');  

  // TODO: isolate and remove 'averages'

  

  // TODO: format differently
  // --
  // grid_projectionsin_show
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