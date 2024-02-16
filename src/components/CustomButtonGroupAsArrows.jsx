import PropTypes from 'prop-types';
import ButtonOne from './ButtonOne';
import ButtonTwo from './ButtonTwo';
import Box from "@mui/material/Box";
function CustomButtonGroupAsArrows({ next, previous,  ...rest }) {
  const { carouselState: { currentSlide } } = rest;
  return (
    <Box className="carousel-button-group" sx={{display:"flex"}}>
      
      <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
    </Box>
  );
}

CustomButtonGroupAsArrows.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
};

export default CustomButtonGroupAsArrows;
