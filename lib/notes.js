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
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( noteArray , null, 2)
    );
    return note;
}

module.exports = {
    validateNote,
    createNewNote
};