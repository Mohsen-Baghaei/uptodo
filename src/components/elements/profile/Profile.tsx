import { ReactElement } from "react";

import ProfileHeading from "./ProfileHeading";
import ProfileName from "./ProfileName";
import ProfilePassword from "./ProfilePassword";

const Profile = (): ReactElement => {
  return (
    <>
      <ProfileHeading />
      <section className="flex flex-col p-4 mx-auto justify-center items-start gap-2">
        <ProfileName />
        <ProfilePassword />
      </section>
    </>
  );
};

export default Profile;
