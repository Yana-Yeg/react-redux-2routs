import { Suspense } from "react";
import s from "./Filter.module.css";

const Filter = ({ option, handleChangeOption }) => {
  return (
    <div className={s.wrap}>
      <Suspense>
        <label htmlFor="" name="filter" className={s.title}>
          Choose :
        </label>
        <select
          name=""
          value={option}
          onChange={handleChangeOption}
          className={s.select}
        >
          <option value="default">-----</option>
          <option value="triangle">triangle</option>
          <option value="circle">circle</option>
        </select>
      </Suspense>
    </div>
  );
};

export default Filter;
