const router = require("express").Router();
const notes = require("../../db/db");

//get note
router.get("/notes", (req, res) => {
    res.json(notes);
});

//save note
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = 42; //notes.length.toString();

    res.json(req.body);
});

//delete note
router.delete("/notes", (req, res) => {
    res.status(202).send();
});

module.exports = router;
