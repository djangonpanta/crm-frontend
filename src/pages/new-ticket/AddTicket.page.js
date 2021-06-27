import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortTest } from "../../utils/validation";
const initialFrmDt = {
  subject: "",
  issueDate: null,
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFrmDataError(initialFrmError);
    const isSubjectValid = await shortTest(frmData.subject);

    setFrmDataError({
      ...frmDataError,
      subject: !isSubjectValid,
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formData={frmData}
            formDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
