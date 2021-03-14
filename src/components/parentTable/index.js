import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const ParentTable = () => {
  const [parentData, setParentData] = useState([]);

  const getParentData = () => {
    axios
      .get("./Parent.json")
      .then(({ data }) => {
        console.log(data.data);
        setParentData(data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getParentData();
  }, []);

  //data arrray looks like {} {} {} {} {} {} {}

  

  const ParentRows = (props) => {
    const dataInput = props.dataInput;
    console.log(dataInput);

    const renderRows = dataInput.map((parent) => (
      <tr>
        <td>{parent.id}</td>
        <td>{parent.sender}</td>
        <td>{parent.receiver}</td>
        <td>{parent.totalAmount}</td>
      </tr>
    ));

    return renderRows
  }

  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <ParentRows dataInput={parentData} />
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ParentTable;
