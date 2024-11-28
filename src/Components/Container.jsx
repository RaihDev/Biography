import * as React from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";

export default function Container_Geral({
  color,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  children,
}) {
  const stylesheet = {
    bgcolor: color,
    height: "100vh",
    width: "100vw",
    padding: "0",
    position: "absolute",
    margin: "0",
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    gap: "2rem",
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="false"
        maxHeight="false"
        disableGutters
        sx={stylesheet}
      >
        <>{children}</>
      </Container>
    </React.Fragment>
  );
}

Container_Geral.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};

Container_Geral.defaultProps = {
  color: "#c0e8fc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
