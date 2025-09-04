// import './App.css'

// import { useState } from "react";

// function App() {

//  let [amount, setAmount] = useState(0);

//   let [type, setType] = useState("income");

//   function handleInput(e) {
//     setAmount(e.target.value);
//   }

//   function handleType(e) {
//     setType(e.target.value);
//   }

//   return (
//     <>
      
//  <h1>Expense Management System</h1>

//       <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
//         <input
//           onChange={handleInput}
//           value={amount}
//           type="number"
//           name=""
//           id=""
//         />

//         <select onChange={handleType} value={type} name="" id="">
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>

//         <button>Submit</button>
//       </div>

//     </>
//   )
// }

// export default App





// import './App.css'
// import { useState } from "react";

// function App() {

//   const [amount, setAmount] = useState("0");
  
//   const [type, setType] = useState("income");

//   function handleInput(e) {
//     setAmount(e.target.value);
//   }

//   function handleType(e) {
//     setType(e.target.value);
//   }

//   function handleFocus() {
//     if (amount === "0") {
//       setAmount("");
//     }
//   }

//   function handleBlur() {
//     if (amount === "") {
//       setAmount("0");
//     }
//   }

//   return (
//     <>
//       <h1>Expense Management System</h1>

//       <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
//         <input
//           onChange={handleInput}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           value={amount}
//           type="number"
//         />

//         <select onChange={handleType} value={type}>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>

//         <button>Submit</button>
//       </div>

//       <h1>{/* count */}</h1>
//       <div style={{ display: 'flex', gap: '20px' }}></div>
//     </>
//   );
// }

// export default App;







import './App.css';
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("0");
  const [type, setType] = useState("income");
  const [transactions, setTransactions] = useState([]);

  // Handlers
  function handleInput(e) {
    setAmount(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }

  function handleFocus() {
    if (amount === "0") {
      setAmount("");
    }
  }

  function handleBlur() {
    if (amount === "") {
      setAmount("0");
    }
  }

  function handleSubmit() {
    const num = parseFloat(amount);
    if (!isNaN(num) && num > 0) {
      setTransactions([...transactions, { type, amount: num }]);
      setAmount("0");
    }
  }

  // Use reduce to calculate balance (like Java reduce)
  const total = transactions.reduce((acc, curr) => {
    return curr.type === "income"
      ? acc + curr.amount
      : acc - curr.amount;
  }, 0);

  return (
    <>
      <h1>Expense Management System</h1>

      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
        <input
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={amount}
          type="number"
        />

        <select onChange={handleType} value={type}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <h1>Total Balance: ${total}</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <h2>Transactions:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transactions.map((item, index) => (
            <li key={index} style={{
              backgroundColor: item.type === 'income' ? '#504e4eff' : '#8095f1ff',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '8px',
              width: '300px',
              textAlign: 'center'
            }}>
              {item.type.toUpperCase()}: ${item.amount}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
