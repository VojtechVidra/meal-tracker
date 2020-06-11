import React from "react";
import { IngredientsTable } from "../../components/Ingredients/IngredientsTable/IngredientsTable";
import { Container } from "@material-ui/core";

export const IngredientsPage = () => {
  return (
    <Container maxWidth="xl">
      <IngredientsTable />
    </Container>
  );
};
