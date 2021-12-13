import { Fragment } from "react/cjs/react.production.min";
import s from "./Filter.module.css";

const Filter = ({ filter, onChangeFilter }) => (
  <Fragment>
    <label className={s.filterLabel}>Find contacts by name</label>
    <input className={s.filterInput} value={filter} onChange={onChangeFilter} />
  </Fragment>
);

export default Filter;
