import React from "react";
import useInputChange from "../hook/useInputs";

function SearchUser() {
  const [{ sid }, onChange] = useInputChange({ sid: '' });

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" sid={sid} onChange={onChange} placeholder="학번으로 검색" />
      <button>검색</button>
    </form>
  );
}

export default SearchUser;
