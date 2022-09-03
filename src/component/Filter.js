import React, { useState } from 'react';
import Select from 'react-select';
import { useMatch } from "react-router-dom";

const options = [
    { value: 'genre', label: 'Genre' },
    { value: 'all', label: 'All' },
    { value: 'war', label: 'War' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'action', label: 'Action' },
    { value: 'horror', label: 'Horror' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'drama', label: 'Drama' },
    { value: 'science fiction', label: 'Sci-Fi' },
];

export default function Filter({setActiveGenre}) {

  const [isSearchable] = useState(true);
  const match = useMatch("/favourites");
  const match1 = useMatch("/add");
  const match2 = useMatch("/moviedetail/:id/:name");
  
  return (
    <div className="w-11/12 min-w-[750px] font-semibold inline-flex mt-28 px-8">
      {(match?.pathname || match1?.pathname || match2?.pathname) ? "" : <Select
        className="w-3/12"
        onChange={(selected)=> setActiveGenre(selected.value)}
        options={options}
        isSearchable={isSearchable}
        defaultValue
        isOptionDisabled={(option) => option.value === 'genre'}
      />}
    </div>
  );
}