// src/components/ContactButton.jsx
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link
      to="/contact"
      style={{
        position: "fixed",
        right: "2rem",
        bottom: "2rem",
        backgroundColor: "#E19A14",
        color: "#fff",
        padding: "1rem 2.2rem",
        borderRadius: "999px",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 6px 18px rgba(225,154,20,0.45)",
        fontSize: "1rem",
        zIndex: 20,
        transition: "transform 0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Contact
    </Link>
  );
};

export default ContactButton;
