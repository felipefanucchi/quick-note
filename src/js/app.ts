import {NoteController} from './controllers/NoteController';

const noteController = new NoteController();

window.addEventListener('load', () => {
    noteController.addNote();
})