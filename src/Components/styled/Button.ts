import { styled } from "../../Global/stitches";

const Button = styled("button", {
  width: "max-content",
  display: "inline-block",
  color: "$primary",
  padding: "0.75rem 1.2rem",
  borderRadius: "0.4rem",
  cursor: "pointer",
  border: "1px solid $primary",
  transition: "$transition",
  "&:hover": {
    background: "$white",
    color: "$bg",
    borderColor: "transparent",
  },
  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$bg",
      },
    },
  },
});

const Link = styled("a", {
  width: "max-content",
  display: "inline-block",
  color: "$primary",
  padding: "0.75rem 1.2rem",
  borderRadius: "0.4rem",
  cursor: "pointer",
  border: "1px solid $primary",
  transition: "$transition",
  "&:hover": {
    background: "$white",
    color: "$bg",
    borderColor: "transparent",
  },
  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$bg",
      },
    },
  },
});

export { Button, Link };
