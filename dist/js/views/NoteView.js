System.register([], function (exports_1, context_1) {
    "use strict";
    var NoteView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NoteView = (function () {
                function NoteView(target) {
                    this.container = document.querySelector(target);
                }
                NoteView.prototype.template = function (note) {
                    return "\n            <article class=\"quick-note\">\n                <small>" + note.date + "</small>\n                <h3>" + note.title + "</small>\n            </article>\n        ";
                };
                NoteView.prototype.update = function (model) {
                    var template = this.template(model);
                    this.container.insertAdjacentHTML('beforeend', template);
                };
                return NoteView;
            }());
            exports_1("NoteView", NoteView);
        }
    };
});
//# sourceMappingURL=NoteView.js.map