const router = require("express").Router();
const notes = require("../../db/db");

const { validateNote, createNewNote } = require("../../lib/notes");

//get note
router.get("/notes", (req, res) => {
    res.json(notes);
});

//save note
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

//delete note
router.delete("/notes", (req, res) => {
    res.status(202).send();
});

module.exports = router;
