import {useEffect,useState } from "react";
import axios from "axios"
const Note = ({ note }) => {
  return <li>{note.content}</li>;
};
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll,setShowAll] = useState(true);
  const hook = () => {
    console.log("effect");
    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        setNotes(response.data);
      })
  }
  useEffect(hook,[]);
  const addNote = (event) => {
    event.preventDefault();
    const newnoteobj = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newnoteobj));
    setNewNote('');
    console.log("button clicked", event.target);
  };
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
