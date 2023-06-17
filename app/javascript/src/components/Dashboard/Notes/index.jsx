import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete, Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import EmptyState from "components/commons/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
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
            label={t("notes.header.add")}
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          placeholder: t("notes.header.searchPlaceholder"),
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <>
          <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedNoteIds.length}
                icon={Delete}
                label="Delete"
                size="small"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          />
          <Table
            fetchNotes={fetchNotes}
            notes={notes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        </>
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
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </Container>
  );
};

export default Notes;
