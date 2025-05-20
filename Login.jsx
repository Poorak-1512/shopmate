import React from "react";

export default function Login() {
  return (
    <div style={{padding:"20px"}}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" required />
        </div>
        <button type="submit" style={{marginTop:"10px"}}>Login</button>
      </form>
    </div>
  );
}