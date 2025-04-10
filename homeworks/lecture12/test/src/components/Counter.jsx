// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = (amount) => {
//     setCount(prevCount => prevCount + amount);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>localhost:3000</h1>
//       <div style={styles.counterDisplay}>{count}</div>
//       <div style={styles.buttonGroup}>
//         <button style={styles.button} onClick={() => increment(1)}>+1</button>
//         <button style={styles.button} onClick={() => increment(10)}>+10</button>
//         <button style={styles.button} onClick={() => increment(100)}>+100</button>
//         <button style={styles.button} onClick={() => increment(1000)}>+1000</button>
//       </div>
//       <button style={styles.resetButton} onClick={reset}>Reset</button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f5f5f5',
//     padding: '20px',
//   },
//   title: {
//     marginBottom: '30px',
//     color: '#333',
//   },
//   counterDisplay: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//     margin: '20px 0',
//     padding: '20px 40px',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '10px',
//     marginBottom: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   resetButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#f44336',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
// };

// export default Counter;