import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = () => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi </th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tabel;
