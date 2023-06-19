import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";
import { t } from "i18next";

import Profile from "./Profile";

const CONTACTS_COUNT = [...Array(9).keys()];

export const CONTACTS = CONTACTS_COUNT.map((_, contact_index) => ({
  id: contact_index + 1,
  name: (contact_index + 1) % 2 === 0 ? "Jacob Jones" : "Ronald Richards",
  email: "albert@borer.com",
  createdAt: "Feb, 5, 2021",
}));

export const COLUMNS = ({ setIsShowDeleteAlert }) => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    render: (_, { name }) => <Profile name={name} />,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    align: "right",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Dropdown.Menu>
          <Dropdown.MenuItem.Button>
            {t("common.actionDropdown.edit")}
          </Dropdown.MenuItem.Button>
          <Dropdown.MenuItem.Button onClick={() => setIsShowDeleteAlert(true)}>
            {t("common.actionDropdown.delete")}
          </Dropdown.MenuItem.Button>
        </Dropdown.Menu>
      </Dropdown>
    ),
  },
];

export const DEFAULT_PAGE_SIZE = 10;
export const TOTAL_COUNT = 100;
