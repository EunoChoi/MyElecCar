import { useState } from "react";
import AddressPopUp from "components/SignUp/AddressPopUp";
import SignUpCodePopUp from "components/SignUp/SignUpCodePopUp";

import logo from "assets/img/MyElecCar logo.png";

const SignUpPage = () => {
  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const [signUpCodePopUpOpen, setSignUpCodePopUpOpen] = useState(false);
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddressPopUpOpen(true);
  };
  const signUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setSignUpCodePopUpOpen(true);
  };
  return (
    <>
      {addressPopUpOpen && (
        <AddressPopUp setAddressPopUpOpen={setAddressPopUpOpen} />
      )}
      {signUpCodePopUpOpen && (
        <SignUpCodePopUp setSignUpCodePopUpOpen={setSignUpCodePopUpOpen} />
      )}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: 180 }} src={logo} alt="서비스 로고" />
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">이메일</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">닉네임</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
                id="nickname"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력해주세요"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">비밀번호</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">비밀번호 재확인</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">나이</label>
              <select
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 10px 10px 0px",
                }}
              >
                <option value={2}>20대</option>
                <option value={3}>30대</option>
                <option value={4}>40대</option>
                <option value={5}>50대</option>
                <option value={6}>60대 이상</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">주소</label>
              <div style={{ display: "flex", width: "100%" }}>
                <input
                  style={{
                    width: "150%",
                    height: "40px",
                    backgroundColor: "#F6F6F6",
                    paddingLeft: "10px",
                    boxSizing: "border-box",
                    margin: "10px 10px 10px 0px",
                  }}
                  id="address"
                  type="address"
                  name="address"
                  placeholder="주소"
                />
                <button
                  onClick={popUpOpen}
                  style={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "#303030",
                    color: "white",
                    margin: "10px 0",
                  }}
                >
                  주소 검색
                </button>
              </div>
            </div>
            <button
              onClick={signUp}
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#0A84FF",
                color: "white",
                margin: "10px 0",
              }}
              type="submit"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;