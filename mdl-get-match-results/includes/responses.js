/**
 * Return an object with cors headers for a specific type of http methods
 * @param method a comma separated string of allowed http methods
 */
function corsHeaders(method = "POST,GET,PATCH,DELETE") {
  return {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": `OPTIONS,${method}`,
  };
}

/**
 * Returns a success response object with CORS headers
 * @param code
 * @param data Object with the response body
 * @param headers
 */
function response(code, data, headers) {
  return {
    headers,
    body: JSON.stringify({
      statusCode: code,
      message: data,
    }),
  };
}

/**
 * Returns a success response object with CORS headers
 * @param data Object with the response body
 */
function success(data, method) {
  return response(200, data, corsHeaders(method));
}

/**
 * Returns an error response object with CORS headers
 * @param data Object with the response body
 */
function failure(data, method) {
  return response(400, data, corsHeaders(method));
}

exports.success = success;

exports.failure = failure;
