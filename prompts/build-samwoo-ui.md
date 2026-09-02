# SAMWOO UI 구현 프롬프트

아래 내용을 AI 코딩 도구의 시작 프롬프트로 사용하고 마지막의 기능 설명을 프로젝트에 맞게 교체합니다.

```text
SAMWOO UI Standard를 준수해서 기능을 구현해 줘.

작업을 시작하기 전에 반드시 다음 파일을 읽어라.
- AGENTS.md
- docs/DESIGN_SYSTEM.md
- docs/UI_CHECKLIST.md
- src/styles/tokens.css

구현 규칙:
- React 19와 strict TypeScript를 사용한다.
- 새로운 색상, 간격, 그림자, UI 패턴을 임의로 만들지 않는다.
- src/components의 기존 컴포넌트와 디자인 토큰을 먼저 재사용한다.
- 밝은 배경에는 footer_logo-light.png, 어두운 배경에는 footer_logo-dark.png를 사용한다.
- 파비콘과 기본 서비스 아이콘은 samwooeleco-favicon.png를 사용한다.
- 데이터는 백엔드 API를 통해서만 접근하고 프런트엔드에서 DB에 직접 연결하지 않는다.
- 데스크톱, 태블릿, 모바일을 모두 구현한다.
- hover, focus-visible, disabled, loading, empty, error 상태를 포함한다.
- 한국어 실제 콘텐츠로 레이아웃을 확인한다.
- 완료 후 타입 검사와 프로덕션 빌드를 실행한다.

구현할 기능:
[여기에 필요한 기능, 사용자, 데이터, 완료 조건을 입력]
```
## 기존 화면을 표준으로 변환할 때

```text
현재 기능과 데이터 흐름은 유지하면서 화면을 SAMWOO UI Standard로 변환해 줘.
먼저 기존 UI를 분석해 공통 컴포넌트로 교체할 부분과 제품 고유 화면으로 남길 부분을 구분하라.
AGENTS.md와 docs/DESIGN_SYSTEM.md에 없는 새로운 패턴이 필요하면 구현 전에 이유와 재사용 범위를 설명하라.
```
