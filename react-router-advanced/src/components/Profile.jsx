import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Routes>
        {/* Nested route for ProfileDetails */}
        <Route path="details" element={<ProfileDetails />} />
        {/* Nested route for ProfileSettings */}
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
