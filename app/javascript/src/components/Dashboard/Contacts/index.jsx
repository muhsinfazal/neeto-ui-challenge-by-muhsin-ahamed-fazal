import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";

import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [isShowDeleteAlert, setIsShowDeleteAlert] = useState(false);

  return (
    <Container>
      <Header
        title={t("contacts.header.title")}
        actionBlock={
          <Button
            icon={Plus}
            label={t("common.header.add", { entity: t("entity.contact") })}
            size="small"
            onClick={() => setIsPaneOpen(true)}
          />
        }
        searchProps={{
          placeholder: t("common.header.searchPlaceholder"),
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      <Table setIsShowDeleteAlert={setIsShowDeleteAlert} />
      <NewContactPane
        isPaneOpen={isPaneOpen}
        onClose={() => setIsPaneOpen(false)}
      />
      <DeleteAlert
        entity={t("entity.contact")}
        isOpen={isShowDeleteAlert}
        onClose={() => setIsShowDeleteAlert(false)}
      />
    </Container>
  );
};

export default Contacts;
