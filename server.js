const path = require('path');
const express = require('express');
const app = express();

// ✅ 실제 public 폴더 경로 반영
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// ✅ 기본 루트("/") 요청 시 index.html 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

// ✅ API 라우트 예시
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// ✅ 서버 실행
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
