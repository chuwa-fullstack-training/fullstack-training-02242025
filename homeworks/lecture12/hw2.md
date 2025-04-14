![layout](https://tutorial.techaltum.com/images/css-layout.jpg)

Implement the layout shown above in React component.

import "./styles.css";
import React from "react";

const App = () => {
const container = {
display: "flex",
flexDirection: "column",
maxWidth: "800px",
margin: "0 auto",
minHeight: "100vh",
};

const same = {
background: "white",
border: "1px solid black",
padding: "20px",
fontWeight: "bold",
textAlign: "center",
};

const mainStyle = {
display: "flex",
flex: "1",
};

const asideStyle = {
...same,
flex: "1",
};

const sectionStyle = {
...same,
flex: "2",
};

return (

<div style={container}>
<header style={same}>Header</header>
<nav style={same}>Nav</nav>
<div style={mainStyle}>
<aside style={asideStyle}>Aside</aside>
<section style={sectionStyle}>Section</section>
</div>
<footer style={same}>Footer</footer>
</div>
);
};

export default App;

https://codesandbox.io/p/devbox/lec12-forked-vjl6cs?file=%2Fsrc%2FApp.js%3A25%2C1&workspaceId=ws_TXQDmuCpNhm2cB875VUy4E
