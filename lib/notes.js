const fs = require("fs");
const path = require("path");

const validateNote = note => {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

const createNewNote = (note, noteArray) => {
    note.id = assignId(noteArray);
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return note;
}

const findById = (id, noteArray) => {
    const result = noteArray.find(note => note.id === id);
    return result;
}

const deleteNoteById = (id, noteArray) => {
    const note = findById(id, noteArray);

    noteArray.splice(noteArray.indexOf(note), 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
}

const assignId = noteArray => {
    if (noteArray.length > 0) {
        let max = noteArray[0].id;
        for (let i = 0; i < noteArray.length; i++) {
            if (noteArray[i].id > max) {
                max = noteArray[i].id;
            }
        }
        return ++max;
    }
    return 1;
}

module.exports = {
    validateNote,
    createNewNote,
    findById,
    deleteNoteById,
};