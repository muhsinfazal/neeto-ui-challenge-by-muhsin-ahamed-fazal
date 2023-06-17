import React from "react";

import Card from "./Card";

const List = ({ notes, setShowDeleteAlert }) => (
  <div className="w-full space-y-4">
    {notes.map(note => (
      <Card key={note.id} {...note} setShowDeleteAlert={setShowDeleteAlert} />
    ))}
  </div>
);

export default List;
