import Calc from "./Components/Calc";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCircleDiameter, getTriangleSurface } from "./redux/countOperations";
import { getCountRes, getIsLoading } from "./redux/countSelector";
import Filter from "./Components/Filter";

export default function App() {
  const CountResult = useSelector(getCountRes);
  const loading = useSelector(getIsLoading);
  const [option, setOption] = useState("");

  const handleChangeOption = (e) => {
    setOption(e.target.value);
  };

  // let s = setTimeout(() => {
  //    return CountResult
  // }, 2000);

  return (
    <div>
      {loading && <h1 style={{ color: "green" }}>"Processing..."</h1>}

      <Filter option={option} handleChangeOption={handleChangeOption} />
      {option === "triangle" && (
        <>
          <Calc toCount={getTriangleSurface} flag={"triangle"} />
          <p>
            area of ​​a triangle = <span>{CountResult}</span> units squared
          </p>
        </>
      )}
      {option === "circle" && (
        <>
          <Calc toCount={getCircleDiameter} flag={"circle"} />
          <p>
            circle diameter = <span>{CountResult} </span>
            units
          </p>
        </>
      )}
    </div>
  );
}
