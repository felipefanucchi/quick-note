import {Note as NoteType} from '../intefaces/Note';

export class NoteView {
    public container: HTMLElement;

    constructor(target: string) {
        this.container = document.querySelector(target);
    }

    template(note: NoteType): string {
        return `
            <article class="quick-note">
                <small>${note.date}</small>
                <h3>${note.title}</small>
            </article>
        `;
    }

    update(model: NoteType): void {
        const template = this.template(model);
        this.container.insertAdjacentHTML('beforeend', template);
    }
}