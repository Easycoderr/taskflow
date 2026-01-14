function Form({ children, setShowForm, showForm }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center z-90 fixed bg-gray-50/30 backdrop-blur-xs">
      <div className="w-full min-w-88 max-w-96 z-100  text-text dark:text-text-dark bg-bg dark:bg-bg-dark rounded-md shadow-md">
        {/* header */}
        <div className="grid  grid-cols-[1fr_auto_1fr] gap-0.5 pt-6 py-3 px-6 mb-6">
          <div className="col-span-3 space-y-2 mb-4">
            <h2 className="text-3xl text-primary text-center font-medium">
              Welcome to TaskFlow
            </h2>
            <p className="text-sm text-center px-5 text-text dark:text-text-dark leading-relaxed">
              Sign Up or Login bellow to manage your project, task, and
              productivity.
            </p>
          </div>
          <button
            onClick={() => setShowForm("login")}
            aria-label="login"
            className={`hover:text-primary ${
              showForm === "login" && "text-primary"
            }  p-2 rounded-sm transition-all duration-300 cursor-pointer`}
          >
            Login
          </button>
          <div className="min-h-8 w-[0.1rem] bg-bg-dark dark:bg-bg mx-auto"></div>
          <button
            onClick={() => setShowForm("signup")}
            aria-label="sign up"
            className={`hover:text-primary ${
              showForm === "signup" && "text-primary"
            }  p-2 rounded-sm transition-all duration-300 cursor-pointer`}
          >
            Sign up
          </button>
          <div
            className={`h-0.5 ${
              showForm === "signup" ? "col-start-2" : "col-start-1"
            } col-span-2 col w-full bg-linear-to-l from-transparent via-primary to-transparent`}
          ></div>
        </div>
        {/* form login or sign up */}
        {children}
      </div>
    </div>
  );
}

export default Form;
