import { useRef } from "react";
import { HiX } from "react-icons/hi";

function Form({ children, setShowForm, showForm }) {
  const refEl = useRef();
  function handleShowForm(value) {
    // console.log(value);
    setShowForm(value);
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center z-90 fixed bg-gray-50/30 backdrop-blur-xs">
      <div
        ref={refEl}
        className="w-full min-w-88 max-w-md z-100  text-text dark:text-text-dark bg-bg dark:bg-bg-dark rounded-md shadow-md"
      >
        {/* header */}
        <div className="relative grid grid-cols-[1fr_auto_1fr] gap-0.5 pt-6 py-3 px-6 mb-6">
          <div className="col-span-3 space-y-2 mb-4">
            <button
              className="cursor-pointer group absolute top-2 right-2"
              onClick={() => handleShowForm(null)}
            >
              <HiX
                size={25}
                className="group-hover:text-red-300 group-hover:scale-105"
              />
            </button>
            <h2 className="text-3xl text-primary text-center font-medium">
              Welcome to TaskFlow
            </h2>
            <p className="text-sm text-center px-5 text-text dark:text-text-dark leading-relaxed">
              Sign Up or Login bellow to manage your project, task, and
              productivity.
            </p>
          </div>
          <Button onChangeShowForm={handleShowForm} showForm={showForm}>
            Login
          </Button>
          <div className="min-h-8 w-[0.1rem] mx-auto"></div>
          <Button onChangeShowForm={handleShowForm} showForm={showForm}>
            Sign up
          </Button>

          <div
            className={`h-0.5 ${
              showForm === "signup" ? "col-start-2" : "col-start-1"
            } col-span-2 col w-full bg-linear-to-l from-transparent via-primary to-transparent transition-all duration-300`}
          ></div>
        </div>
        {/* form login or sign up */}
        {children}
      </div>
    </div>
  );
}
function Button({ children, onChangeShowForm, showForm }) {
  const filtredChildren = children?.split(" ").join("").toLowerCase();
  return (
    <button
      onClick={() => onChangeShowForm(filtredChildren)}
      aria-label={children}
      className={`hover:text-primary ${
        showForm === filtredChildren && "text-primary"
      }  p-2 rounded-sm transition-all duration-300 cursor-pointer`}
    >
      {children}
    </button>
  );
}
export default Form;
