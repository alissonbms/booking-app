const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const ErrorMessage = error.message || "Something went wrong. Server Error";
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: ErrorMessage,
    stack: error.stack,
  });
};

export default errorHandler;
