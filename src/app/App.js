import { BrowserRouter } from "react-router-dom";
import "../config/http/client/axiosinterceptor";
import Navigation from "../navigation";
import Layout from "../components/template";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
