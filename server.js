// server.js (정적 웹 서버 버전)

const express = require('express');
const path = require('path');
const app = express();

// public 폴더 안의 정적 파일 제공 (html, css, js, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

// 기본 루트("/") 요청 시 index.html 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});

// server.js (정적 웹 서버 버전)