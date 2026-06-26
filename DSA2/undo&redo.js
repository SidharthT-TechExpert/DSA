class Editor {
    constructor() {
        this.text = '';
        this.undoStack = [];
        this.redoStack = [];
    }

    type(char) {
        this.text += char;
        this.undoStack.push(char);

        // New action clears redo history
        this.redoStack = [];

    }

    undo() {
        if (this.undoStack.length === 0) {
            console.log("Nothing to undo");
            return;
        }

        let undo = this.undoStack.pop();
        this.text = this.text.slice(0, -1);
        this.redoStack.push(undo);
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log('Nothing to redo!');
            return;
        }

        let redo = this.redoStack.pop();

        this.text += redo;

        this.undoStack.push(redo);
    }

    print() {
        if (this.text.length <= 0) 
            return console.log('Empty text!');
        console.log("Document:", this.text);
    }
}

let editor = new Editor();

editor.type("A");
editor.type("B");
editor.type("C");

console.log(editor.text); // ABC

editor.undo();
console.log(editor.text); // AB

editor.undo();
console.log(editor.text); // A

editor.redo();
console.log(editor.text); // AB
editor.undo();
console.log(editor.text); // A
editor.redo();
console.log(editor.text); // AB
editor.redo();
console.log(editor.text);  // ABC