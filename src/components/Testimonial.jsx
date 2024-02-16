import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Icon from "./Icon";
import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
function Testimonial() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      component="section"
      sx={{
        color: "#8a8889",
        paddingY: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box component="header" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "5.5rem",
              width: "75%",
              fontWeight: "600",
              marginX: "auto",
              marginBottom:"20px",
              color: "#161618",
            }}
          >
            What our happy customer say
          </Typography>
          <Typography variant="p">
            prove yourself that our product are really good and have
            international standards by looking at the review from our customers
            who are really satisfied and enthetic about using our product for
            years
          </Typography>
        </Box>

        <Box component="main" sx={{ position: "relative", marginTop: "80px" }}>
          <Carousel
            responsive={responsive}
            arrows={false}
            customButtonGroup={<CustomButtonGroupAsArrows />}
            renderButtonGroupOutside={true}
          >
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Icon width="40px" height="40px" backGround="#161618">
                  <FormatQuoteIcon fontSize="large" sx={{ color: "white" }} />
                </Icon>
              </Box>

              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                consequuntur magni ab ex enim ducimus magnam delectus atque vero
                quasi dicta, asperiores quia nostrum fugit fugiat sit sunt
                temporibus molestias?
              </Typography>
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#8a8889",
                  marginTop: "20px",
                }}
              ></Box>
              <Typography
                variant="p"
                component="h3"
                sx={{
                  marginTop: "20px",
                  color: "#161618",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textTransform: "capitalize",
                }}
              >
                william jonathan
              </Typography>
              <Box variant="span">ceo</Box>
            </Box>
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonial;
