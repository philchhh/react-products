function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // Error response not in the range of 200s
    errorMsg = error.response.data;
    console.error("Error Response", errorMsg);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.message;
    }
  } else if (error.request) {
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
