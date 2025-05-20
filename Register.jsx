import React from "react";

export default function Register() {
  return (
    <div style={{padding:"20px"}}>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" required />
        </div>
        <button type="submit" style={{marginTop:"10px"}}>Register</button>
      </form>
    </div>
  );
}