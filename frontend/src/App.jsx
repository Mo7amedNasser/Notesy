import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
