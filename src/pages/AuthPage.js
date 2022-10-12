import React from "react";
import TopHeader from "../components/common/TopHeader";

const AuthPage = () => {
  const openAuthCodePage = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "285fe700-bb66-4503-b30b-7c4c396e90d0"; //본인것으로 변경
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <TopHeader title="사용자 인증"></TopHeader>
      <button onClick={openAuthCodePage}>사용자 인증</button>
    </div>
  );
};

export default AuthPage;
