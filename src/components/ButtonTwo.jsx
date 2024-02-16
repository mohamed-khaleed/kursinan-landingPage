import Icon from "./Icon";
import Box from "@mui/material/Box";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types'; // Add this import

function ButtonTwo({ onClick, className }) {
  return (
    <Box className={className} onClick={onClick} sx={{margin:"10px"}}>
      <Icon width="50px" height="50px" backGround="#161618" borderColor="#161618">
        <ArrowForwardIcon  sx={{ color: "#d9d9d9" }} />
      </Icon>
    </Box>
  );
}

ButtonTwo.propTypes = {
  onClick: PropTypes.func.isRequired, // Add this prop validation
  className: PropTypes.string // Add any other prop validations if needed
};

export default ButtonTwo;
