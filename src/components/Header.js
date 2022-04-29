import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/products" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Products
            </Button>
          </Link>
          <Link href="/categories" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Categories
            </Button>
          </Link>
          <Link href="/create-products" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Create Product
            </Button>
          </Link>
          <Link href="/create-category" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Create Category
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
