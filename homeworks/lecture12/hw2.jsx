import React from 'react';
import './hw2.css';

const Layout = () => {
    return (
        <div className="container">
        <header className="header">Header</header>
        <nav className="nav">Nav</nav>
        <div className="main">
            <aside className="aside">Aside</aside>
            <section className="section">Section</section>
        </div>
        <footer className="footer">Footer</footer>
        </div>
    );
};

export default Layout;