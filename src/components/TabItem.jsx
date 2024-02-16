import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import NorthEastIcon from "@mui/icons-material/NorthEast";

function TabItem({imgPath="/src/assets/images/2.jpg"}) {
  return (
    <Box sx={{ marginTop: "70px" ,color:"#f2efef" ,width:"300px"}}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundColor: "red",
      }}
      className="tab-box"
    >
      <img
        src={imgPath}
        className="tabs-img"
        width="100%"
        height="100%"
        alt="ss"
      ></img>
      <Box
      className="img-layer"
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          Bottom: "0",
          right: "0",
          height: "100%",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: "1",
        }}
      >
           <Stack
    alignItems="center"
    justifyContent="center"
    sx={{
      backgroundColor: "#5d5b58",
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
      </Box>
    </Box>

    <Typography variant="h4"sx={{fontSize:"1.4rem",marginTop:"15px" , textTransform:"capitalize"}} >modern chair style</Typography>
    <Typography variant="h6" sx={{fontSize:"1rem" ,marginTop:"7px"}}>934 stock available</Typography>
    
  </Box>
  )
}

export default TabItem
