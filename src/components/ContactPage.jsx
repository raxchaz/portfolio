// src/components/ContactPage.jsx

const ContactPage = ({ lang }) => (
  <div style={{ padding: "0 5rem", minHeight: "80vh" }}>
    <h2
      style={{
        fontSize: "3rem",
        fontWeight: 800,
        color: "#000",
        marginBottom: "1rem",
      }}
    >
      {lang === "ko" ? "연락하기" : "Contact Me"}
    </h2>

    <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "3rem" }}>
      {lang === "ko"
        ? "저에게 연락하실 수 있는 방법을 정리한 페이지입니다."
        : "Ways to contact me."}
    </p>

    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "600px",
        padding: "2rem",
        border: "1px solid #E19A14",
        borderRadius: "8px",
      }}
    >
      <input
        type="text"
        placeholder={lang === "ko" ? "이름" : "Your Name"}
        style={inputStyle}
      />

      <input
        type="email"
        placeholder={lang === "ko" ? "이메일" : "Your Email"}
        style={inputStyle}
      />

      <textarea
        placeholder={lang === "ko" ? "메시지" : "Your Message"}
        rows="5"
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          padding: "0.75rem",
          backgroundColor: "#E19A14",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        {lang === "ko" ? "보내기" : "Send Message"}
      </button>
    </form>
  </div>
);

const inputStyle = {
  padding: "0.75rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "1rem",
};

export default ContactPage;
