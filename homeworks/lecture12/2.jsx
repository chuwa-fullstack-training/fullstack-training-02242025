import React from "react";

function Layout() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateRows: "auto auto 1fr auto",
      gridTemplateColumns: "1fr",
      gap: "1rem",
      padding: "1rem",
      boxSizing: "border-box",
    },
    box: {
      border: "1px solid #000",
      padding: "1rem",
      backgroundColor: "#f7f7f7",
    },
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
      gap: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.box}>Header</header>
      <nav style={styles.box}>Nav</nav>
      <main style={styles.main}>
        <aside style={styles.box}>Aside</aside>
        <section style={styles.box}>Section</section>
      </main>
      <footer style={styles.box}>Footer</footer>
    </div>
  );
}

export default Layout;