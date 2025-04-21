import React from 'react';

const Hw2 = () => {
  const layoutStyle = {
    display: 'grid',
    gridTemplateAreas: `
      "header header header"
      "sidebar main right"
      "footer footer footer"
    `,
    gridTemplateRows: '60px 1fr 60px',
    gridTemplateColumns: '1fr 2fr 1fr',
    minHeight: '100vh',
    gap: '10px',
  };

  const boxStyle = {
    padding: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  };

  return (
    <div style={layoutStyle}>
      <div style={{ ...boxStyle, backgroundColor: '#333', gridArea: 'header' }}>Header</div>
      <div style={{ ...boxStyle, backgroundColor: '#555', gridArea: 'sidebar' }}>Sidebar</div>
      <div style={{ ...boxStyle, backgroundColor: '#777', gridArea: 'main' }}>Main Content</div>
      <div style={{ ...boxStyle, backgroundColor: '#555', gridArea: 'right' }}>Right Sidebar</div>
      <div style={{ ...boxStyle, backgroundColor: '#333', gridArea: 'footer' }}>Footer</div>
    </div>
  );
};

export default Hw2;
