import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "らいちゅー",
  image: "https://source.unsplash.com/FilM6ng7VGQ",
  email: "test@test.com",
  phone: "090-0000-0000",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ボタン</PrimaryButton>
        <SecondaryButton>ボタン</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
