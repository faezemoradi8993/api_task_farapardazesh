import client from "config/http/client";

const stationApi = {
  report_no_login: () => {
    var bodyFormData = new FormData();
    bodyFormData.append("command", "reportNoLogin");
    bodyFormData.append("val", "{}");
    client({
      method: "post",
      url: "",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  get_matchdata_no_login: () => {
    var bodyFormData = new FormData();
    bodyFormData.append("command", "noLoginStationLogo");
    client({
      method: "post",
      url: "",
      data: bodyFormData,
      headers: {
        // "Content-Type":
        //   "multipart/form-data; boundary=<calculated when request is sent>",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};

export default stationApi;
