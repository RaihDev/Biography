import myphoto from "../../assets/myphoto.jpg";
import PropTypes from "prop-types";
export default function RenderImage({
  image,
  width,
  height,
  borderRadius,
  border,
  bordColor,
  interact,
}) {
  const style = {
    img: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      border: border,
      borderColor: bordColor,
    },
  };
  return (
    <img
      src={image || myphoto}
      style={{ ...style.img, cursor: interact ? "pointer" : "default" }}
    />
  );
}

RenderImage.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  bordColor: PropTypes.string,
  border: PropTypes.string,
  interact: PropTypes.bool,
};

RenderImage.defaultProps = {
  image: null,
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  bordColor: "black",
  border: "none",
  interact: false,
};
