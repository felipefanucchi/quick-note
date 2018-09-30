System.register(["../models/Note", "../views/NoteView"], function (exports_1, context_1) {
    "use strict";
    var Note_1, NoteView_1, NoteController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Note_1_1) {
                Note_1 = Note_1_1;
            },
            function (NoteView_1_1) {
                NoteView_1 = NoteView_1_1;
            }
        ],
        execute: function () {
            NoteController = (function () {
                function NoteController() {
                    this.view = new NoteView_1.NoteView('#notes');
                }
                NoteController.prototype.addNote = function () {
                    var note = new Note_1.Note(new Date().toLocaleString(), 'Teste');
                    this.view.update(note);
                };
                return NoteController;
            }());
            exports_1("NoteController", NoteController);
        }
    };
});
//# sourceMappingURL=NoteController.js.map