import { useEffect, useState } from "react";
import { BrandLogo } from "./components/BrandLogo";
import { Button } from "./components/Button";
import { Field } from "./components/Field";
import { StatusBadge } from "./components/StatusBadge";
import { ThemeSwitcher, type ThemeMode } from "./components/ThemeSwitcher";

const sections = [
  ["overview", "개요"],
  ["foundation", "기초 토큰"],
  ["components", "컴포넌트"],
  ["patterns", "화면 패턴"],
] as const;

const swatches = [
  ["Canvas", "--color-canvas", "#eef2f6"],
  ["Paper", "--color-surface", "#ffffff"],
  ["Ink", "--color-ink", "#172b45"],
  ["Signal", "--color-signal", "#356bb5"],
  ["Success", "--color-success", "#50bd8c"],
  ["Danger", "--color-danger", "#d15e4d"],
] as const;

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "system") {
    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } else {
    root.dataset.theme = mode;
  }
}
export function App() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    applyTheme(theme);
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => applyTheme("system");
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [theme]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-link" href="#overview" aria-label="SAMWOO UI Standard 홈">
          <BrandLogo />
          <span>SYSTEM / UI STANDARD</span>
        </a>
        <div className="topbar-actions">
          <StatusBadge>STANDARD 1.0</StatusBadge>
          <ThemeSwitcher mode={theme} onChange={setTheme} />
        </div>
      </header>

      <div className="workspace">
        <aside className="side-rail" aria-label="페이지 목차">
          <div className="rail-heading">
            <strong>FOUNDATION</strong>
            <span>React 19 · Strict TS</span>
          </div>
          <nav>
            {sections.map(([id, label], index) => (
              <a key={id} href={`#${id}`} className={index === 0 ? "selected" : ""}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </nav>
          <p className="rail-note">이 페이지의 컴포넌트와 토큰을 새 사내 서비스의 출발점으로 사용하세요.</p>
        </aside>

        <main>
          <section className="hero" id="overview">
            <div className="hero-copy">
              <h1>익숙하고 정확한<br /><em>삼우의 화면</em></h1>
              <p>사내 서비스가 같은 브랜드와 인터랙션 언어를 사용하도록 만든 실행 가능한 UI 기준입니다.</p>
              <div className="hero-actions">
                <Button onClick={() => document.querySelector("#components")?.scrollIntoView({ behavior: "smooth" })}>
                  컴포넌트 보기
                </Button>
                <Button variant="secondary" onClick={() => document.querySelector("#patterns")?.scrollIntoView({ behavior: "smooth" })}>
                  화면 패턴 보기
                </Button>
              </div>
            </div>
            <div className="hero-register" aria-label="표준 원칙">
              <span>DESIGN REGISTER</span>
              <strong>명확성</strong>
              <dl>
                <div><dt>구조</dt><dd>업무 흐름 우선</dd></div>
                <div><dt>상태</dt><dd>색상 + 텍스트</dd></div>
                <div><dt>대응</dt><dd>Desktop → Mobile</dd></div>
              </dl>
            </div>
          </section>

          <section className="standard-section" id="foundation">
            <header className="section-heading">
              <div><h2>기초 토큰</h2><p>색상과 간격은 의미가 있는 토큰으로만 사용합니다.</p></div>
              <span>LIGHT / DARK READY</span>
            </header>
            <div className="swatch-grid">
              {swatches.map(([name, token, color]) => (
                <article className="swatch" key={token}>
                  <div style={{ background: `var(${token})` }} />
                  <strong>{name}</strong>
                  <code>{token}</code>
                  <small>{color}</small>
                </article>
              ))}
            </div>
            <div className="type-specimen">
              <div><span>DISPLAY</span><h3>업무를 빠르게 이해하는 제목</h3></div>
              <div><span>BODY</span><p>본문은 65자 안팎의 읽기 폭과 충분한 행간을 사용합니다. 장식보다 정보 구조와 다음 행동을 먼저 보여줍니다.</p></div>
              <div><span>DATA</span><code>STATUS / READY · VERSION 1.0.0</code></div>
            </div>
          </section>

          <section className="standard-section" id="components">
            <header className="section-heading">
              <div><h2>공통 컴포넌트</h2><p>기본 상태뿐 아니라 오류·비활성·진행 상태까지 한 문법으로 제공합니다.</p></div>
              <span>ACCESSIBLE BY DEFAULT</span>
            </header>
            <div className="component-board">
              <article className="component-row">
                <div className="component-label"><strong>Button</strong><span>행동의 중요도를 구분합니다.</span></div>
                <div className="component-demo button-demo">
                  <Button>저장하기</Button>
                  <Button variant="secondary">취소</Button>
                  <Button variant="danger">삭제</Button>
                  <Button disabled>처리 중</Button>
                </div>
              </article>
              <article className="component-row">
                <div className="component-label"><strong>Status</strong><span>색상에만 의미를 맡기지 않습니다.</span></div>
                <div className="component-demo status-demo">
                  <StatusBadge>운영 중</StatusBadge>
                  <StatusBadge tone="pending">검토 대기</StatusBadge>
                  <StatusBadge tone="danger">점검 필요</StatusBadge>
                </div>
              </article>
              <article className="component-row">
                <div className="component-label"><strong>Field</strong><span>레이블과 복구 가능한 안내를 제공합니다.</span></div>
                <div className="component-demo field-demo">
                  <Field label="서비스 이름" hint="사용자가 알아보기 쉬운 이름" placeholder="예: 통합 업무 포털" />
                  <Field label="담당 부서" placeholder="예: DX팀" />
                </div>
              </article>
            </div>
          </section>

          <section className="standard-section" id="patterns">
            <header className="section-heading">
              <div><h2>화면 패턴</h2><p>실제 업무 화면에서 반복되는 목록과 빈 상태의 기준입니다.</p></div>
              <span>OPERATE MODE</span>
            </header>
            <div className="pattern-grid">
              <article className="service-example">
                <div className="example-top"><span>01</span><StatusBadge>운영 중</StatusBadge></div>
                <div className="example-title"><img src="/samwooeleco-favicon.png" alt="" /><h3>사내 서비스</h3></div>
                <p>서비스 설명은 목적과 사용자가 얻는 결과를 두 문장 안에서 명확하게 설명합니다.</p>
                <footer><span>담당 · DX팀</span><Button>서비스 열기</Button></footer>
              </article>
              <article className="empty-example">
                <img src="/samwooeleco-favicon.png" alt="" />
                <div><h3>등록된 항목이 없습니다</h3><p>첫 항목을 등록하면 이곳에서 상태와 담당자를 함께 확인할 수 있습니다.</p></div>
                <Button variant="secondary">첫 항목 등록</Button>
              </article>
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <BrandLogo />
        <span>UI STANDARD · INTERNAL USE</span>
      </footer>
    </div>
  );
}
