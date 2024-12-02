import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import RenderImage from "../RenderImage/RenderImage";
import { useState, useEffect } from "react";
export default function CustomCard({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  cardWidth,
  cardHeight,
  background,
  position,
  border,
  shadow,
}) {
  const [cardPosition, setCardPosition] = useState({
    positionMode: "absolute",
    top: "0",
    left: "0",
    scale: "1",
  });
  const [visible, setVisible] = useState(false);
  const definePosition = (position) => {
    switch (position) {
      case null:
        setCardPosition({
          positionMode: "initial",
          top: "0%",
          left: "0%",
          scale: "1",
          transform: null,
        });
        break;
      case "midCenter":
        setCardPosition({
          positionMode: "absolute",
          top: "50%",
          left: "50%",
          scale: "1",
        });
        break;
      case "topCenter":
        setCardPosition({
          positionMode: "absolute",
          top: "20%",
          left: "50%",
          scale: "1",
        });
        break;
      case "bottomCenter":
        setCardPosition({
          positionMode: "absolute",
          top: "75%",
          left: "50%",
          scale: "1",
        });
        break;
      case "midLeft":
        setCardPosition({
          positionMode: "absolute",
          top: "50%",
          left: "20%",
          scale: "1",
        });
        break;
      case "midRight":
        setCardPosition({
          positionMode: "absolute",
          top: "50%",
          left: "80%",
          scale: "1",
        });
        break;
      case "topLeft":
        setCardPosition({
          positionMode: "absolute",
          top: "35%",
          left: "20%",
          scale: "1",
        });
        break;
      case "topRight":
        setCardPosition({
          positionMode: "absolute",
          top: "35%",
          left: "80%",
          scale: "1",
        });
        break;
      case "bottomLeft":
        setCardPosition({
          positionMode: "absolute",
          top: "75%",
          left: "20%",
          scale: "1",
        });
        break;
      case "bottomRight":
        setCardPosition({
          positionMode: "absolute",
          top: "75%",
          left: "80%",
          scale: "1",
        });
        break;
      default:
        console.error("Posição não reconhecida!");
    }
  };
  const style = {
    card: {
      backgroundColor: background,
      width: cardWidth,
      height: cardHeight,
      border: border ? "1px solid rgba(41, 38, 38, 0.3)" : "none",
      boxShadow: shadow ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      position: cardPosition.positionMode || "initial",
      left: cardPosition.left,
      top: cardPosition.top,
      transform: "translate(-50%, -50%)",
      scale: cardPosition.scale,
      opacity: visible ? 1 : 0,
      transition: "opacity 2s ease, transform 1ms ease, box-shadow 0.3s ease",
      overflow: "hidden",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    },
  };
  useEffect(() => {
    definePosition(position);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);
  return (
    <Box sx={style.card}>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#292626",
          textAlign: "center",
          marginBlock: "10px",
        }}
      >
        {title}
      </Typography>
      {image && (
        <RenderImage
          image={image}
          width={imageWidth}
          height={imageHeight}
          borderRadius="0"
        />
      )}
      <Typography
        sx={{
          fontSize: "14px",
          color: "#292629",
          textAlign: "justify",
          wordWrap: "break-word",
          maxWidth: "80%",
          maxHeight: "80%",
          overflow: "hidden",
          letterSpacing: "1px",
          whiteSpace: "pre-line",
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
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  position: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
};

CustomCard.defaultProps = {
  title: null,
  description: null,
  image: null,
  background: "white",
  imageWidth: "200px",
  imageHeight: "200px",
  cardWidth: "400px",
  cardHeight: "400px",
  position: null,
  border: false,
  shadow: true,
};
