import Typography from "@mui/material/Typography";
import ProductPriceCard from "../components/ProductPriceCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function ProductPriceSection() {
  return (
    <>
      <Box component="section">
        <Box component="header">
          <Grid container sx={{ padding: "60px" }}>
            <Grid item sm={12} md={6} sx={{ height: "100%" }}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "700", textTransform: "capitalize" }}
                >
                  new products
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={12} md={6} sx={{ height: "100%" }}>
              <Stack
                alignItems="flex-start"
                justifyContent="center"
                sx={{ height: "100%" }}
              >
                <Typography
                  variant="p"
                  sx={{ width: "70%", color: "#a2a2a3", lineHeight: "25px" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  velit perspiciatis totam maxime optio suscipit, quos nobis sed
                  beatae aperiam iste commodi maiores voluptate illum culpa
                  ratione aut itaque sint.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box component="main" sx={{ height: "60rem" }}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
             
              md={6}
              sx={{ height: "50%", width: "50%" }}
              className="first"
            >
              <ProductPriceCard />
            </Grid>
            <Grid
              item
             
              md={6}
              sx={{ height: "50%", width: "50%" }}
              className="second"
            >
              <ProductPriceCard />
            </Grid>
            <Grid
              item
             
              md={6}
              sx={{ height: "50%", width: "50%" }}
              className="third"
            >
              <ProductPriceCard />
            </Grid>
            <Grid
              item
             
              md={6}
              sx={{ height: "50%", width: "50%" }}
              className="fourth"
            >
              <ProductPriceCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ProductPriceSection;
