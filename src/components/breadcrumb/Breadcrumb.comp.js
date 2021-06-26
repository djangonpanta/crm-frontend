import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb className="test">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
