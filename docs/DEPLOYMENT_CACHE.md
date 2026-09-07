# 배포 캐시 표준

SAMWOO UI를 사용하는 앱은 새 버전 배포 뒤 즐겨찾기나 일반 새로고침에서도 최신
진입 문서를 받아야 합니다. 프레임워크와 무관하게 다음 계약을 지킵니다.

| 응답 | `Cache-Control` | 이유 |
| --- | --- | --- |
| HTML·SPA 진입 문서 | `no-cache, no-store, must-revalidate` | 이전 빌드의 자산 목록과 로그인 화면이 남지 않게 함 |
| API·인증 응답 | `no-store` | 사용자별 데이터와 로그인 상태를 브라우저에 저장하지 않음 |
| 콘텐츠 해시가 있는 자산 | `public, max-age=31536000, immutable` | 파일명이 바뀌므로 안전하게 장기 캐시 |
| 해시가 없는 정적 파일 | `no-cache` | 같은 URL로 교체될 수 있으므로 매번 재검증 |

React + Vite 앱은 `react-fastapi-template`의 `frontend/nginx.conf`를 사용합니다.
Streamlit 앱은 `streamlit-prototype-template`이 고정한 런타임의 기본 헤더를 유지합니다.
포털의 링크만 바꾸거나 포털 Nginx만 수정해도 외부 앱의 응답 헤더는 바뀌지 않으므로,
각 앱 또는 그 앱 앞단 프록시에서 이 정책을 적용해야 합니다.

배포 후 다음 두 요청을 확인합니다.

```powershell
curl.exe -I https://app.example.com/
curl.exe -I https://app.example.com/assets/<hashed-file>.js
```

첫 응답은 HTML 장기 캐시가 없어야 하고, 두 번째 응답만 `immutable`이어야 합니다.
