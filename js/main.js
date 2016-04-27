import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');

let url = 'https://safe-inlet-86596.herokuapp.com/api/notes';


// testing it with jquery
$.getJSON(url).then((res)=> {
  var notes = res.notes;
  notes.forEach( (note) => {
    $('.notes').append(`
      <div class="note">
        <p class="title">${note.title}</p>
      </div>
      `)
  });
});
