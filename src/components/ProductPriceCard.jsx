import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Typography from "@mui/material/Typography";
function ProductPriceCard() {
  return (
    <Box className="dd" sx={{ height: "100%", position: "relative" }}>
      <Stack
        className="ff"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          display: "none",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#585859",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        >
          <NorthEastIcon
            fontSize="small"
            sx={{ color: "#f2efef", borderBottom: "2px solid #f2efef" }}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="end"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: "100%" }}
      >
        <Box
          sx={{ width: "50%", padding: "10px", borderTop: "2px solid #f2efef",marginLeft: "35px", }}
        >
          <Typography variant="p" sx={{ color: "#f2efef" }}>
            type
          </Typography>
          <Typography variant="h6" sx={{ color: "#f2efef" }}>
            modern chair
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            padding: "10px",
            textAlign: "end",
            borderTop: "2px solid #f2efef",
            marginRight: "35px",
          }}
        >
          <Typography variant="p" sx={{ color: "#f2efef" }}>
            price
          </Typography>
          <Typography variant="h6" sx={{ color: "#f2efef" }}>
            45 EG Pounds
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ProductPriceCard;
