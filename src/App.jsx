import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";


import "./App.css";

import Navbar from "./component/Navbar/Navbar";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <div className="container">
          <Navbar />
        </div>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
