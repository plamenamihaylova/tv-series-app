import { Routes, Route } from "react-router-dom";
import Series from "../containers/Series/Series";
import SingleSeries from "../containers/SingleSeries/SingleSeries";

function Main(props) {
  return (
    <Routes>
      <Route path="/" Component={Series}></Route>
      <Route path="/series/:id" Component={SingleSeries}></Route>
    </Routes>
  );
}

export default Main;
