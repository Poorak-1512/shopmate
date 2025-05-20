import React from "react";

export default function Checkout() {
  return (
    <div style={{padding:"20px"}}>
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Address:</label><br />
          <textarea name="address" required></textarea>
        </div>
        <div>
          <label>Payment Method:</label><br />
          <select name="payment" required>
            <option value="">Select</option>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" style={{marginTop:"10px"}}>Place Order</button>
      </form>
    </div>
  );
}