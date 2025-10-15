# 기여 가이드

이 프로젝트에 기여해주셔서 감사합니다! 🎉

## 🚀 시작하기

### 1. 저장소 Fork

GitHub에서 이 저장소를 Fork합니다.

### 2. 로컬에 클론

```bash
git clone https://github.com/YOUR-USERNAME/-.git
cd -
```

### 3. 새 브랜치 생성

```bash
git checkout -b feature/your-feature-name
```

## 📝 커밋 컨벤션

Conventional Commits 규칙을 따릅니다:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅 (기능 변경 없음)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 등

### 예시

```bash
git commit -m "feat(workflow): add auto-commit workflow

- 매일 자동으로 커밋 생성
- activity 디렉토리에 기록 저장
- 커밋 메시지 자동 생성"
```

## 🔀 Pull Request 프로세스

1. **코드 작성 완료**
   - 모든 테스트 통과 확인
   - 린트 에러 수정
   - 문서 업데이트

2. **커밋 및 푸시**
   ```bash
   git add .
   git commit -m "feat: your feature"
   git push origin feature/your-feature-name
   ```

3. **PR 생성**
   - 명확한 제목과 설명 작성
   - 관련 이슈 링크 (있는 경우)
   - 스크린샷 첨부 (UI 변경 시)

4. **리뷰 대기**
   - CI 통과 확인
   - 리뷰어 피드백 반영

## ✅ 체크리스트

PR 생성 전 확인사항:

- [ ] 코드가 프로젝트 스타일 가이드를 따릅니다
- [ ] 모든 테스트가 통과합니다
- [ ] 새로운 기능에 대한 테스트를 작성했습니다
- [ ] 문서를 업데이트했습니다
- [ ] 커밋 메시지가 컨벤션을 따릅니다

## 🐛 버그 리포트

버그를 발견하셨나요? Issue를 생성해주세요:

1. **제목**: 간결하고 명확하게
2. **설명**:
   - 현재 동작
   - 예상 동작
   - 재현 단계
   - 환경 정보
3. **스크린샷**: 가능한 경우

## 💡 기능 제안

새로운 기능을 제안하고 싶으신가요?

1. Issue 탭에서 "Feature Request" 생성
2. 다음 정보 포함:
   - 문제/니즈 설명
   - 제안하는 솔루션
   - 대안
   - 추가 컨텍스트

## 📞 문의

질문이나 도움이 필요하신가요?

- Issue 생성
- Discussion 활용

감사합니다! 🙏
