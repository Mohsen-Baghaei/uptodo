import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { Link } from "react-router";

const Login = (): ReactElement => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");

  const [pwd, setPwd] = useState<string>("");

  const [errMsg, setErrMsg] = useState<string>("");

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-1 flex-col justify-start px-6 py-10 lg:px-8 bg-slate-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <p
          className={
            errMsg
              ? "bg-slate-300 text-red-500 text-sm md:text-base rounded-xl p-3 relative flex outline outline-2 outline-offset-1 outline-red-500"
              : "hidden"
          }
          ref={errRef}
        >
          {errMsg}
        </p>
        <h2 className="mt-10 text-5xl/9 font-bold tracking-tight text-gray-200">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="userName"
              className="block text-xl/6 font-medium text-gray-200"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                required
                value={user}
                onChange={onUserChange}
                placeholder="Enter your Username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xl/6 font-medium text-gray-200"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={pwd}
                onChange={onPasswordChange}
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xl/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xl/6 text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
