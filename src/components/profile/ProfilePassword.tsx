import { ReactElement, useState, useEffect, ChangeEvent } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changePassword } from "../../app/features/registration/usersSlice";

const PWD_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ProfilePassword = (): ReactElement => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const [pwd, setPwd] = useState<string>("");
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);
  const [validPwd, setValidPwd] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setErrMsg("");
  }, [pwd]);

  const onPwdChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  const handleEdit = () => {
    const v1: boolean = PWD_REGEX.test(pwd);

    if (!v1) {
      setErrMsg("Invalid Entry");
      return;
    }
    dispatch(changePassword(pwd));
    setPwd("");
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
    setPwd("");
    setPwdFocus(false);
  };

  return (
    <article className="flex flex-col items-start justify-center w-full p-2 bg-slate-700 rounded-xl">
      <button
        className="flex justify-between items-center w-full px-2"
        onClick={() => setShow((prev) => !prev)}
      >
        <span className="text-xl md:text-2xl text-slate-50 flex justify-center items-center">
          <FaKey className="mr-2 size-5 shrink-0 " />
          Change Account Password
        </span>{" "}
        <FaChevronRight />
      </button>
      <div
        className={` mt-8 flex-col justify-center gap-2 items-center w-full ${
          show ? "flex" : "hidden"
        }`}
      >
        <p
          className={
            errMsg
              ? "bg-slate-300 text-red-500 text-sm md:text-base rounded-xl p-3 relative flex outline outline-2 outline-offset-1 outline-red-500 mb-2 w-full md:w-1/3"
              : "hidden"
          }
        >
          {errMsg}
        </p>
        <input
          id="password"
          name="password"
          type="password"
          required
          aria-describedby="pwdnote"
          aria-invalid={validPwd ? "false" : "true"}
          value={pwd}
          onChange={onPwdChange}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          className={`block w-full md:w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-500  sm:text-sm/6 ${
            pwd && validPwd
              ? "outline outline-2 outline-offset-1 outline-green-500"
              : pwd && !validPwd
              ? "outline outline-2 outline-offset-1 outline-red-500"
              : "focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
          }`}
        />
        <p
          id="pwdnote"
          className={
            pwd && !validPwd && pwdFocus
              ? "bg-slate-400 text-gray-950 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex flex-col mb-2"
              : "hidden"
          }
        >
          <span className="flex">
            <RiInformation2Fill className="mr-1 text-base  md:mt-1" />8 to 24
            characters.
          </span>
          Must include uppercase and lowercase letters, a number and a special
          character.
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

        <div className="flex items-center justify-center gap-2 w-full md:w-1/3 ">
          <button
            onClick={handleCancel}
            type="button"
            className="w-1/2 bg-rose-600 text-lg p-1 font-bold text-slate-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!validPwd ? true : false}
            onClick={handleEdit}
            className="w-1/2 bg-teal-600 text-lg p-1 font-bold text-slate-200 rounded-lg disabled:bg-slate-500"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfilePassword;
