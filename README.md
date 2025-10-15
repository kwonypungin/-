# GitHub Actions 자동화 프로젝트

[![Auto Commit](https://github.com/kwonypungin/-/actions/workflows/auto-commit.yml/badge.svg)](https://github.com/kwonypungin/-/actions/workflows/auto-commit.yml)
[![CI Pipeline](https://github.com/kwonypungin/-/actions/workflows/ci.yml/badge.svg)](https://github.com/kwonypungin/-/actions/workflows/ci.yml)
[![Deploy](https://github.com/kwonypungin/-/actions/workflows/deploy.yml/badge.svg)](https://github.com/kwonypungin/-/actions/workflows/deploy.yml)

GitHub Actions를 활용한 완전 자동화된 CI/CD 파이프라인 및 자동 커밋 시스템

## 🚀 기능

### 1. 자동 커밋 (Auto Commit)
- **일정**: 매일 자정 (UTC 00:00 / KST 09:00)
- **수동 실행**: GitHub Actions 탭에서 `workflow_dispatch` 가능
- **기능**:
  - 자동으로 활동 기록 파일 생성/업데이트
  - 커밋 횟수 및 브랜치 정보 추적
  - 표준화된 커밋 메시지 자동 생성

### 2. CI 파이프라인 (Continuous Integration)
- **트리거**: `main`, `develop` 브랜치에 push 또는 PR
- **단계**:
  1. **Lint**: 코드 스타일 검사
  2. **Test**: 자동화된 테스트 실행
  3. **Build**: 프로젝트 빌드
  4. **Security**: Trivy를 이용한 보안 스캔

### 3. 배포 파이프라인 (Deploy)
- **트리거**: `main` 브랜치 push 또는 태그 생성
- **기능**:
  - 프로덕션 환경 배포
  - 릴리스 노트 자동 생성
  - 빌드 아티팩트 자동 업로드

## 📋 워크플로우 상세

### Auto Commit Workflow (`.github/workflows/auto-commit.yml`)

```yaml
트리거:
  - schedule: 매일 00:00 UTC
  - workflow_dispatch: 수동 실행
  - push to main: 코드 푸시 시

작업:
  1. 저장소 체크아웃
  2. Git 설정
  3. 현재 날짜 및 시간 가져오기
  4. activity 디렉토리에 최신 정보 기록
  5. 변경사항 확인
  6. 변경사항이 있으면 커밋 및 푸시
  7. 요약 정보 출력
```

### CI Workflow (`.github/workflows/ci.yml`)

```yaml
트리거:
  - push to main/develop
  - pull_request to main/develop

Jobs:
  1. lint: 코드 린팅
  2. test: 테스트 실행
  3. build: 프로젝트 빌드
  4. security: 보안 스캔
```

### Deploy Workflow (`.github/workflows/deploy.yml`)

```yaml
트리거:
  - push to main
  - tag: v*
  - workflow_dispatch

작업:
  1. 빌드
  2. 릴리스 생성 (태그가 있을 경우)
  3. 배포 요약 생성
```

## 🛠️ 설정 방법

### 1. 저장소 클론

```bash
git clone https://github.com/kwonypungin/-.git
cd -
```

### 2. GitHub Actions 활성화

- 저장소 Settings → Actions → General
- "Allow all actions and reusable workflows" 선택

### 3. Permissions 설정

- Settings → Actions → General → Workflow permissions
- "Read and write permissions" 선택
- "Allow GitHub Actions to create and approve pull requests" 체크

### 4. 환경 변수 설정 (선택사항)

- Settings → Secrets and variables → Actions
- 필요한 시크릿 추가:
  - `DEPLOY_TOKEN`: 배포 토큰 (필요시)
  - 기타 환경별 시크릿

## 📊 사용법

### 자동 커밋 수동 실행

1. GitHub 저장소 → Actions 탭
2. "Auto Commit" 워크플로우 선택
3. "Run workflow" 버튼 클릭

### 릴리스 생성

```bash
# 태그 생성
git tag v1.0.0
git push origin v1.0.0
```

자동으로 릴리스가 생성됩니다.

### CI 파이프라인 확인

PR 생성 또는 main/develop 브랜치에 푸시하면 자동으로 실행됩니다.

## 📁 디렉토리 구조

```
.
├── .github/
│   └── workflows/
│       ├── auto-commit.yml    # 자동 커밋 워크플로우
│       ├── ci.yml             # CI 파이프라인
│       └── deploy.yml         # 배포 워크플로우
├── activity/                  # 자동 생성되는 활동 기록
│   └── latest.txt
├── README.md
└── CONTRIBUTING.md
```

## 🔧 커스터마이징

### 자동 커밋 주기 변경

`.github/workflows/auto-commit.yml` 파일의 `cron` 표현식 수정:

```yaml
schedule:
  - cron: '0 0 * * *'  # 매일 자정
  # 예시:
  # - cron: '0 */6 * * *'  # 6시간마다
  # - cron: '0 0 * * 1'    # 매주 월요일
```

### CI 파이프라인 단계 추가

`.github/workflows/ci.yml`에 새로운 job 추가:

```yaml
jobs:
  your-job:
    name: Your Custom Job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Your Step
        run: echo "Custom step"
```

## 🤝 기여 방법

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자유롭게 사용하세요!

## 🙋‍♂️ 문의

이슈나 질문이 있으시면 [Issues](https://github.com/kwonypungin/-/issues)에 등록해주세요.

---

**🤖 Generated with GitHub Actions**

Last updated: Auto-updated by GitHub Actions
