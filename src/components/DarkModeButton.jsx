import { HiMoon, HiSun } from "react-icons/hi";

function DarkModeButton({ handleDarkModeToggle, isDarkMode, layout }) {
  return (
    <button
      type="button"
      role="switch"
      aria-label="Toggle dark mode"
      aria-controls="page-content"
      onClick={handleDarkModeToggle}
      className="cursor-pointer mr-2 md:mr-10"
      title={
        isDarkMode
          ? "click for switch to light mode"
          : "click for switch to dark mode"
      }
    >
      {isDarkMode ? (
        <HiSun
          size={25}
          className={`${layout === "dashboard" ? "text-gray-900 hover:text-yellow-500" : "text-gray-50 hover:text-yellow-300"} transition-all duration-300`}
        />
      ) : (
        <HiMoon
          size={25}
          className="text-gray-800 hover:text-yellow-500 transition-all duration-300"
        />
      )}
    </button>
  );
}

export default DarkModeButton;
