import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h4>Walmart Stores</h4>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <SingleQuestion {...question} />
          </div>
        )
      })}
    </section>
  )
}

export default Questions
