# 🍒 Cherry
제품을 대여해서 미리 사용해보고 체험해 볼 수 있는 서비스
</br>
https://200-cherry.vercel.app/

## 📢프로젝트 정보
- 개발 기간 : 2025.08.11 ~ 2025.09.15
- 참여 인원 : 프론트 2명

## ☀️기술 스택
- **Language** : `TypeScript` (코드 안정성과 유지보수성 향상)
- **Framework / Library** : `Next(App Router)` (SEO 최적화, 빠른 페이지 로딩)
- **UI** : `Tailwind CSS` (빠른 개발, 일관된 디자인, 협업 효율 향상)
- **State Management** : `Tanstack Query`(서버 상태 관리), `Zustand`(UI 상태 관리)
- **Build Tool / Bundler** : `Vite` (빠른 개발 서버와 빌드 속도, 간편한 설정)
- **HTTP Client** : `Axios` (간결한 API 요청 처리, 응답 인터셉터로 공통 로직 관리 용이)

## 💻담당 역할
### 정다정(FE리드)
| 담당 페이지 | 주요 기능  |
|-------------|----------------------------|
|||

### 김소연(FE)
| 담당 페이지 | 주요 기능  |
|-------------|----------------------------|
| 로그인 페이지 | 카카오 oAuth를 활용한 간편 로그인 기능, 닉네임, 아이디 중복확인 기능 |
| 상품 상세 페이지 | 상품 상세 데이터 출력, 장바구니 담기 기능(Tanstack Query를 활용해 헤더에 장바구니 개수 출력), 바로 결제 기능 |
| 장바구니 페이지 | 장바구니 데이터 출력, 장바구니 상품 삭제 기능, 선택 상품 결제 기능 |
| 체험 신청 페이지 (결제) | 장바구니 리스트 결제/바로 결제 분기 처리, 달력 라이브러리, 다음 도로명 API호출, 유효성 검사 기능 |
| 리포트 페이지 | 리포트 작성 가능/ 이미 작성한 리포트 탭 분리, 무한 스크롤 기능 |
| 마이 페이지 | UI 작업 |

## 🛠️주요 기능
| 페이지 |  |
|-------------|----------------------------|
| 메인 페이지     | <img width="386" height="822" alt="image" src="https://github.com/user-attachments/assets/85d317a8-7828-4b4f-b59a-81557232be7f" />|
| 상품 페이지    | <img width="382" height="903" alt="image" src="https://github.com/user-attachments/assets/9229921d-a535-4049-8bdd-6c49aae949dc" />|
| 상품 상세 페이지     | <img width="392" height="905" alt="image" src="https://github.com/user-attachments/assets/ce9c08fb-27c3-4318-92a3-690bca8748e6" />|
| 장바구니 페이지     | <img width="387" height="904" alt="image" src="https://github.com/user-attachments/assets/accc5172-dd13-441e-bc6e-4c364f7c8587" />|
| 체험 신청 페이지     | <img width="382" height="903" alt="image" src="https://github.com/user-attachments/assets/f457195f-9819-4cf2-a9e8-f8be1cb71f5d" />|
| 리포트 페이지     | |
| 이용 내역 페이지     | <img width="395" height="746" alt="image" src="https://github.com/user-attachments/assets/7b34d86b-d5b9-4bc1-a31c-1e6fd2d10a6d" />|
| 마이 페이지     | <img width="384" height="904" alt="image" src="https://github.com/user-attachments/assets/b96193de-ad45-49e6-8992-5bc81ddc5130" />|

## ✏️컨벤션
- Git : GitHub Flow, Merge
  - **main** : 배포용 브랜치
  - **develope** : 개발용 브랜치
  - **feature/기능 이름** : 기능별 브랜치

- 코드 컨벤션
  - **파일명** : `camelCase` 
  - **컴포넌트명** : `PascalCase`
  - **Prettier사용**

- 커밋 컨벤션

| 커밋 메세지 | 상태 |
|-------------|----------------------------|
| ✨ feat     | 새로운 기능 추가 |
| 🐛 fix      | 버그 수정 |
| 📝 docs     | 문서 수정 |
| 💄 style    | 코드 포맷팅, 세미콜론 등 변경 (기능 변화 없음) |
| ♻️ refactor | 코드 리팩토링 (기능 변화 없음) |
| 🔧 chore    | 빌드/도구/설정/환경 업데이트 (의존성, CI, 스크립트, 설정 파일 등) |
