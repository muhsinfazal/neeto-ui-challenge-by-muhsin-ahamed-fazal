import React from "react";

import { Table as NeetoTable } from "neetoui";

import { DEFAULT_PAGE_SIZE, TOTAL_COUNT } from "./constants";
import { buildColumns, buildContacts } from "./utils";

const Table = ({ setIsShowDeleteAlert }) => (
  <NeetoTable
    columnData={buildColumns({ setIsShowDeleteAlert })}
    defaultPageSize={DEFAULT_PAGE_SIZE}
    rowData={buildContacts}
    totalCount={TOTAL_COUNT}
  />
);

export default Table;
