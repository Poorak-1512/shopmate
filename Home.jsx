import React from "react";
import { Link } from "react-router-dom";

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

export default function Home() {
  return (
    <div style={{padding:"20px"}}>
      <h2>Featured Products</h2>
      <div style={{display:"flex",gap:"20px"}}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{border:"1px solid #ccc", padding:"10px", width:"300px", textDecoration:"none", color:"black"}}>
            <img src={product.image} alt={product.title} style={{width:"100%", height:"200px", objectFit:"cover"}} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}