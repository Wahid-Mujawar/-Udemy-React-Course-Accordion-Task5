import React, { useState } from 'react';
import Data from './Data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(Data)

  return <main>
    < div className="container">
      <h3>FAQ and Answers About Login</h3>
    </div>
  </main>;
}

export default App;