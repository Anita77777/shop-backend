import { Container, Grid } from "@mui/material";

import { getCardsProducts } from "../src/services/get-cards-products";

import CardGridProducts from "../src/components/CardGridProducts";

export function getStaticProps() {
  const products = getCardsProducts();

  return {
    props: {
      products,
    },
  };
}

export default function CardProducts({ products }) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <h1>Products</h1>
      </Grid>
      <CardGridProducts products={products} />
    </Container>
  );
}
