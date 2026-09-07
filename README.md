# SAMWOO UI Standard

삼우 사내 웹 서비스가 일관된 브랜드, 레이아웃, 상태 표현과 접근성 기준을 사용하도록 만든 실행 가능한 React 19 UI 스타터입니다.

## 시작하기

```bash
npm install
npm run dev
```

프로덕션 검증은 다음 명령으로 수행합니다.

```bash
npm run build
```

## 포함된 내용

- 라이트·다크 테마 디자인 토큰
- SAMWOO 로고와 파비콘
- 버튼, 입력 필드, 상태 표시 컴포넌트
- 내비게이션, 서비스 카드, 빈 상태 화면 패턴
- 데스크톱·태블릿·모바일 반응형 기준
- 바이브코딩용 `AGENTS.md`와 재사용 프롬프트
- 디자인 시스템 문서와 UI 갤러리

## 새 프로젝트에서 사용하기

1. GitHub에서 이 저장소의 **Use this template**를 선택합니다.
2. 제품 이름과 화면 내용을 교체합니다.
3. `AGENTS.md`와 `docs/DESIGN_SYSTEM.md`를 AI 도구가 먼저 읽게 합니다.
4. `src/components`와 `src/styles/tokens.css`를 우선 재사용합니다.
5. 제품 고유 API와 도메인 로직만 추가합니다.

디자인 원칙은 [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md), 배포 캐시 계약은
[docs/DEPLOYMENT_CACHE.md](docs/DEPLOYMENT_CACHE.md), AI 시작 프롬프트는
[prompts/build-samwoo-ui.md](prompts/build-samwoo-ui.md)를 참고하세요.

## 저장소 역할

이 저장소에는 제품별 API, 인증, 데이터베이스 연결, 운영 접속 정보가 포함되지 않습니다. 공통 컴포넌트가 여러 프로젝트에서 안정화되면 별도의 내부 패키지로 분리할 수 있습니다.
