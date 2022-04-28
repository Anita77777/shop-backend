import Link from "next/link";
import { Container, Grid } from "@mui/material";

export default function Products() {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <Link href="/categories">Categories</Link>
        </Grid>
        <Grid item xs={12}></Grid>
      </Container>
    </div>
  );
}
