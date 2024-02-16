
import PropTypes from 'prop-types';
import Stack from "@mui/material/Stack";

function Icon({ width="35px", height="35px", borderColor="white",backGround="transparent" ,children  }) {
  return (
    <Stack justifyContent='center' alignItems='center' width={width} height={height} sx={{ border:`2px solid ${borderColor}` , borderRadius:"50%",backgroundColor:`${backGround}`}}>
      {children}
    </Stack>
  )
}

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backGround: PropTypes.string, // Added 'backGround' prop validation
  borderColor: PropTypes.string, // Added 'borderColor' prop validation
  children: PropTypes.node.isRequired,
};

export default Icon
