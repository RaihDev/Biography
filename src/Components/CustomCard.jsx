import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import RenderImage from "./RenderImage";

export default function CustomCard({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  background,
}) {
  const img =
    "https://www.gameshub.com/wp-content/uploads/sites/5/2024/02/elden-ring-shadow-of-the-erdtree.jpeg";
  return (
    <Box
      sx={{
        backgroundColor: background,
        width: "300px",
        height: "300px",
        border: "3px ridge",
        borderColor: "black",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RenderImage
        image={img}
        width={imageWidth}
        height={imageHeight}
        borderRadius="0"
      />
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "light",
          color: "black",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "black",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

CustomCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  background: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
};

CustomCard.defaultProps = {
  title: null,
  description: null,
  image: null,
  background: "white",
  imageWidth: "200px",
  imageHeight: "200px",
};
