import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import triangle from "../images/trian.png";
import circle from "../images/circle.webp";
import s from "./Calc.module.css";

const Calc = ({ toCount, flag }) => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const dispatch = useDispatch();
  const inputIdA = useRef(nanoid());
  const inputIdB = useRef(nanoid());
  const inputIdC = useRef(nanoid());

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "valueA":
        setValueA(value);
        break;
      case "valueB":
        setValueB(value);
        break;
      case "valueC":
        setValueC(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      valueA,
      valueB,
      valueC,
    };
    dispatch(toCount(values));
    // reset();
  };

  const reset = () => {
    setValueA("");
    setValueB("");
    setValueC("");
  };

  return (
    <>
      <h1>Enter values:</h1>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit}>
          {/* {arr.map((item) => (
          <CalcItem item={item} handleChange={handleChange} />
        ))} */}

          <label htmlFor={inputIdA.current} className={s.label}>
            {flag === "triangle" ? "a" : "radius"} =
            <input
              type="text"
              name="valueA"
              value={valueA}
              onChange={handleChange}
              id={inputIdA}
              className={s.input}
            />
            units
          </label>
          {flag === "triangle" && (
            <>
              <label htmlFor={inputIdB.current} className={s.label}>
                b =
                <input
                  type="text"
                  name="valueB"
                  value={valueB}
                  onChange={handleChange}
                  id={inputIdB}
                  className={s.input}
                />
                units
              </label>
              <label htmlFor={inputIdC.current} className={s.label}>
                c =
                <input
                  type="text"
                  name="valueC"
                  value={valueC}
                  onChange={handleChange}
                  id={inputIdC}
                  className={s.input}
                />
                units
              </label>
            </>
          )}

          <button type="submit" className={s.btn}>
            Count
          </button>
        </form>
        {flag === "triangle" ? <img src={triangle} /> : <img src={circle} />}
      </div>
    </>
  );
};

export default Calc;
