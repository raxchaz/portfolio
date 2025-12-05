// src/components/Header.jsx
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../assets/headerLogo.png"; // 로고 이미지 추가

const HEADER_TEXT = {
  en: {
    work: "WORK",
    joy: "JOY",
    about: "ABOUT",
  },
  ko: {
    about: "소개",
    joy: "즐거움",
    work: "작업물",
  },
};

const Header = ({ lang, onChangeLang }) => {
  const t = HEADER_TEXT[lang] || HEADER_TEXT.en;
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      style={{
        width: "100%",
        padding: "2rem 5rem",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      {/* 로고 이미지 → 클릭하면 홈으로 이동 */}
      <Link
        to="/"
        onClick={goTop}
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={headerLogo}
          alt="Logo"
          style={{
            height: "32px", // 원하는 크기 조절
            width: "auto",
            display: "block",
            marginLeft: "1rem",
          }}
        />
      </Link>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          gap: "7rem",
          fontSize: "1.25rem",
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        <Link
          to="/about"
          className="nav-link"
          style={{
            textDecoration: "none",
            color: isActive("/about") ? "#E19A14" : "#000",
          }}
        >
          {t.about}
        </Link>

        <Link
          to="/joy"
          className="nav-link"
          style={{
            textDecoration: "none",
            color: isActive("/joy") ? "#E19A14" : "#000",
          }}
        >
          {t.joy}
        </Link>

        <Link
          to="/"
          onClick={goTop}
          className="nav-link"
          style={{
            textDecoration: "none",
            color: isActive("/") ? "#E19A14" : "#000",
          }}
        >
          {t.work}
        </Link>
      </nav>

      {/* LANGUAGE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        <span
          onClick={() => onChangeLang("en")}
          className="lang-link"
          style={{
            display: "inline-block",
            width: "1.5rem",
            textAlign: "center",
            cursor: "pointer",
            color: lang === "en" ? "#E19A14" : "#888",
            fontWeight: lang === "en" ? 800 : 600,
          }}
        >
          EN
        </span>
        <span style={{ opacity: 0.4, fontSize: "0.7rem" }}>|</span>
        <span
          onClick={() => onChangeLang("ko")}
          className="lang-link"
          style={{
            display: "inline-block",
            width: "1.5rem",
            textAlign: "center",
            cursor: "pointer",
            color: lang === "ko" ? "#E19A14" : "#888",
            fontWeight: lang === "ko" ? 800 : 600,
          }}
        >
          KO
        </span>
      </div>
    </header>
  );
};

export default Header;
