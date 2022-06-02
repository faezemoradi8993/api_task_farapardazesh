import Loading from "components/elements/loading";
import React, { useEffect, useState } from "react";
import requsts from "api/station";
import Title from "components/container/station/title";

const Index = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [titleData, setTitleData] = useState();
  const [titleDataIsLoading, setTitleDataIsLoading] = useState(true);
  useEffect(() => {
    requsts?.report_no_login(setData, setIsLoading);
    requsts?.get_matchdata_no_login(setTitleData, setTitleDataIsLoading);
  }, []);

  if (isLoading || titleDataIsLoading) {
    return <Loading type="spokes" color="green" />;
  } else {
    return (
      <div className="flex w-full flex-col py-8 max-w-7xl mx-auto ">
        <Title data={titleData} />
        <table className="w-full align-middle mt-8">
          <tr className="text-white">
            <th className="bg-green-500/70 py-5 text-white text-center rounded-l-lg pl-5">
              alias
            </th>
            <th className="bg-green-500/70 py-5 text-white text-center">
              channel Name
            </th>
            <th className="bg-green-500/70 py-5 text-white text-center">
              time
            </th>
            <th className="bg-green-500/70 py-5 text-white text-center">uom</th>
            <th className="bg-green-500/70 py-5 text-white text-center rounded-r-lg pr-5">
              value
            </th>
          </tr>
          <tbody className="align-middle">
            {data?.data?.data?.[0].category_sensors.map((item) => (
              <tr>
                <td className="text-center py-2 pl-5">
                  {isLoading ? "data is loading ..." : item?.alias}
                </td>
                <td className="text-center py-2 ">
                  {isLoading ? "data is loading ..." : item?.channel_name}
                </td>
                <td className="text-center py-2 ">
                  {isLoading ? "data is loading ..." : item?.time}
                </td>
                <td className="text-center py-2 ">
                  {isLoading ? "data is loading ..." : item?.uom}
                </td>
                <td className="text-center py-2 pr-5 ">
                  {isLoading ? "data is loading ..." : item?.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Index;
