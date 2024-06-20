import { Card } from "react-bootstrap"
import ExpenseItem from "./ExpenseItem"


const ExpenseList = ({transactions}) => {
  console.log(!transactions.length>1)
  return (
    <>
    {transactions.length>0&&(
    <Card className="shadow">
    <Card.Body>
      <h3 className="text-center">Transactions</h3>
      {transactions.map(trans=> <ExpenseItem key={trans.id} trans={trans}/>)}
    </Card.Body>
  </Card>   
    )}

    {transactions.length==0&&(
      <h3 className="text-center"> No Transactions, Add one ! </h3>
    )}
    </>
   

  )
}

export default ExpenseList