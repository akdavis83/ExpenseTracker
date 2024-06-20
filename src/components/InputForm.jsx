import { Formik, Form, Field, ErrorMessage } from "formik";
import { Card, Col, Row, Button } from "react-bootstrap";
import BsForm from "react-bootstrap/Form";
import * as Yup from "yup";
import {v4} from 'uuid';

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  amount: Yup.string().required("Amount is required"),
  date: Yup.string().required("Please eneter a date"),
});

const InputForm = ({addTransaction}) => {
  const initalValue = {
    title: "",
    amount: "",
    type: "",
    date: "",
  };

  const submitHandler = (values, actions) => {
   values.id= v4();
   values.date= new Date(values.date)
   addTransaction(values)
   actions.resetForm()
  };

  return (
    <Row className="mb-5">
      <Col lg={8} md={12} className="mx-auto">
        <Card className="shadow-sm">
          <Card.Body>
            <h3 className="text-center mb-4"> Add an Expense or Income </h3>

            <Formik initialValues={initalValue} onSubmit={submitHandler} validationSchema={formSchema}>

              
              <Form>
                <Row>
                  <Col lg={6} sm={12} className="mb-2">
                    <Field
                      as={BsForm.Control}
                      type="text"
                      placeholder="Transaction Title"
                      name="title"
                    />
                    <small className="text-danger"><ErrorMessage name="title"/></small>
                  </Col>
                  <Col lg={6} sm={12} className="mb-2">
                    <Field
                      as={BsForm.Control}
                      type="number"
                      placeholder="Transaction Amount"
                      name="amount"
                    />
                     <small className="text-danger"><ErrorMessage name="amount"/></small>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} sm={12} className="mb-2">
                    <Field
                      as={BsForm.Control}
                      type="date"
                      placeholder="Transaction Date"
                      name="date"
                    />
                   <small className="text-danger"><ErrorMessage name="date"/></small>
                  </Col>
                  <Col lg={6} sm={12} className="mb-2">
                    <Field
                      as={BsForm.Select}
                      placeholder="Transaction Amount"
                      name="type"
                    >
                      <option value="Expense">Expense</option>
                      <option value="income">Income</option>
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center mt-4">
                    <Button variant="primary" type="submit">
                      {" "}
                      ADD
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InputForm;
