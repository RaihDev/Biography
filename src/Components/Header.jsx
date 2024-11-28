import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Header({
  headerTextColor,
  hoverTextColor,
  headerColor,
}) {
  const [Hover, setHover] = useState(null);
  const style = {
    header: {
      width: "100%",
      height: "8%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: headerColor,
      gap: "2rem",
    },
    button: {
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
  };

  const render_button = (text, color, id) => {
    const isHovered = Hover === id;
    return (
      <Button
        disableFocusRipple
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        key={id}
        sx={{
          ...style.button,
          color: isHovered ? hoverTextColor : color,
        }}
      >
        {text}
      </Button>
    );
  };

  const button_list = [
    {
      id: 1,
      text: "Apresentação",
      color: headerTextColor,
    },
    {
      id: 2,
      text: "Habilidades",
      color: headerTextColor,
    },
    {
      id: 3,
      text: "Contato",
      color: headerTextColor,
    },
    {
      id: 4,
      text: "Formação",
      color: headerTextColor,
    },
    {
      id: 5,
      text: "Experiência",
      color: headerTextColor,
    },
    {
      id: 6,
      text: "Projetos",
      color: headerTextColor,
    },
    {
      id: 7,
      text: "Idiomas",
      color: headerTextColor,
    },
    {
      id: 8,
      text: "Currículo",
      color: headerTextColor,
    },
  ];

  return (
    <Box sx={style.header}>
      {button_list.map((button) =>
        render_button(button.text, button.color, button.id)
      )}
    </Box>
  );
}
Header.prototypes = {
  headerTextColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  headerColor: PropTypes.string,
};
Header.defaultProps = {
  headerTextColor: "black",
  hoverTextColor: "#DEB887",
  headerColor: "transparent",
};
