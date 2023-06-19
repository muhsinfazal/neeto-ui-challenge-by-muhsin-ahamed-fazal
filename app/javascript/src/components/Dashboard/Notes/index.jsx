import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import DeleteAlert from "components/commons/DeleteAlert";
import EmptyState from "components/commons/EmptyState";

import List from "./List";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        title={t("notes.header.title")}
        actionBlock={
          <Button
            icon={Plus}
            label={t("common.header.add", { entity: "Note" })}
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          placeholder: t("common.header.searchPlaceholder"),
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <List notes={notes} setShowDeleteAlert={setShowDeleteAlert} />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add new note"
          subtitle="Add your notes to send customized emails to them."
          title="Looks like you don't have any notes!"
        />
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      <DeleteAlert
        entity="Note"
        isOpen={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
      />
    </Container>
  );
};

export default Notes;
