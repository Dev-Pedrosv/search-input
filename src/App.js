/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { SearchInput } from "./components/search-input";
import { List } from "./components/list";
import * as C from "./style";

function App() {
  const list = [
    {
      id: 1,
      language: "HTML",
    },
    {
      id: 2,
      language: "CSS",
    },
    {
      id: 3,
      language: "Javascript",
    },
    {
      id: 4,
      language: "Reactjs",
    },
    {
      id: 5,
      language: "React Native",
    },
    {
      id: 6,
      language: "Nodejs",
    },
    {
      id: 7,
      language: "Typescript",
    },
    {
      id: 8,
      language: "Firebase",
    },
    {
      id: 9,
      language: "Styled Components",
    },
    {
      id: 10,
      language: "Material UI",
    },
  ];
  const [filterList, setFilterList] = useState(list);
  const [filter, setFilter] = useState("");

  const filterSearch = () => {
    const newList = list.filter((value) =>
      value.language.toLowerCase().includes(filter.toLowerCase())
    );
    setFilterList(newList);
  };

  useEffect(() => {
    filterSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <C.Screen>
      <C.Container>
        <h1>Search Input</h1>
        <SearchInput onChange={(e) => setFilter(e.target.value)} />
        <C.Spacer />
        {filterList.map((value) => (
          <List key={value.id} item={value.language} />
        ))}
      </C.Container>
    </C.Screen>
  );
}

export default App;
