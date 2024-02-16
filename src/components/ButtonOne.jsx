import Icon from "./Icon";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';

function ButtonOne({ className, onClick}) {
  return (
    <Box className={className} onClick={onClick} sx={{margin:"10px"}}>
      <Icon width="50px" height="50px" borderColor="#848283" >
        <KeyboardBackspaceIcon  sx={{ color: "#848283" }} />
      </Icon>
    </Box>
  )
}

ButtonOne.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonOne
