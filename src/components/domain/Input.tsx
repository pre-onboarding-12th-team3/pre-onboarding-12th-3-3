import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { styled } from 'styled-components';

import { a11yHidden } from '@/styles/globalStyle';
import { EventTypes } from '@/types/types';

interface Props {
  searchText: string;
  changeSearchText: (event: EventTypes['changeInput']) => void;
  fetch: () => void;
  dataLength: number;
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}

const Input = ({ searchText, changeSearchText, fetch, dataLength, selectedItem, setSelectedItem }: Props) => {
  const preventReload = (event: EventTypes['form']) => {
    event.preventDefault();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    selectKeyword(e, dataLength);
  };

  const selectKeyword = (e: React.KeyboardEvent, dataLength: number) => {
    const { key } = e;
    if (key !== 'ArrowUp' && key !== 'ArrowDown') return;
    e.preventDefault();
    if (key === 'ArrowUp' && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (key === 'ArrowDown' && selectedItem < dataLength - 1) {
      setSelectedItem((prev) => prev + 1);
    }
  };

  return (
    <Form onSubmit={preventReload}>
      <fieldset>
        <Legend>검색폼</Legend>
        <Label htmlFor="searchInput">검색</Label>
        <SearchInput
          id="searchInput"
          type="search"
          placeholder="질환명을 입력해 주세요."
          value={searchText}
          onChange={(e) => {
            changeSearchText(e);
            setSelectedItem(-1);
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => setSelectedItem(-1)}
        />

        <SearchBtn aria-label="검색" type="submit" onClick={fetch}>
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
