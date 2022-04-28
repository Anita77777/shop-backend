import { Grid } from "@mui/material";

import CardCategories from "./CardCategories";

export default function CardGridCategories({ categories }) {
  return (
    <Grid container spacing={4}>
      {categories.map((categorie) => (
        <Grid item xs={4} key={categorie.id}>
          <CardCategories
            id={categorie.id}
            name={categorie.name}
            description={categorie.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
