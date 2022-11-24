export const createErrorMsg = (status, msg) => {
  const err = new Error()
  err.status = status
  err.message = msg
  return err
}

export const sendErrorResponse = (err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong !"

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stact: err.stack
  })
}
