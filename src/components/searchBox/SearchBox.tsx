import { useState } from "react";

const SearchBox: React.FC<searchBoxProps> = ({
  darkMode,
  userName,
  setUserName,
  setUserInfo,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const [showError, setShowError] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error(`User not found (${response.status})`);
      }

      const data: User = await response.json();
      setUserInfo(data);
      setShowError(false);
      setUserName("");
    } catch (error) {
      setShowError(true);
      setUserName("");
      console.error((error as Error).message);
    }
  };

  return (
    <>
      <form
        className="w-full h-[60px] mb-[16px] relative tablet:h-[69px] tablet:mb-[24px] "
        onSubmit={handleSearch}
      >
        <input
          className={`w-full h-full rounded-[15px] p-[7px] pl-[45px] text-[13px] font-normal placeholder:text-[13px] placeholder:font-normal tablet:p-[10px] tablet:pl-[80px] tablet:text-[18px] tablet:placeholder:text-[18px] desktop:cursor-pointer
             ${
               darkMode
                 ? "bg-content-dark text-white placeholder:text-white"
                 : "bg-content-light text-[#222731] placeholder:text-grey"
             }`}
          name="userName"
          value={userName}
          onChange={handleChange}
          placeholder={!showError ? "Search GitHub username…" : ""}
        />

        <img
          src="icon-search.svg"
          className="w-[20px] h-[20px] absolute top-[20px] left-[16px] tablet:w-[24px] tablet:h-[24px] tablet:top-[23px] tablet:left-[32px] "
        />
        {showError ? (
          <h6 className="text-[15px] font-bold text-[#F74646] absolute top-[19px] right-[100px] tablet:top-[24px] tablet:right-[140px] desktop:top-[24px] desktop:right-[140px]">
            No results
          </h6>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="w-[84px] h-[46px] bg-blue rounded-[10px] text-white text-[14px] font-bold absolute right-[7px] top-[7px] tablet:w-[106px] tablet:h-[50px] tablet:top-[10px] tablet:right-[10px] tablet:text-[16px] desktop:cursor-pointer"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBox;
