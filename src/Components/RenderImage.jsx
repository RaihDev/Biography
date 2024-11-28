import { Box } from "@mui/material";
import myphoto from "../assets/myphoto.jpg";
import PropTypes from "prop-types";
export default function RenderImage({
  image,
  width,
  height,
  borderRadius,
  border,
  bordColor,
}) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        border: border,
        borderColor: bordColor,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        borderRadius: borderRadius,
        backgroundImage: `url(${image || myphoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
      onMouseEnter={(e) =>
        (e.target.style = "transform: scale(1.1); transition: all 0.5s ease;")
      }
      onMouseLeave={(e) =>
        (e.target.style = "transform: scale(1); transition: all 0.5s ease;")
      }
    ></Box>
  );
}

RenderImage.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  bordColor: PropTypes.string,
  border: PropTypes.string,
};

RenderImage.defaultProps = {
  image: null,
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  bordColor: "black",
  border: "none",
};
