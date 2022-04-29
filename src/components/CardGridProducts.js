import { Grid } from "@mui/material";

import CardProducts from "./CardProducts";

export default function CardGridProducts({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <CardProducts
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            tags={product.tags}
          />
        </Grid>
      ))}
    </Grid>
  );
}
