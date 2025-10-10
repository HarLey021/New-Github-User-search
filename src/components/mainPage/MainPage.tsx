import { useState } from "react";
import SearchBox from "../searchBox/SearchBox";
import InfoBox from "../infoBox/InfoBox";

const MainPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userInfo, setUserInfo] = useState<User | undefined>();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={`w-full min-h-screen pt-[31px] pr-[24px] pl-[24px] tablet:py-[140px] tablet:px-[98px] desktop:px-[355px] desktop:py-[144px] desktop:flex justify-center
           ${darkMode ? "bg-background-dark" : "bg-background-light"}`}
      >
        <div className="w-full desktop:w-[730px]">
          <div className="w-full h-[39px] mb-[36px] flex justify-between items-center ">
            <h1
              className={`text-[26px] font-bold  
              ${darkMode ? "text-white" : "text-[#222731]"} `}
            >
              devfinder
            </h1>
            <div
              className={`flex h-[20px] justify-between items-center 
              ${darkMode ? "w-[86px]" : "w-[76px]"}`}
            >
              <button
                onClick={handleDarkMode}
                className={`text-[13px]  font-bold tracking-[2.5px] desktop:cursor-pointer 
                ${darkMode ? "text-white" : "text-grey"}`}
              >
                {darkMode ? "LIGHT" : "DARK"}
              </button>
              <img
                onClick={handleDarkMode}
                src={darkMode ? "icon-sun.svg" : "icon-moon.svg"}
                className="w-[20px] h-[20px] desktop:cursor-pointer"
              />
            </div>
          </div>
          <SearchBox
            darkMode={darkMode}
            setUserInfo={setUserInfo}
            userName={userName}
            setUserName={setUserName}
          />
          <InfoBox
            darkMode={darkMode}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
