import { React, useState } from "react";

import classes from "./List.module.css";

const List = (props) => {
  const [searchData, setSearchData] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const filteredData = props.list.filter((item) =>
    item.title.toUpperCase().includes(searchData.toUpperCase())
  );

  const data = props.list;

  const deleteHandler = (event) => {
    event.preventDefault();
    props.delete(event.target.parentNode.firstChild.textContent);
    console.log(event.target.parentNode.firstChild.textContent);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    setSearchData(e.target.value);
    // filteredData.push(data.filter((item) => item.title.includes(searchData)));
    // console.log(filteredData);
  };

  return (
    <div>
      <ul className={classes.alllist}>
        {!isSearching &&
          data.map((item) => (
            <li key={item.key} className={classes.eachlist}>
              <p className={classes.listkey}>{item.key}</p>
              <h3 className={classes.listel}>{item.title}</h3>
              <p className={classes.listel}>{item.date}</p>
              <p className={classes.listel}>{item.time}</p>
              <p className={classes.listel}>{item.description}</p>
              <button className={classes.deletebutton} onClick={deleteHandler}>
                Delete
              </button>
            </li>
          ))}
        {isSearching &&
          filteredData.map((item) => (
            <li key={item.key} className={classes.eachlist}>
              <p className={classes.listkey}>{item.key}</p>
              <h3 className={classes.listel}>{item.title}</h3>
              <p className={classes.listel}>{item.date}</p>
              <p className={classes.listel}>{item.time}</p>
              <p className={classes.listel}>{item.description}</p>
              <button className={classes.deletebutton} onClick={deleteHandler}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      <div className={classes.searchzone}>
        <input
          type="search"
          placeholder="search"
          className={classes.searchbar}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
};

export default List;
