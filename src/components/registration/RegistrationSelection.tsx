import { ReactElement } from "react";
import { Link } from "react-router";

const RegistrationSelection = (): ReactElement => {
  return (
    <div className="flex w-4xl md:w-4/5 min-h-screen flex-1 flex-col justify-between px-6 py-10 lg:px-8 mx-auto bg-slate-900">
      <div className="sm:mx-auto w-full">
        <h2 className="mt-10 text-4xl md:text-7xl font-bold text-center text-gray-200 ">
          Welcome to UpTodo
        </h2>
        <div>
          <p className=" mt-5 text-center text-xl/6 md:text-xl text-gray-300 px-6 ">
            Please login to your account or create new account to continue
          </p>
        </div>
      </div>

      <div className=" w-4xl sm:mx-auto sm:w-full sm:max-w-sm mt-auto ">
        <div className="space-y-8">
          <div>
            <Link
              to="/login"
              className="flex w-full justify-center rounded-xl bg-blue-600 px-3 py-1.5 text-xl/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              className=" mt-5 flex w-full justify-center 
              border-2 border-solid border-blue-600
             rounded-xl px-3 py-1.5 text-xl/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSelection;
