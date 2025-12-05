// src/components/JoySection.jsx

import geicoImg from "../assets/geico.jpg";

const JOY_TEXT = {
  en: {
    title: "Joy",
    intro1: "I love side projects.",
    intro2:
      "They help me experiment, stay curious, and bring fresh energy back into my product work.",
    image: geicoImg,
    projectTag: "SIDE PROJECT",
    projectTitle: "Creative Playground",
    projectBody:
      "A series of visual experiments, tools, and small apps I build to explore ideas quickly. Most of them start as sketches and turn into prototypes over a weekend.",
    projectCta: "See more experiments >",
  },
  ko: {
    title: "Joy",
    intro1: "사이드 프로젝트를 좋아합니다.",
    intro2:
      "호기심을 실험해 보고, 일에 새로운 에너지를 가져오는 장난감 같은 작업들입니다.",
    image: geicoImg,
    projectTag: "사이드 프로젝트",
    projectTitle: "Creative Playground",
    projectBody:
      "주말 동안 스케치에서 프로토타입으로 빠르게 옮겨 보는 작은 실험들입니다. 완벽함보다는 ‘일단 만들어 보는 것’에 집중합니다.",
    projectCta: "작업 더 보러가기 >",
  },
};

const JoySection = ({ lang }) => {
  const t = JOY_TEXT[lang] || JOY_TEXT.en;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* 섹션 타이틀 */}
      <h2
        style={{
          fontSize: "4.5rem",
          fontWeight: 800,
          color: "#E19A14",
          margin: "0 0 4rem 0",
          letterSpacing: "-0.05em",
        }}
      >
        {t.title}
      </h2>

      {/* 인트로 2줄 */}
      <div
        style={{
          fontSize: "1.25rem",
          lineHeight: 1.7,
          color: "#7a7a7a",
          marginBottom: "5rem",
        }}
      >
        <p style={{ margin: 0 }}>{t.intro1}</p>
        <p style={{ margin: "0.75rem 0 0" }}>{t.intro2}</p>
      </div>

      {/* 메인 프로젝트 카드 (이미지 + 텍스트) */}
      <div
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          marginBottom: "6rem",
        }}
      >
        {/* 이미지 영역 */}
        <div
          style={{
            flex: "0 0 55%",
            borderRadius: "8px",
            overflow: "hidden",
            height: "320px",
          }}
        >
          <img
            src={t.image} // 여기!
            alt="Creative Playground"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* 텍스트 영역 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#E19A14",
              margin: 0,
            }}
          >
            {t.projectTag}
          </p>

          <h3
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              margin: "0.8rem 0 1.2rem",
              letterSpacing: "-0.04em",
              color: "#333",
            }}
          >
            {t.projectTitle}
          </h3>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#555",
              margin: 0,
            }}
          >
            {t.projectBody}
          </p>

          <button
            style={{
              marginTop: "2rem",
              padding: "0.7rem 1.4rem",
              alignSelf: "flex-start",
              borderRadius: "999px",
              border: "none",
              background: "none",
              color: "#E19A14",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            {t.projectCta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoySection;
