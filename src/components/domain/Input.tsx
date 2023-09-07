import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

import { a11yHidden } from '@/styles/globalStyle';

interface Props {
  searchText: string;
  changeSearchText: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ searchText, changeSearchText }: Props) => {
  return (
    <Form>
      <fieldset>
        <Legend>검색폼</Legend>
        <Label htmlFor="searchInput">검색</Label>
        <SearchInput
          id="searchInput"
          type="search"
          placeholder="질환명을 입력해 주세요."
          value={searchText}
          onChange={changeSearchText}
        />

        <SearchBtn aria-label="검색" type="submit">
          <BiSearchAlt2 aria-hidden />
        </SearchBtn>
      </fieldset>
    </Form>
  );
};

const Form = styled.form`
  position: relative;
`;

const Legend = styled.legend`
  ${a11yHidden}
`;

const Label = styled.label`
  ${a11yHidden}
`;

const SearchInput = styled.input`
  appearance: none;
  width: 30rem;
  padding: 1.5rem 4rem 1.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 4rem;
  border: none;

  &::placeholder {
    color: #b3b3b3;
  }
  &:focus {
    outline: 1px solid var(--Primary);
  }
`;

const SearchBtn = styled.button`
  background-color: var(--Primary);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  transition: background-color 0.2s ease-in-out;
  & > svg {
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
  }

  &:focus,
  &:hover {
    background-color: var(--DarkenPrimary);
  }
`;

export default Input;
