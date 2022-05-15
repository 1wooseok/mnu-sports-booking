import React from "react";
import useInputChange from "../hook/useInputs";

function SearchUser() {
  const [form, handleChange] = useInputChange({ sid: '' });
  const { sid } = form;

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" name="sid" value={sid} onChange={handleChange} placeholder="학번으로 검색" />
      <button>검색</button>
    </form>
  );
}

export default SearchUser;
