import client from "config/http/client";
// import axios from "axios";

const stationApi = {
  report_no_login: async (setData, setIsLoading) => {
    const data = {
      command: "reportNoLogin",
      val: {},
    };
    const response = await client.post("/", data);
    setData(response);
    setIsLoading(false);
  },
  get_matchdata_no_login: async (setData, setIsLoading) => {
    var bodyFormData = new FormData();
    bodyFormData.append("command", "noLoginStationLogo");
    const response = await client({
      method: "post",
      url: "/",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    setData(response);
    setIsLoading(false);
    return response;
  },
};

export default stationApi;
