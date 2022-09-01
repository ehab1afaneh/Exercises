import axios from "axios";

export const callAPI = async (method, url, data) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return { status: "error", error: e };
  }
};
