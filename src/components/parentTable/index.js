import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

const ParentTable = () => {
  const [parentData, setParentData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  //serve up parentData
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

  const ParentRow = (props) => {
    const dataInput = props.dataInput;
    //data.data is array containing 7 objects
    // const renderRows = dataInput.map((parent) => (
    //   <tr key={uuidv4()}>
    //     <td key={uuidv4()}>{parent.id}</td>
    //     <td key={uuidv4()}>{parent.sender}</td>
    //     <td key={uuidv4()}>{parent.receiver}</td>
    //     <td key={uuidv4()}> {parent.totalAmount}</td>
    //   </tr>
    // ));
    const rowRendered = dataInput[currentPage];
    console.log(rowRendered);
    return (
      <tr>
        <td>{rowRendered.id}</td>
        <td>{rowRendered.sender}</td>
        <td>{rowRendered.receiver}</td>
        <td>{rowRendered.totalAmount}</td>
      </tr>
    );
  };

  //Handles pagination click event
  const paginationClick = (event) => {
    setCurrentPage(event.target.id - 1);
  };

  //Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i < parentData.length; i++) {
    pageNumbers.push(
      <Pagination.Item key={i} id={i} onClick={paginationClick}>
        {i}
      </Pagination.Item>
    );
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
          <ParentRow dataInput={parentData} />
        </tbody>
      </Table>

      <Pagination>{pageNumbers}</Pagination>
    </React.Fragment>
  );
};

export default ParentTable;
