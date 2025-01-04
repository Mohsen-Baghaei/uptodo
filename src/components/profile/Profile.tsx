import { ReactElement } from "react";

import ProfileHeading from "./ProfileHeading";
import ProfileName from "./ProfileName";
import ProfilePassword from "./ProfilePassword";
import { useSelector } from "react-redux";
import { getUser } from "../../app/features/registration/usersSlice";
import ProfileAvatar from "./ProfileAvatar";

const Profile = (): ReactElement => {
  const user = useSelector(getUser);

  return (
    <>
      <ProfileHeading userName={user.user!} userAvatar={user.avatar!} />
      <section className="flex flex-col p-4 mx-auto justify-center items-start gap-2">
        <ProfileName />
        <ProfilePassword />
        <ProfileAvatar currentAvatar={user.avatar!} />
      </section>
    </>
  );
};

export default Profile;
