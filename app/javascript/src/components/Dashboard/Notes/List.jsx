import React from "react";

import Card from "./Card";

const List = ({ notes, setIsShowDeleteAlert }) => (
  <div className="w-full space-y-4">
    {notes.map(note => (
      <Card
        key={note.id}
        {...note}
        setIsShowDeleteAlert={setIsShowDeleteAlert}
      />
    ))}
  </div>
);

export default List;
