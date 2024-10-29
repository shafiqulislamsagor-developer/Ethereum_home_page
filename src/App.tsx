import EthereumPriceTable from "./component/EthereumPriceTable";
import EthereumText from "./component/EthereumText";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <EthereumPriceTable />
      <EthereumText />
      <Footer />
    </>
  );
}

export default App;
