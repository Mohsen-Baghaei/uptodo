import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { FaChevronRight, FaUser } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeUserName } from "../../app/features/registration/usersSlice";

const USER_REGEX: RegExp = /^[A-z][A-z0-9-_]{3,23}$/;

const ProfileName = (): ReactElement => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const [user, setUser] = useState<string>("");
  const [userFocus, setUserFocus] = useState<boolean>(false);
  const [validUser, setValidUser] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
    setErrMsg("");
  }, [user]);

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handleEdit = () => {
    const v1: boolean = USER_REGEX.test(user);

    if (!v1) {
      setErrMsg("Invalid Entry");
      return;
    }
    dispatch(changeUserName(user));
    setUser("");
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
    setUser("");
    setUserFocus(false);
  };

  return (
    <article className="flex flex-col items-start justify-center w-full p-2 bg-slate-700 rounded-xl">
      <button
        className="flex justify-between items-center w-full px-2"
        onClick={() => setShow((prev) => !prev)}
      >
        <span className="text-xl md:text-2xl text-slate-50 flex justify-center items-center">
          <FaUser className="mr-2 size-5 shrink-0 " />
          Change Account Name
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
          id="userName"
          name="userName"
          type="text"
          required
          autoComplete="off"
          aria-describedby="usernote"
          value={user}
          onChange={onUserChange}
          aria-invalid={validUser ? "false" : "true"}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          placeholder="Enter your Username"
          className={`block w-full md:w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-500  sm:text-sm/6 ${
            user && validUser
              ? "outline outline-2 outline-offset-1 outline-green-500"
              : user && !validUser
              ? "outline outline-2 outline-offset-1 outline-red-500"
              : "focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
          }`}
        />
        <p
          id="usernote"
          className={
            user && !validUser && userFocus
              ? "bg-slate-400 text-gray-950 text-sm md:text-base rounded-xl p-1 -bottom-2 relative flex mb-2"
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
        <div className="flex items-center justify-center gap-2 w-full md:w-1/3 ">
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 bg-rose-600 text-lg p-1 font-bold text-slate-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleEdit}
            disabled={!validUser ? true : false}
            className="w-1/2 bg-teal-600 text-lg p-1 font-bold text-slate-200 rounded-lg disabled:bg-slate-500"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfileName;
