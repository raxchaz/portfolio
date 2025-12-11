import profileImg from "../assets/profile.png";
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";

const SOCIAL_LINKS = {
  email: "mailto:hello@example.com",
  linkedin: "https://www.linkedin.com/in/your_id",
  github: "https://github.com/your_id",
};

const GRID_MAIN = "minmax(0, 1.1fr) minmax(0, 1fr)";

const AboutSection = ({ lang }) => {
  const isKo = lang === "ko";

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* 1. 상단 히어로 */}
      <section style={{ marginBottom: "6rem" }}>
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

      {/* 2. 메인 프로필 섹션 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: GRID_MAIN,
          gap: "4rem",
          alignItems: "stretch",
          marginBottom: "6rem",
        }}
      >
        {/* 왼쪽 이미지 */}
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
              height: "101%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div>
          <p
            style={{
              fontSize: "0.95rrem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E96C1F",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            {isKo ? "I AM ㅡ" : "I AM ㅡ"}
          </p>

          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.03em",
            }}
          >
            {isKo ? (
              <>
                프로덕트 매니저
                <br />
                디지털 서비스를 만드는 사람
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
              letterSpacing: "-0.05rem",
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
              gap: "1.6rem",
              alignItems: "center",
              paddingTop: "0.5rem",
            }}
          >
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinImg}
                alt="LinkedIn"
                style={{
                  width: "30px",
                  height: "30px",
                  display: "block",
                  marginTop: "-0.5rem",
                }}
              />
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <img
                src={githubImg}
                alt="Github"
                style={{
                  width: "30px",
                  height: "30px",
                  display: "block",
                  marginTop: "-0.5rem",
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* 이후 섹션들은 기존 코드 그대로 유지 */}
      {/* Recommendations / Skills / Publications / CTA */}
      {/* ... 생략 없이 기존 구조 유지 ... */}
    </div>
  );
};

export default AboutSection;
