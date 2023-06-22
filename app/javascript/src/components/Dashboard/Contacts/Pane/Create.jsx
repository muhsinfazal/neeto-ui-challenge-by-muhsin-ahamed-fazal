import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Create = ({ isPaneOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Pane isOpen={isPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("common.pane.title", { entity: t("entity.contact") })}
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};
export default Create;
