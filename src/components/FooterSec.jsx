import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";


function FooterSec() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#161618", paddingY: "40px", color: "white" }}
    >
      <Container>
        <Stack direction="column">
          <Stack direction="row" justifyContent="space-between" className="footerInfoContainer">
            
              <Box >
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", marginBottom: "10px" }}
                >
                  general
                </Typography>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", color: "#747475" }}
                >
                  <Box component="li">contact</Box>
                  <Box component="li">showroom</Box>
                </Box>
              </Box>
              <Box >
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", marginBottom: "10px" }}
                >
                  services
                </Typography>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", color: "#747475" }}
                >
                  <Box component="li">download</Box>
                  <Box component="li">agents</Box>
                  <Box component="li">certificates</Box>
                </Box>
              </Box>
              <Box >
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", marginBottom: "10px" }}
                >
                  social media
                </Typography>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", color: "#747475" }}
                >
                  <Box component="li">facebook</Box>
                  <Box component="li">instagram</Box>
                  <Box component="li">tiktok</Box>
                  <Box component="li">youtube</Box>
                </Box>
              </Box>
              <Box >
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", marginBottom: "10px" }}
                >
                  about
                </Typography>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", color: "#747475" }}
                >
                  <Box component="li">company</Box>
                  <Box component="li">careers</Box>
                  <Box component="li">legal</Box>
                  <Box component="li">help</Box>
                </Box>
              </Box>
           
          </Stack>
          <Box sx={{ marginY: "40px" }}>
            <Box
              sx={{ height: "2px", width: "100%", backgroundColor: "#747475" }}
            ></Box>
          </Box>
          <Box>
            <Grid container>
              <Grid item md={6}>
                <Typography component="h2" variant="p">Kursinan</Typography>
              </Grid>
              <Grid item md={6} sx={{ textAlign:"end" }}>
                
                  <Typography
                    variant="p"
                    sx={{ color: "#747475" }}
                    
                  >
                    copyright 2022-kursinan
                  </Typography>
                
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default FooterSec;
