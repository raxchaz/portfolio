// src/components/AboutSection.jsx

import profileImg from "../assets/profile.png";

const SOCIAL_LINKS = {
  email: "mailto:hello@example.com",
  instagram: "https://instagram.com/your_id",
  linkedin: "https://www.linkedin.com/in/your_id",
  portfolio: "https://your-portfolio.com",
};

const AboutSection = ({ lang }) => {
  const isKo = lang === "ko";

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* 1. 상단 히어로: Work Hard. Be Nice. */}
      <section
        style={{
          marginBottom: "6rem",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#E96C1F",
            marginTop: "1rem",
            letterSpacing: "-0.04em",
          }}
        >
          {isKo ? (
            <>
              열심히 일하고,
              <br />
              다정하게 굽니다.
            </>
          ) : (
            <>
              Work Hard.
              <br />
              Be Nice.
            </>
          )}
        </h2>
      </section>

      {/* 2. 사진 + 소개 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "4rem",
          alignItems: "stretch",
          marginBottom: "6rem",
        }}
      >
        {/* 왼쪽: 이미지 */}
        <div
          style={{
            width: "100%",
            minHeight: "420px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        {/* 실제 사진 쓰고 싶으면 아래처럼 교체
          <img
            src={profileImg}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          */}

        {/* 오른쪽: ABOUT 텍스트 */}
        <div>
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E96C1F",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            {isKo ? "I AM…" : "I AM A…"}
          </p>

          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              margin: 0,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            {isKo ? (
              <>
                프로덕트 매니저
                <br />
                디지털 제품을 만드는 사람
              </>
            ) : (
              <>
                Product Manager
                <br />
                Builder of digital experiences
              </>
            )}
          </h3>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#555",
              marginBottom: "1.2rem",
            }}
          >
            {isKo ? (
              <>
                저는 다양한 팀과 협업하면서 사용자가 “필요하다고 느끼는 순간”
                등장하는 제품을 만드는 데 관심이 많습니다. 문제를 쪼개고,
                데이터와 직관을 섞어 실험하고, 그 결과를 서비스에 반영하는
                과정을 좋아합니다.
              </>
            ) : (
              <>
                I like working with cross-functional teams to ship products that
                quietly become essential the moment they exist. I enjoy breaking
                down fuzzy problems, running small experiments, and turning what
                we learn into better experiences.
              </>
            )}
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#555",
              marginBottom: "1.8rem",
            }}
          >
            {isKo ? (
              <>
                요즘은 글로벌 환경에서 통할 수 있는 제품 감각과 언어, 그리고
                프론트엔드 프로토타이핑 실력을 함께 키우는 중입니다. 새로운 팀과
                새로운 문제를 만나는 걸 즐깁니다.
              </>
            ) : (
              <>
                Right now I’m focused on sharpening my product sense, my
                English, and my ability to prototype quickly with frontend
                tools. I enjoy joining teams that are curious, kind, and serious
                about making useful things.
              </>
            )}
          </p>

          {/* 소셜 아이콘 줄 */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "1.4rem",
              color: "#555",
            }}
          >
            <a
              href={SOCIAL_LINKS.email}
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label="Email"
            >
              ✉️
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label="Instagram"
            >
              📷
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href={SOCIAL_LINKS.portfolio}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label="Portfolio"
            >
              🔗
            </a>
          </div>
        </div>
      </section>

      {/* 3. Recommendations / 소개 글 영역 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
          gap: "4rem",
          marginBottom: "6rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "2.1rem",
              fontWeight: 800,
              margin: 0,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            {isKo
              ? "함께 일했던 사람들의 말"
              : "Recommendations from teammates"}
          </h3>
        </div>

        <div
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#555",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <p>
            {isKo ? (
              <>
                “라현지는 문제를 빨리 이해하고, 각 팀이 어디에서 막히는지
                집어내는 능력이 뛰어납니다. 사용자와 비즈니스 모두에게 도움이
                되는 선택지를 끈질기게 찾습니다.”
              </>
            ) : (
              <>
                “Ragu quickly understands the problem and spots where each team
                is blocked. She’s persistent about finding options that work for
                both the user and the business.”
              </>
            )}
          </p>

          <p>
            {isKo ? (
              <>
                “아이디어 단계에서 끝나지 않고, 직접 화면을 그리고
                프로토타입까지 만들어서 팀이 같은 그림을 보게 만듭니다.”
              </>
            ) : (
              <>
                “She doesn’t stop at ideas. She sketches flows, builds simple
                prototypes, and helps the team see the same picture.”
              </>
            )}
          </p>
        </div>
      </section>

      {/* 4. Skills + Certifications 비슷한 블록 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.7fr)",
          gap: "4rem",
          marginBottom: "6rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              margin: 0,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            {isKo ? "기술 스택 + 역량" : "Technology Skills + Focus"}
          </h3>
        </div>

        <div
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.4rem",
              margin: 0,
            }}
          >
            <li>
              {isKo
                ? "제품 기획, 요구사항 정리, 로드맵/우선순위 수립"
                : "Product discovery, requirements, roadmapping & prioritization"}
            </li>
            <li>
              {isKo
                ? "Figma를 활용한 UX/UI 와이어프레임, 인터랙션 프로토타입"
                : "UX/UI wireframes and interactive prototypes in Figma"}
            </li>
            <li>
              {isKo
                ? "React, JavaScript, HTML/CSS를 활용한 빠른 화면 프로토타입"
                : "Rapid UI prototyping with React, JavaScript, HTML/CSS"}
            </li>
            <li>
              {isKo
                ? "데이터 기반 실험 설계, 간단한 대시보드/리포트 작성"
                : "Experiment design and lightweight dashboards / reporting"}
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Publications 영역 → 간단한 목록 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.7fr)",
          gap: "4rem",
          marginBottom: "6rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              margin: 0,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            {isKo ? "글과 기록들" : "Publications + Writing"}
          </h3>
        </div>

        <div
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.4rem",
              margin: 0,
            }}
          >
            <li>
              {isKo
                ? "프로덕트/커리어 관련 글을 개인 블로그와 SNS에 연재 중"
                : "Writing about product, careers, and learning on my blog and social channels"}
            </li>
            <li>
              {isKo
                ? "사이드 프로젝트와 실험 과정을 아카이빙하는 포트폴리오 운영"
                : "Maintaining this portfolio as a living archive of side projects and experiments"}
            </li>
          </ul>
        </div>
      </section>

      {/* 6. 마지막 CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 0 2rem",
        }}
      >
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {isKo
            ? "같이 재미있는 걸 만들어 보고 싶다면,"
            : "If you’d like to build something interesting together,"}
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "0.9rem 2.4rem",
            borderRadius: "999px",
            backgroundColor: "#E19A14",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 6px 18px rgba(225,154,20,0.4)",
          }}
        >
          {isKo ? "Contact" : "Contact"}
        </a>
      </section>
    </div>
  );
};

export default AboutSection;
