import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import ProductComponent from "./Components/ProductComponent";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Header} />
        <Route path="/productList" Component={ProductsList} />
        <Route path="/productcomponent" Component={ProductComponent} />
        <Route path="/productdetail/:productid" Component={ProductDetails} />
      </Routes>
    </div>
  );
}

export default App;
