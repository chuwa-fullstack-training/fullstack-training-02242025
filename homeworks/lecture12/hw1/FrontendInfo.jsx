import React from "react";
import ListItem from "./ListItem";

function FrontendInfo() {
  return (
    <div>
      <h2>What is Frontend?</h2>
      <ul>
        <ListItem>
          Frontend is the part of the website that users can see and interact
          with.
        </ListItem>
        <ListItem>Frontend is also called <strong>client-side</strong>.</ListItem>
        <ListItem>Frontend is built with HTML, CSS, and JavaScript.</ListItem>
      </ul>
    </div>
  );
}

export default FrontendInfo;
