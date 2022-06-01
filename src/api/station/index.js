import client from "config/http/client";
import axios from "axios";

const stationApi = {
  report_no_login: () => {
    const data = {
      command: "reportNoLogin",
      val: {},
    };
    axios.post("/", data).then((response) => {
      console.log(response);
      return response
    });
  
  },
  get_matchdata_no_login: () => {
    var bodyFormData = new FormData();
    bodyFormData.append("command", "noLoginStationLogo");
    client({
      method: "post",
      url: "/",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {})
      .catch((err) => {});
  },
};

export default stationApi;
