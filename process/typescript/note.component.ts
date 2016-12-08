import {Component} from 'angular2/core';

@Component({
  selector: 'note',
  templateUrl: 'partials/app.html',
  styleUrls: ['css/note.css']
})

export class NoteComponent{

    teams = ['Call Mom','Email to John']


    addNote(Note){
      this.teams.push(Note);
    }
}
