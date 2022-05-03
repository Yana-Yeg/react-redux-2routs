import Calc from "./Components/Calc";
import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCircleDiameter, getTriangleSurface } from "./redux/countOperations";

export default function App() {
  const dispatch = useDispatch();
  const countRes = useState((state) => state.countResult);

  useEffect(() => {
    alert("hfgjhkjlk;");
  }, [countRes]);

  return (
    <div>
      <h2>Choose</h2>
      <Calc toCount={getTriangleSurface} />
      {/* <Calc toCount={getCircleDiameter} /> */}

      <input type="text" name="result" value={countRes} />
    </div>
  );
}
