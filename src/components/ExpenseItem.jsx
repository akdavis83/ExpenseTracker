import { Badge, Card } from "react-bootstrap"


const ExpenseItem = ({trans}) => {
  

  
  
  return (

    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex-col ">
              <h4>{trans.title}</h4>
              <p className="fst-italic">{trans.date.toLocaleDateString("en-US")}</p>
            </div>
            <div>
                <h4><Badge bg={trans.type=='income'? 'success': 'danger'}> {trans.type=='income'? '+': '-'} ${trans.amount}</Badge></h4>
            </div>
          </div>        

      </Card.Body>
    </Card>
  )
}

export default ExpenseItem