import PropTypes from "prop-types";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Swiper = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        top: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible", // Permite que os botões fiquem visíveis fora do contêiner
        height: "400px",
        width: "400px",
        border: "3px ridge #000",
        bgcolor: "background.default",
        margin: "0 auto",
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: "-130%", // Reduzido para garantir visibilidade
          zIndex: 10,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {children[currentIndex]}
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "-130%", // Reduzido para garantir visibilidade
          zIndex: 10,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

Swiper.propTypes = {
  children: PropTypes.node,
};

Swiper.defaultProps = {
  children: null,
};

export default Swiper;
