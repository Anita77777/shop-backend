import { Container, Grid } from "@mui/material";

import { getCardsCategories } from "../src/services/get-cards-categories";

import CardGridCategories from "../src/components/CardGridCategories";

export function getStaticProps() {
  const categories = getCardsCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function CardsCategories({ categories }) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <h1>Category</h1>
      </Grid>
      <CardGridCategories categories={categories} />
    </Container>
  );
}
