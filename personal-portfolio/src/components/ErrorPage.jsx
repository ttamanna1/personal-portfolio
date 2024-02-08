import { useRouteError } from "react-router-dom"

//? Icon
import ErrorIcon from '@mui/icons-material/Error'

const ErrorPage = ({ theme }) => {
  const error = useRouteError()
  console.error(error)
  console.log('ERROR ->', error.status)

  return (
    <>
      <div className={`container ${theme}`}>
        <div id="error-page">
          <ErrorIcon className="error-icon"/>
          <p>Something has gone wrong... Please try again later.</p>
        </div>
      </div>
    </>
  )
}

export default ErrorPage