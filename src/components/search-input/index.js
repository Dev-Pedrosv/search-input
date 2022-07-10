import * as C from "./style";

export function SearchInput({ onChange }) {
  return (
    <C.Search>
      <input onChange={onChange} placeholder="Search" type="text" />
      <span>🔍</span>
    </C.Search>
  );
}
