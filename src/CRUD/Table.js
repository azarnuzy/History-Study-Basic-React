import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({ foods, editData }) => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi </th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.nama} </td>
              <td>{food.deskripsi} </td>
              <td>{food.harga} </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editData(food.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
