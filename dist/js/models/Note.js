System.register([], function (exports_1, context_1) {
    "use strict";
    var Note;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Note = (function () {
                function Note(date, title) {
                    this.date = date;
                    this.title = title;
                }
                return Note;
            }());
            exports_1("Note", Note);
        }
    };
});
//# sourceMappingURL=Note.js.map