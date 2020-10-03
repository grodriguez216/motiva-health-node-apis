/**
 * Encodes an object as a valid query of a Uniform Resource Identifier (URI)
 * @params the object to encode
 */
function encodeParameters(object, prefix) {
  let encoded = [];
  Object.entries(object).forEach(([k, value]) => {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof value === "object") {
      encoded.push(encodeParameters(value, key));
    } else {
      encoded.push([key, value].map(encodeURIComponent).join("="));
    }
  });

  return encoded.join("&");
}

exports.encodeParameters = encodeParameters;
