System.register(["./controllers/NoteController"], function (exports_1, context_1) {
    "use strict";
    var NoteController_1, noteController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NoteController_1_1) {
                NoteController_1 = NoteController_1_1;
            }
        ],
        execute: function () {
            noteController = new NoteController_1.NoteController();
            window.addEventListener('load', function () {
                noteController.addNote();
            });
        }
    };
});
//# sourceMappingURL=app.js.map