
const Index = ({data}) => {
    return (
      <header className=" w-full h-32 bg-blue-50 shadow-lg  flex items-center px-5">
        <div className="w-full flex items-center justify-start">
          <img
            className=" mr-3 w-8 h-auto"
            src={`data:image/png;base64,${data?.data}`}
            alt={data?.headers?.station_name}
          />
          <h1 className="font-bold">
            { data?.headers?.station_name}
          </h1>
        </div>
      </header>
    );
  }

export default Index;
