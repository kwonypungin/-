# 동국문화재연구원 공식 웹사이트

**Dongguk Cultural Heritage Research Institute Official Website**

---

## 📖 프로젝트 소개

동국문화재연구원의 공식 홈페이지입니다. 2025년 최신 웹 디자인 트렌드를 적용한 모던하고 전문적인 웹사이트입니다.

### ✨ 주요 특징

- **최신 디자인 트렌드 (2025)**
  - 🌟 Glassmorphism (Frosted Glass Effect)
  - 📐 Bento Grid Layout
  - ✨ Micro-interactions & Smooth Animations
  - 🎨 Gradient Backgrounds & Neon Accents
  - 🌓 Dark/Light Mode Toggle
  - 💫 Parallax Scrolling Effects
  - 🎯 3D Card Hover Effects

- **한국 전통 디자인 요소**
  - 청자색(Celadon) 기반 컬러 팔레트
  - 금색(Gold) 악센트
  - 한국 전통 문양의 현대적 재해석

- **최신 기술 스택**
  - HTML5 (Semantic Markup)
  - CSS3 (Custom Properties, Grid, Flexbox, Backdrop Filter)
  - Vanilla JavaScript (ES6+)
  - Intersection Observer API
  - Web Animations API

---

## 🚀 기능

### 사용자 경험
- ✅ 완벽한 반응형 디자인 (Mobile/Tablet/Desktop)
- ✅ 다크/라이트 모드 자동 저장
- ✅ 부드러운 스크롤 애니메이션
- ✅ 접근성 고려 (ARIA Labels, Semantic HTML)
- ✅ 빠른 로딩 속도 & 성능 최적화
- ✅ SEO 최적화

### 인터랙티브 요소
- 🎯 Scroll-triggered Animations
- 🎨 3D Hover Effects on Cards
- 💫 Animated Counters
- 🌊 Parallax Background
- 📱 Mobile-friendly Navigation
- ⬆️ Back to Top Button

---

## 📂 프로젝트 구조

```
dongguk-heritage-website/
├── index.html              # 메인 페이지
├── css/
│   └── style.css          # 메인 스타일시트 (최신 CSS 기술)
├── js/
│   └── main.js            # 메인 JavaScript (ES6+)
├── images/                # 이미지 리소스
├── pages/                 # 서브 페이지들
│   ├── about.html        # 연구원 소개
│   ├── projects.html     # 조사 및 발굴
│   ├── publications.html # 연구 성과
│   ├── news.html         # 소식 및 공지
│   ├── gallery.html      # 갤러리
│   └── contact.html      # 연락처
└── README.md             # 프로젝트 문서
```

---

## 🎨 페이지 구성

1. **메인 페이지 (index.html)**
   - Hero Section with Animated Background
   - Bento Grid Features Section
   - Current Projects Showcase
   - Latest News & Announcements
   - Footer with Contact Information

2. **연구원 소개 (about.html)**
   - 연구원 소개 및 설립 목적
   - 주요 사업 안내

3. **조사 및 발굴 (projects.html)**
   - 진행 중인 프로젝트
   - 완료된 프로젝트 아카이브

4. **연구 성과 (publications.html)**
   - 연구 보고서
   - 학술 논문
   - 출판물

5. **소식 및 공지 (news.html)**
   - 최신 소식
   - 공지사항
   - 이벤트 정보

6. **갤러리 (gallery.html)**
   - 발굴 사진
   - 유물 사진
   - 프로젝트 갤러리

7. **연락처 (contact.html)**
   - 연락처 정보
   - 오시는 길
   - 문의 폼

---

## 🛠️ 사용 방법

### 1. 로컬에서 실행

웹사이트를 로컬에서 실행하려면 간단히 `index.html` 파일을 브라우저에서 열면 됩니다.

```bash
# 파일 탐색기에서 index.html을 더블클릭하거나
# 또는 Live Server 사용 (VS Code Extension)
```

### 2. Live Server 사용 (권장)

VS Code를 사용하는 경우:

1. Live Server Extension 설치
2. `index.html`에서 우클릭
3. "Open with Live Server" 선택

---

## 🎨 디자인 커스터마이징

### 색상 변경

`css/style.css` 파일의 CSS Variables를 수정하세요:

```css
:root {
    /* Primary Colors */
    --celadon-primary: #7EC8A3;  /* 청자색 */
    --gold: #D4AF37;             /* 금색 */

    /* 원하는 색상으로 변경 가능 */
}
```

### 다크 모드 색상

```css
[data-theme="dark"] {
    --bg-primary: #0F172A;
    --text-primary: #F1F5F9;
    /* 다크 모드 색상 커스터마이징 */
}
```

---

## 📱 반응형 브레이크포인트

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1023px */
/* Desktop: >= 1024px */
```

---

## ⚡ 성능 최적화

- ✅ CSS Custom Properties for efficient styling
- ✅ Debounced scroll events
- ✅ Intersection Observer for lazy loading
- ✅ Optimized animations (GPU acceleration)
- ✅ Minimal external dependencies

---

## 🌐 브라우저 지원

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ⚠️ IE 11 (Limited support - no backdrop-filter)

---

## 📄 라이선스

© 2024 Dongguk Cultural Heritage Research Institute. All rights reserved.

---

## 👤 개발 정보

**개발:** Claude (Anthropic)
**디자인 컨셉:** 2025 Modern Web Design Trends
**테마:** Korean Traditional + Modern Fusion

---

## 📞 문의

**동국문화재연구원**
- 주소: 서울특별시 중구 필동로 1길 30 (필동 3가) 동국대학교 문화학술관
- 전화: 02-2260-3680
- 팩스: 02-2277-1274
- 이메일: heritage@dongguk.edu

---

## 🔧 향후 개선 사항

- [ ] 실제 프로젝트 데이터 연동
- [ ] CMS 시스템 통합
- [ ] 다국어 지원 (한국어/영어)
- [ ] 갤러리 이미지 Lightbox
- [ ] 검색 기능
- [ ] PWA (Progressive Web App) 지원
- [ ] Google Maps API 연동
- [ ] 실시간 문의 챗봇

---

**Made with ❤️ for Cultural Heritage Preservation**
