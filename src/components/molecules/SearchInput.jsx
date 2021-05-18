import styled from "styled-components";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: <center></center>;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
