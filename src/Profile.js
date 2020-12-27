import React from "react";

const profileData = {
  velopert: {
    name: "김민준",
    desc: "Frontend Engineer ",
  },
  homer: {
    name: "호머심슨",
    desc: "심슨가곡 아빠 캐릭터 ",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) return <div>존재하지 않는 사용자입니다. </div>;

  return (
    <div>
      <h3>{username}</h3>
      <p>{profile.desc}</p>
    </div>
  );
}

export default Profile;
