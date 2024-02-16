import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Icon from "./Icon";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SouthIcon from "@mui/icons-material/South";
import Typography from "@mui/material/Typography";

function Hero() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      component="header"
      className="heroBg"
      sx={{ height: "100vh" }}
    >
      <Box sx={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <Container sx={{ height: "100%" }}>
          <Stack
            alignItems="center"
            justifyContent="end"
            sx={{ height: "100%" }}
          >
            <motion.div variants={fadeInUpVariants}>
              <Typography
                variant="h1"
                sx={{ fontWeight: "700", color: "#ffffff" }}
              >
                The best collection of chairs is here
              </Typography>
            </motion.div>
            <Box
              sx={{ height: "2px", width: "100%", backgroundColor: "white" }}
            ></Box>
            <Stack direction="row" spacing="10px"></Stack>
            <Grid container sx={{ height: "150px" }}>
              <Grid item md={9} sx={{ height: "100%" }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{ height: "100%" }}
                >
                  <motion.div variants={fadeInUpVariants}>
                    <Box>
                      <Typography variant="p" sx={{ color: "#ffffff" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis cupiditate quam ut officiis maiores magnam,
                        voluptatibus doloremque omnis officia labore tempore?
                        Autem fugit, blanditiis unde nobis dolorem illum commodi
                        laudantium minima eos ea ab, veniam eveniet quo? Enim,
                        corporis aut.
                      </Typography>
                    </Box>
                  </motion.div>
                </Stack>
              </Grid>
              <Grid item md={3} sx={{ height: "100%" }}>
                <Stack
                  alignItems="flex-end"
                  justifyContent="center"
                  sx={{ height: "100%" }}
                >
                  <motion.div variants={fadeInUpVariants}>
                    <Box>
                      <Icon width="55px" height="55px">
                        <SouthIcon sx={{ color: "white" }} />
                      </Icon>
                    </Box>
                  </motion.div>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Hero;
