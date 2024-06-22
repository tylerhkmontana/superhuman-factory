import { useState, useEffect } from "react";

export default function CustomDataList({ options, name, selectHandler }) {
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    function clickHandler(e) {
      const clicked = e.target.id;
      if (clicked !== "options" && clicked !== "searchBar")
        setIsSearching(false);
    }
    window.addEventListener("click", (e) => clickHandler(e));

    return window.removeEventListener("click", clickHandler);
  });

  const inputHandler = (e) => {
    setIsSearching(true);
    const input = e.target.value;
    setKeyword(input);
  };

  const selectOption = (opt) => {
    setIsSearching(false);
    setKeyword(opt);
    selectHandler(opt);
  };
  return (
    <div className="relative">
      <input
        className="w-full"
        id="searchBar"
        onChange={(e) => inputHandler(e)}
        name={name}
        value={keyword}
        autoComplete="off"
        onFocus={() => setIsSearching(true)}
        required
      />
      <div
        id="options"
        className="absolute w-full max-h-24 top-8 overflow-y-auto bg-white flex flex-col gap-2"
      >
        {options.map((opt, i) => {
          if (opt.includes(keyword) && keyword !== "" && isSearching)
            return (
              <span
                className="px-2 hover:bg-gray-700 hover:text-white"
                key={i}
                onClick={() => selectOption(opt)}
              >
                {opt}
              </span>
            );
        })}
      </div>
    </div>
  );
}
