import { useState } from 'react'
import './App.css'
import Questions from './components/Questions'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h2 className='title'>Frequently Asked Questions</h2>
        <hr />
        <Questions questions={questions} />
      </div>
    </main>
  )
}

export default App
