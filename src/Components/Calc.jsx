import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const Calc = ({ toCount }) => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const dispatch = useDispatch();
  const inputIdA = useRef(nanoid());
  const inputIdB = useRef(nanoid());
  const inputIdC = useRef(nanoid());

  // const countRes = useState((state) => state?.countResult);

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

  // useEffect(() => {
  //   const values = {
  //     valueA,
  //     valueB,
  //     valueC,
  //   };
  //   dispatch(toCount(values));
  // }, [dispatch, countRes]);

  return (
    <>
      <h1>Enter values:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          a =
          <input
            type="text"
            name="valueA"
            value={valueA}
            onChange={handleChange}
            id={inputIdA}
          />
        </label>
        <label htmlFor={inputIdB.current}>
          b =
          <input
            type="text"
            name="valueB"
            value={valueB}
            onChange={handleChange}
            id={inputIdB}
          />
        </label>
        <label htmlFor={inputIdC.current}>
          c =
          <input
            type="text"
            name="valueC"
            value={valueC}
            onChange={handleChange}
            id={inputIdC}
          />
        </label>
        <button type="submit" disabled={!valueA || !valueB || !valueC}>
          Count
        </button>
      </form>
    </>
  );
};

export default Calc;
