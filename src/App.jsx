import { Container } from "react-bootstrap";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import { useState } from "react";

const App = () => {

  const [transactions, setTransactions] = useState([]);


  const addTransaction = (transaction)=>{
    const updatedTransactions = [...transactions]
    updatedTransactions.push(transaction)
    setTransactions(updatedTransactions)
  }
  return (
    <div className="d-flex flex-column" style={{minHeight:'100vh'}}>
      <Header />
      <Container className="flex-grow-1">
        <InputForm addTransaction={addTransaction}/>
        <ExpenseList transactions={transactions}/>
      </Container>
        <Footer />
    </div>
  );
};

export default App;
