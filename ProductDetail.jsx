import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    description: "Noise-cancelling over-ear headphones with 20 hours battery.",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    description: "Fitness tracker with heart rate monitor and GPS.",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable speaker with deep bass and water resistance.",
    image: "https://via.placeholder.com/300x200?text=Speaker",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div style={{padding:"20px"}}>Product not found</div>;

  return (
    <div style={{padding:"20px"}}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{width:"300px", height:"200px"}} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
}