import {Helmet} from "react-helmet";
import './App.css'
import PortfolioContainer from './PortfolioContainer/PortfolioContaner';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lauren's Portfolio</title>
      </Helmet>
      <PortfolioContainer/>
    </div>
  );
}

export default App;
