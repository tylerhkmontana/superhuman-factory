import { useState, useEffect } from "react";

export default function CustomDataList({ options, name, value, setValue }) {
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
    setValue(input);
  };

  const selectOption = (opt) => {
    setIsSearching(false);
    setValue(opt);
  };

  return (
    <div className="relative">
      <input
        className="w-full"
        id="searchBar"
        onChange={(e) => inputHandler(e)}
        name={name}
        value={value}
        autoComplete="off"
        onFocus={() => setIsSearching(true)}
        required
      />
      <div
        id="options"
        className="absolute w-full max-h-24 top-8 overflow-y-auto bg-white flex flex-col gap-2"
      >
        {options.map((opt, i) => {
          if (opt.includes(value) && value !== "" && isSearching)
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
