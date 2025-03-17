export const errorHandler = (error, req, res, next) => {
  // Default status code is 500 (Internal Server Error)
  const status = error.statusCode || error.status || 500;

  // Default error message
  const message = error.message || "Something went wrong";

  // Log the error for debugging (only in development)
  if (process.env.NODE_ENV === "development") {
    console.error(error.stack);
  }

  // Send the error response
  res.status(status).json({
    success: false,
    message: message,
    // Optionally include the stack trace in development mode
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
