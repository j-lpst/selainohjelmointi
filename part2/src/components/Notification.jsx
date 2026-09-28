const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  if (type === 'error') {
    return (
      <div className="notify error">
        {message}
      </div>
    )
  }

  return (
    <div className="notify">
      {message}
    </div>
  )
}

export default Notification
