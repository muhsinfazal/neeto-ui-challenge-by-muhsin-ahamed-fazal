import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import Table from "./Table";

const Contacts = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <Header
        title={t("contacts.header.title")}
        actionBlock={
          <Button icon={Plus} label={t("contacts.header.add")} size="small" />
        }
        searchProps={{
          placeholder: t("common.header.searchPlaceholder"),
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      <Table />
    </Container>
  );
};

export default Contacts;
