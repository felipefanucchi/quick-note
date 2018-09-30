import {Note} from '../models/Note';
import {NoteView} from '../views/NoteView';
import {Note as NoteType} from '../intefaces/Note';

export class NoteController {
    private view = new NoteView('#notes');

    addNote (): void {
        const note: NoteType = new Note(new Date().toLocaleString(), 'Teste');
        this.view.update(note);
    }
}