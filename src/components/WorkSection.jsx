// src/components/WorkSection.jsx
import "./WorkSection.css";

// 이미지 import (파일 위치에 맞게 경로만 조정)
import oreoImg from "../assets/oreo.jpg";
import microsoftImg from "../assets/microsoft.jpg";
import geicoImg from "../assets/geico.jpg";

const PROJECTS = [
  {
    id: "oreo",
    brand: {
      en: "OREO | COLORFILLED",
      ko: "오레오 | 컬러필드",
    },
    title: {
      en: "Help holiday shoppers personalize their own OREO Cookies",
      ko: "연말 쇼핑객이 자신만의 오레오 쿠키를 만들도록 돕다",
    },
    subtitle: {
      en: "FWA Mobile Site of the Day",
      ko: "FWA 모바일 사이트 오브 더 데이 선정",
    },
    image: oreoImg,
    link: "#",
  },
  {
    id: "microsoft",
    brand: {
      en: "MICROSOFT",
      ko: "마이크로소프트",
    },
    title: {
      en: "Kick-start digital operations at a startup agency",
      ko: "스타트업 에이전시의 디지털 운영을 가속화하다",
    },
    subtitle: {
      en: "",
      ko: "",
    },
    image: microsoftImg,
    link: "#",
  },
  {
    id: "geico",
    brand: {
      en: "GEICO.COM",
      ko: "GEICO.COM",
    },
    title: {
      en: "Drive mobile sales through new UX models and micro-interactions",
      ko: "새로운 UX 모델과 마이크로 인터랙션으로 모바일 매출을 성장시키다",
    },
    subtitle: {
      en: "",
      ko: "",
    },
    image: geicoImg,
    link: "#",
  },
];

const WorkSection = ({ lang }) => {
  return (
    <section className="work-section">
      {PROJECTS.map((p, index) => (
        <article
          key={p.id}
          className={`work-row ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* 이미지 */}
          <div className="work-image-wrap">
            <img src={p.image} alt={p.title[lang]} className="work-image" />
          </div>

          {/* 텍스트 */}
          <div className="work-text-wrap">
            <p className="work-brand">{p.brand[lang]}</p>
            <h3 className="work-title">{p.title[lang]}</h3>
            {p.subtitle[lang] && (
              <p className="work-subtitle">{p.subtitle[lang]}</p>
            )}

            <button className="work-link">
              {lang === "ko" ? "자세히 보기  >" : "Learn more  >"}
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default WorkSection;
