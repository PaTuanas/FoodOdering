import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Order.css'

export default function Order() {
  const orders = [
    { id: 3, name: 'Layla', items: 'Turtle || Cherries, Chocolate;', price: 10.7 },
    { id: 4, name: 'Layla', items: 'Turtle || Cherries, Chocolate;', price: 10.7 },
  ];
  return (
    <div>
        <Navbar></Navbar>
        <h1 className='title'>ORDER</h1>
        <div className="orderContainer">
          {orders.map((order) => (
            <div className="orderWrapper" key={order.id}>
              <div><strong>Order Id:</strong> {order.id}</div>
              <div><strong>Name:</strong> {order.name}</div>
              <div><strong>Items:</strong> {order.items}</div>
              <div><strong>Price:</strong> ${order.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
  )
}
