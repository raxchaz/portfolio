// src/pages/ContactPage.jsx
import "./ContactPage.css";

const CONTACT_TEXT = {
  en: {
    title: "Get In Touch",
    body1:
      "Are you looking for a Product Manager who can help guide your team toward meaningful, user-centered products?",
    body2:
      "Use this form to reach out about job opportunities, collaboration, consultation requests, or just to say hello.",
    name: "Name",
    email: "Your Email *",
    message: "Message *",
    send: "Send",
  },
  ko: {
    title: "연락하기",
    body1:
      "사용자에게 꼭 필요해지는 제품을 함께 만들 프로덕트 매니저가 필요하신가요?",
    body2:
      "어떤 이야기든 편하게 남겨 주세요. 가능한 한 빠르게 답장드리겠습니다.",
    name: "이름",
    email: "당신의 이메일 *",
    message: "메시지 *",
    send: "보내기",
  },
};

const ContactPage = ({ lang }) => {
  const t = CONTACT_TEXT[lang] || CONTACT_TEXT.en;

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        {/* 왼쪽 텍스트 */}
        <div className="contact-text">
          <h2 className="contact-title">{t.title}</h2>
          <p className="contact-body">{t.body1}</p>
          <p className="contact-body">{t.body2}</p>
        </div>

        {/* 오른쪽 폼 - Web3Forms 연동 */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          {/* Web3Forms 필수 키 */}
          <input
            type="hidden"
            name="access_key"
            value="c291cfc2-40c6-4b35-a850-7ae5c783634c"
          />

          {/* 메일 제목 / 발신자 이름 */}
          <input
            type="hidden"
            name="subject"
            value="New message from portfolio"
          />
          <input
            type="hidden"
            name="from_name"
            value="Portfolio Contact Form"
          />

          {/* 스팸 방지용 허니팟 */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          {/* Name */}
          <div className="form-group">
            <label className="contact-label">{t.name}</label>
            <input
              type="text"
              name="name"
              placeholder={t.name}
              className="contact-input"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="contact-label">{t.email}</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              className="contact-input"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="contact-label">{t.message}</label>
            <textarea
              name="message"
              required
              className="contact-textarea"
              placeholder={t.message}
            />
          </div>

          <button type="submit" className="contact-submit">
            {t.send}
          </button>
        </form>
      </div>

      {/* 하단 효과 라인 */}
      <div className="contact-wave" />
    </section>
  );
};

export default ContactPage;
