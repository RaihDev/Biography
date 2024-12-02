import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function List({ items, top, left }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleItemClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank");
    } else {
      navigator.clipboard.writeText(item.descricao).then(() => {
        setAlertMessage("copiado para a área de transferência!");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      });
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: top,
        left: left,
        transform: "translate(-50%, -50%)",
      }}
    >
      {showAlert && (
        <Alert
          severity="success"
          variant="filled"
          sx={{
            position: "absolute",
            left: "-320%",
            zIndex: 10,
            transition: "1s all ease",
          }}
        >
          {alertMessage}
        </Alert>
      )}

      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            width: "300px",
            height: "30px",
            marginBlock: "15px",
            overflow: "hidden",
            backgroundColor: "transparent",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              cursor: item.link ? "pointer" : "default",
            },
          }}
          onClick={() => handleItemClick(item)}
        >
          {item.icon && (
            <img
              src={item.icon}
              alt={`${item.nome}-icon`}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              {item.nome}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {item.descricao}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      link: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  top: PropTypes.string,
  left: PropTypes.string,
};

List.defaultProps = {
  items: [],
  top: "50%",
  left: "50%",
};
