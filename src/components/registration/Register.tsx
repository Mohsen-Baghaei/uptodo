import {
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
  FormEvent,
} from "react";
import { Link } from "react-router";

import { RiInformation2Fill } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { createUser } from "../../app/features/registration/usersSlice";

const USER_REGEX: RegExp = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = (): ReactElement => {
  const dispatch = useDispatch();

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");
  const [userFocus, setUserFocus] = useState<boolean>(false);
  const [validUser, setValidUser] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);
  const [validPwd, setValidPwd] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [matchPwdFocus, setMatchPwdFocus] = useState<boolean>(false);
  const [validMatchPwd, setValidMatchPwd] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatchPwd(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  const onMatchPwdChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMatchPwd(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v1: boolean = USER_REGEX.test(user);
    const v2: boolean = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    dispatch(createUser(user, pwd));
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
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-5" onSubmit={handleSubmit}>
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
                autoComplete="off"
                aria-describedby="usernote"
                ref={userRef}
                value={user}
                onChange={onUserChange}
                aria-invalid={validUser ? "false" : "true"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder="Enter your Username"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-500  sm:text-sm/6 ${
                  user && validUser
                    ? "outline outline-2 outline-offset-1 outline-green-500"
                    : user && !validUser
                    ? "outline outline-2 outline-offset-1 outline-red-500"
                    : "focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                }`}
              />
            </div>
            <p
              id="usernote"
              className={
                user && !validUser && userFocus
                  ? "bg-slate-400 text-gray-950 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex"
                  : "hidden"
              }
            >
              <RiInformation2Fill className="  mr-1 text-base  md:mt-1" />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
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
                aria-describedby="pwdnote"
                aria-invalid={validPwd ? "false" : "true"}
                value={pwd}
                onChange={onPasswordChange}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-500  sm:text-sm/6 ${
                  pwd && validPwd
                    ? "outline outline-2 outline-offset-1 outline-green-500"
                    : pwd && !validPwd
                    ? "outline outline-2 outline-offset-1 outline-red-500"
                    : "focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                }`}
              />
            </div>
            <p
              id="pwdnote"
              className={
                pwd && !validPwd && pwdFocus
                  ? "bg-slate-400 text-gray-950 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex flex-col"
                  : "hidden"
              }
            >
              <span className="flex">
                <RiInformation2Fill className="mr-1 text-base  md:mt-1" />8 to
                24 characters.
              </span>
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              <span>
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </span>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-xl/6 font-medium text-gray-200"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                aria-describedby="confirmnote"
                aria-invalid={validMatchPwd ? "false" : "true"}
                value={matchPwd}
                onChange={onMatchPwdChange}
                onFocus={() => setMatchPwdFocus(true)}
                onBlur={() => setMatchPwdFocus(false)}
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-500  sm:text-sm/6 ${
                  validMatchPwd && validPwd
                    ? "outline outline-2 outline-offset-1 outline-green-500"
                    : matchPwd && !validMatchPwd
                    ? "outline outline-2 outline-offset-1 outline-red-500"
                    : "focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                }`}
              />
            </div>
            <p
              id="confirmnote"
              className={
                matchPwd && !validMatchPwd && matchPwdFocus
                  ? "bg-slate-400 text-gray-950 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex"
                  : "hidden"
              }
            >
              <RiInformation2Fill className="  mr-1 text-base  md:mt-1" />
              Must match the first password input field.
            </p>
          </div>

          <div>
            <button
              type="submit"
              disabled={
                !validUser || !validPwd || !validMatchPwd ? true : false
              }
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xl/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-slate-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-xl/6 text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
