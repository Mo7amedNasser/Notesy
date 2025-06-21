import Note from "../models/Note.js";

/**
 * @desc    Get all notes
 * @route   GET /api/notes
 * @access  Public
 */
export async function getNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Newest first

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @desc    Get a single note by ID
 * @route   GET /api/notes/:id
 * @access  Public
 */
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @desc    Create a new note
 * @route   POST /api/notes
 * @access  Public
 */
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    const note = new Note({ title, content });
    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @desc    Update an existing note
 * @route   PUT /api/notes/:id
 * @access  Public
 */
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @desc    Delete a note
 * @route   DELETE /api/notes/:id
 * @access  Public
 */
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
