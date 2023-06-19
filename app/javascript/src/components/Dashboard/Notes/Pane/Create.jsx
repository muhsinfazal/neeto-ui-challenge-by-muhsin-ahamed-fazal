import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";
import { INITIAL_VALUES } from "./Form/constants";

const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("common.pane.title", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={INITIAL_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
