// src/App.jsx
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // useLocation 추가
import Header from "./components/Header";
import WorkSection from "./components/WorkSection";
import JoySection from "./components/JoySection";
import AboutSection from "./components/AboutSection";
import ContactPage from "./components/ContactPage";
import ContactButton from "./components/ContactButton";

// ----- 홈 히어로 + 자기소개 -----
const HomeHero = ({ lang }) => (
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <h1
      style={{
        margin: 0,
        fontSize: "4.8rem",
        fontWeight: 800,
        lineHeight: 1.1,
        color: "#E19A14",
        marginTop: "1rem",
        marginBottom: "3rem",
        letterSpacing: "-0.05em",
        textAlign: "left",
        marginLeft: "-13.5rem",
      }}
    >
      {lang === "en" ? (
        <>
          I build what becomes
          <br />
          NECESSARY the moment it
          <br />
          EXISTS.
        </>
      ) : (
        <>
          존재하는 순간부터
          <br />
          필요해지는 것을 만듭니다.
        </>
      )}
    </h1>

    <p
      style={{
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "-0.05em",
        color: "#545454",
        marginTop: "3rem",
        marginLeft: "-13.5rem",
        whiteSpace: "normal" /* FIX */,
        // maxWidth: "1200px",
      }}
    >
      {lang === "en" ? (
        <>
          👋 Hi, I'm Jesse. I have 15 years of experience leading diverse,
          cross-functional teams to build digital products that people love and
          drive business results. <br />
          This includes as a Product Manager and as an operations strategy
          partner for Fortune 100 product + design leaders . <br />
          Let's build something great together.
        </>
      ) : (
        <>
          👋 안녕하세요. 다양한 팀과 함께 디지털 제품을 만들어 온 프로덕트
          매니저 라현지입니다.
          <br />
          사람들에게 꼭 필요해지는 경험을 설계하고, 실제 화면과 기능으로
          구현하는 일을 좋아합니다.
          <br /> 함께 재미있는 경험을 만들어가면 좋겠습니다.
        </>
      )}
    </p>
  </div>
);

// ----- 홈 페이지: Hero + Work만 포함 -----
const HomePage = ({ lang }) => (
  <>
    <section id="top">
      <HomeHero lang={lang} />
    </section>

    <section id="work" style={{ marginTop: "8rem" }}>
      <WorkSection lang={lang} />
    </section>
  </>
);

// ----- JOY / ABOUT / CONTACT 개별 페이지 -----
const JoyPage = ({ lang }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <JoySection lang={lang} />
  </div>
);

const AboutPage = ({ lang }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <AboutSection lang={lang} />
  </div>
);

const ContactPageWrapper = ({ lang }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <ContactPage lang={lang} />
  </div>
);

// ----- 메인 App -----
function App() {
  const [lang, setLang] = useState("en");
  const location = useLocation(); // 현재 경로 정보
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <Header lang={lang} onChangeLang={setLang} />
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "8rem 5rem 4rem", // 고정 헤더 피해서 시작
          background: "#fff",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          {/* 메인: Hero + Work만 스크롤 */}
          <Route path="/" element={<HomePage lang={lang} />} />

          {/* JOY / ABOUT / CONTACT는 별도 페이지 */}
          <Route path="/joy" element={<JoyPage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/contact" element={<ContactPageWrapper lang={lang} />} />
        </Routes>
      </main>
      {/* 우측 하단 Contact 버튼 → /contact로 이동 */}
      {!isContactPage && <ContactButton />}
    </>
  );
}

export default App;
