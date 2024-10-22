/** @format */

import axios from "axios"; // Ensure axios is imported

export const GraphQLRequest = async (data) => {
  const config = {
    method: "POST",
    url: "/graphql",
    headers: {
      "Accept-Language": "en-US,en;q=0.9",
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
