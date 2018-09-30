System.register([], function (exports_1, context_1) {
    "use strict";
    var Notes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Notes = (function () {
                function Notes() {
                    this.notes = new Array();
                }
                Notes.prototype.add = function (note) {
                    this.notes.push(note);
                };
                Notes.prototype.array = function () {
                    return [].concat(this.notes);
                };
                return Notes;
            }());
            exports_1("Notes", Notes);
        }
    };
});
//# sourceMappingURL=Notes.js.map