import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { UserContext } from "../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `らいちゅー${val}`,
    image: "https://source.unsplash.com/FilM6ng7VGQ",
    email: "test@test.com",
    phone: "090-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onCLickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onCLickSwitch}>切り替え</SecondaryButton>
      <SuserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SuserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SuserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
