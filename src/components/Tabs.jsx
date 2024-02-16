import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import TabItem from "./TabItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
function Tabs() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#161618", paddingY: "50px", color: "#f2efef" }}
    >
      <Container>
        <Stack direction="row">
          <Button
            sx={{
              padding: "10px",
              borderRadius: "30px",
              backgroundColor: "#f2efef",
              color: "#161618",
              fontWeight: "600",
              marginRight: "20px",
            }}
          >
            Popular
          </Button>

          <Button
            sx={{
              padding: "10px",
              borderRadius: "30px",
              border: "2px solid #737374",
              color: "#737374",
              fontWeight: "600",
              marginRight: "20px",
            }}
          >
            modern style
          </Button>
          <Button
            sx={{
              padding: "10px",
              borderRadius: "30px",
              border: "2px solid #737374",
              color: "#737374",
              fontWeight: "600",
              marginRight: "20px",
            }}
          >
            longe chairs
          </Button>
        </Stack>

        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          grabCursor={true}
          scrollbar={{
            hide: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/3.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/4.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/2.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/1.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TabItem imgPath={"/src/assets/images/1.jpg"} />
          </SwiperSlide>
        </Swiper>

        <Box sx={{ marginTop: "70px", textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: "700", marginY: "30px" }}>
            Accuracy and quality is our <br /> hallmark
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#9f9fa0", fontSize: "2rem", lineHeight: "3rem" }}
          >
            we have our own characteristics that are different from other chair
            seller websites,namely in terms of quality and quantity,we really
            prioritize these two things for our satisfaction and comfort in
            using the product we provide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Tabs;
