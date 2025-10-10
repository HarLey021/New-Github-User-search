type DarkMode = {
  darkMode: boolean;
};

type searchBoxProps = {
  darkMode: boolean;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

interface User {
  avatar: string;
  name: string;
  login: string;
  joined: string;
  bio: string;
  repos: Number;
  followers: Number;
  following: Number;
  location: string;
  github: string;
  twitter: string;
  company: string;
}

type InfoProps = {
  darkMode: boolean;
  userInfo: user;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
};
