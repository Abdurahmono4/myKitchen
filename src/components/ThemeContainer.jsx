import { FaSun, FaMoon } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";
const colors = ["1E0342", "#F0EBE3", "#135D66"];

const themes = { winter: "winter", dracula: "dracula" };

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function ThemeContainer() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  console.log(theme);

  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    localStorage.setItem("mode", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
    window.localStorage.setItem("mode", theme);
    window.localStorage.setItem("theme", theme);

    // Apply background style for dracula theme
    if (theme === themes.dracula) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.67)";
      // document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = ""; // Reset for winter theme
    }
  }, [theme]);

  const { color } = useContext(GlobalContext);
  const { dispatch } = useContext(GlobalContext);

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
    setTheme(color);
  };
  return (
    <div className="mb-10 py-3" key={color} onClick={() => changeColor}>
      <div className="align-element flex justify-between items-center">
        {/*colors*/}
        <div className=" flex flex-row gap-2 cursor-pointer">
          {colors.map((color) => {
            return (
              <div
                key={color}
                className="w-10 h-10 rounded-full bg-gray-200 rounded-full flex"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        {/*themes*/}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onClick={handleClick}
              defaultChecked={theme == "winter" ? false : true}
            />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-7 h-7 " />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-7 h-7 " />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThemeContainer;
