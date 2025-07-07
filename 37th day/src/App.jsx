import PropTypes from 'prop-types'
import Student from "./Student"
function App() {
  return (
    <>
      <Student Name="Saksham" age={21} isStudent={true} />
      <Student Name="Ramey" age={19} isStudent={false} />
      <Student /> {/* This will use default props */}
    </>
  )
}

export default App
