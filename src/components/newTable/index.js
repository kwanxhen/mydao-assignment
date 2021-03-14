import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/core/data-grid';


const NewTable = () => {

  //serve up parentData
  // const getParentData = async () => {
  //   await axios
  //     .get("./Parent.json")
  //     .then(({ data }) => {
  //       console.log(data.data);
  //     })
  //     .catch((err) => {});
  // };
  // useEffect(() => {
  //   getParentData();
  // }, []);

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];
  

  return (
    <React.Fragment>
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </React.Fragment>
  );
};

export default NewTable;
