import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
