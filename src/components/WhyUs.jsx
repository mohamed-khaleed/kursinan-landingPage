import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Icon from "./Icon";
function WhyUs() {
  return (
    <Box
      component="section"
      sx={{ paddingY: "50px", borderBottom: "1px solid #bdbbbb" }}
    >
      <Container sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item sm={12} md={6}>
            <Stack
              alignItems="center"
              sx={{ height: "100%" }}
              justifyContent="center"
            >
              <Typography variant="h2" sx={{ fontWeight: "700" }}>
                Why
                <br /> should
                <br /> choose our
                <br /> product?
              </Typography>
            </Stack>
          </Grid>
          <Grid item sm={12} md={6}>
            <Stack
              direction="column"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <Stack
                direction="row"
                sx={{ borderBottom: "2px solid #bdbbbb", marginBottom: "10px" }}
              >
                <Grid
                  alignItems="center"
                  justifyContent="center"
                  item
                  sm={2}
                  sx={{ display: "flex" }}
                >
                  <Icon width="60px" height="60px" borderColor="black">
                    <StarIcon fontSize="large" />
                  </Icon>
                </Grid>
                <Grid item sm={10} sx={{ padding: "20px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      width: "100",
                      marginBottom: "10px",
                    }}
                  >
                    Quality is unquestionable
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "400", color: "#a09f9e" }}
                  >
                    we always prioritize customer satisfaction over <br />{" "}
                    everything{" "}
                  </Typography>
                </Grid>
              </Stack>

              <Stack
                direction="row"
                sx={{ borderBottom: "2px solid #bdbbbb", marginBottom: "10px" }}
              >
                <Grid
                  alignItems="center"
                  justifyContent="center"
                  item
                  sm={2}
                  sx={{ display: "flex" }}
                >
                  <Icon width="60px" height="60px" borderColor="black">
                    <VerifiedIcon fontSize="large" />
                  </Icon>
                </Grid>
                <Grid item sm={10} sx={{ padding: "20px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      width: "100",
                      marginBottom: "10px",
                    }}
                  >
                    International standard
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "400", color: "#a09f9e" }}
                  >
                    we always prioritize customer satisfaction over <br />{" "}
                    everything{" "}
                  </Typography>
                </Grid>
              </Stack>

              <Stack
                direction="row"
                sx={{ borderBottom: "2px solid #bdbbbb", marginBottom: "10px" }}
              >
                <Grid
                  alignItems="center"
                  justifyContent="center"
                  item
                  sm={2}
                  sx={{ display: "flex" }}
                >
                  <Icon width="60px" height="60px" borderColor="black">
                    <DehazeIcon fontSize="large" />
                  </Icon>
                </Grid>
                <Grid item sm={10} sx={{ padding: "20px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      width: "100",
                      marginBottom: "10px",
                    }}
                  >
                    Long warranty
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "400", color: "#a09f9e" }}
                  >
                    we always prioritize customer satisfaction over <br />{" "}
                    everything{" "}
                  </Typography>
                </Grid>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyUs;
