// node runs file with strict interpretation
'use strict';

var express = require('express');
var router = express.Router();
var Note = require('../models/note');

var request = require('request');
var cheerio = require('cheerio');

// API routes

// GET // Request all notes
router.get('/notes', (req, res) => {
  Note.find({}, function(err, notes) {
    if (err) {
      return res.status(500).json({message: err.message});
    } 
    else {
      res.json({notes: notes});
    }
  });
});


// GET // Request a specific note
router.get('/notes/:_id', (req, res) => {
  var id = req.params._id;

  Note.findOne({'_id': id}, function(err, note) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json( {note: note});
    }
  });
});

// POST // Create a new note

// router.post('/notes', (req, res) => {
//   console.log('A new note will be created');
// });


function getData (headers, html) {
  console.log('headers in get data function:   ', headers);
  let rows = html('#SeasonStats1_dgSeason2').children('table').children('tbody').children('.rgRow');
  console.log('rows:   ', typeof rows);
  console.log('length:   ', rows.length);
  // 0 gives year, 1 gives team
  let rowNum = '22';

  let data = {
    year: '',
    team: '',
  };

  data.year  = rows['22'].children[1].children[0].children[0].data;
  data.team  = rows['22'].children[2].children[0].children[0].data;

  for (var i = 0; i < headers.length; i++) {
    let name = headers[i];
    data[name] = rows['22'].children[i + 3].children[0].data;
  };
  // data.Kper9 = rows['22'].children[3].children[0].data;
  console.log('data: ', data);
  return data;
  // console.log('rows:   ', rows);
}


router.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

    var url = 'http://www.fangraphs.com/statss.aspx?playerid=6345&position=P/';

    // todo: build a data object

    request(url, function(error, response, html){

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            let headers = $('#SeasonStats1_dgSeason2').children('table').children('thead').children('tr').children('th');
            let headerNums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '15'];
            let headerNames = [];

            headerNums.forEach( (num) => {
              let header = headers[num].children[0].children[0].data;
              headerNames.push(header);
            });

            setTimeout( () => { 
               let data = getData(headerNames, $);

               res.json( {data: data});

            }, 1000);


      
            // console.log(rows);

            // Finally, we'll define the variables we're going to capture

            // var title, release, rating;
            // var json = { title : "", release : "", rating : ""};
        }
    });
});



// export the router
module.exports = router;
