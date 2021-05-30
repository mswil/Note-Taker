const router = require("express").Router();
const notes = require("../../db/db");

const { validateNote, createNewNote, findById, deleteNoteById } = require("../../lib/notes");

//get note
router.get("/notes", (req, res) => {
    res.json(notes);
});

//save note
router.post("/notes", (req, res) => {

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
router.delete("/notes/:id", (req, res) => {
    deleteNoteById(parseInt(req.params.id), notes);
    res.status(202).send();
});

module.exports = router;
