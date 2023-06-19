import React from "react";

import { Table as NeetoTable } from "neetoui";

import { COLUMNS, CONTACTS, DEFAULT_PAGE_SIZE, TOTAL_COUNT } from "./constants";

const Table = ({ setIsShowDeleteAlert }) => (
  <NeetoTable
    columnData={COLUMNS({ setIsShowDeleteAlert })}
    defaultPageSize={DEFAULT_PAGE_SIZE}
    rowData={CONTACTS}
    totalCount={TOTAL_COUNT}
  />
);

export default Table;
