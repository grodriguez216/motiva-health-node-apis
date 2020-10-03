require("dotenv").config({ silent: true });

const { encodeParameters } = require("./includes/helpers");
const { failure, success } = require("./includes/responses");
const { get } = require("axios");

exports.handler = async event => {
  const mock_catalog = require("./mock/get_clinic.catalog.json");

  const parameters = event.queryStringParameters ?? {};

  const url = process.env.CLINICS_CATALOG_API;

  const encodedParams = encodeParameters(parameters);

  const request = `${url}?${encodedParams}`;

  console.log("[GET]", decodeURI(request));

  const results = await get(request);

  // replace the actual response with mock data
  results.data = mock_catalog;

  if (results && results.data) {
    return success(results.data);
  } else {
    return failure("Unable to get results");
  }
};
