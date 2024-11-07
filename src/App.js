import QuizGame from './QuizGame';
import React from 'react';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'red', textAlign: 'center' }}>
        Ngân hàng câu hỏi thi ILP
      </h2>
      <QuizGame />
      <h2 style={{ marginTop: '50px', fontSize: '20px' }}>Design by Dennis</h2>
    </div>
  );
}

export default App;
