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
  const [isLoading, setIsLoading] = useState(true);
  const [isShowNewNotePane, setIsShowNewNotePane] = useState(false);
  const [isShowDeleteAlert, setIsShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
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
            onClick={() => setIsShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          placeholder: t("common.header.searchPlaceholder"),
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <List notes={notes} setIsShowDeleteAlert={setIsShowDeleteAlert} />
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setIsShowNewNotePane(true)}
          primaryActionLabel="Add new note"
          subtitle="Add your notes to send customized emails to them."
          title="Looks like you don't have any notes!"
        />
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setIsShowNewNotePane}
        showPane={isShowNewNotePane}
      />
      <DeleteAlert
        entity="Note"
        isOpen={isShowDeleteAlert}
        onClose={() => setIsShowDeleteAlert(false)}
      />
    </Container>
  );
};

export default Notes;
