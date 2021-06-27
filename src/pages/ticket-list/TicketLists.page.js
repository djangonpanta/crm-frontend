import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-ticket.json";
import { Link } from "react-router-dom";
export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);
  useEffect(() => {}, [str, displayTicket]);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };
  const searchTicket = (str) => {
    //str is the string from searchTicket invoke above not from state
    const displayTickets = tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(str.toLowerCase())
    );
    console.log(displayTickets);
    setDisplayTicket(displayTickets);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};
