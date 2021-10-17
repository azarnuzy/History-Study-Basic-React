import React from 'react';

const foods = [
  {
    nama: 'Soto',
    harga: 12000,
  },
  {
    nama: 'Bakso',
    harga: 10000,
  },
  {
    nama: 'Mie Ayam',
    harga: 14000,
  },
  {
    nama: 'Nasi Goreng',
    harga: 15000,
  },
];

const total_harga = foods.reduce((total_bayar, food) => {
  return total_bayar + food.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {foods.map((food) => (
          <li>
            Nama: {food.nama} harga: {food.harga}
          </li>
        ))}
      </ul>
      <h2>Map Filter harga yang lebih dari 12000</h2>
      <ul>
        {foods
          .filter((food) => food.harga > 12000)
          .map((food) => (
            <li>
              {food.nama} || {food.harga}{' '}
            </li>
          ))}
      </ul>
      <h2>Total harga semua : {total_harga}</h2>
    </div>
  );
};

export default Map;
