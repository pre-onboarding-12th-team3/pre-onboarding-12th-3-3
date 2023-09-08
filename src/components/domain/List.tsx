import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { SearchData } from '@/types/types';

interface Props {
  searchKeyword: string;
  searchData: SearchData[] | null;
  selectedItem: number;
}

const List = ({ searchKeyword, searchData, selectedItem }: Props) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const highlightSearchKeyword = (resultText: string) => {
    const splitResultText = resultText.split(searchKeyword);
    return (
      <p>
        {splitResultText[0]}
        <span>{searchKeyword}</span>
        {splitResultText[1]}
      </p>
    );
  };

  useEffect(() => {
    const selected = scrollRef.current?.querySelector('.selected');
    selected && selected.scrollIntoView({ block: 'nearest' });
  }, [selectedItem]);

  return (
    <Wrapper>
      <RecommendSpan>추천 검색어</RecommendSpan>
      {searchData ? (
        <Ul ref={scrollRef}>
          {searchData.map((data, idx) => (
            <Li key={data.sickCd} className={selectedItem === idx ? 'selected' : ''} selected={selectedItem === idx}>
              <BiSearchAlt2 aria-hidden />
              {highlightSearchKeyword(data.sickNm)}
            </Li>
          ))}
        </Ul>
      ) : (
        <span>검색어 없음</span>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 105%;
  left: 0;
  width: 30rem;
  border-radius: 1.5rem;
  background-color: #fff;
  padding: 1.5rem 1rem;
  max-height: 25rem;
`;

const RecommendSpan = styled.span`
  font-size: 0.8rem;
  display: block;
  margin-bottom: 1rem;
  color: var(--Primary);
  font-weight: 600;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  max-height: 14rem;
  overflow-y: auto;
`;

const Li = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#eee' : '')};
  > svg {
    margin-right: 0.5rem;
  }

  &:focus,
  &:hover {
    background-color: #eee;
    outline: none;
  }

  > p > span {
    color: var(--Primary);
    font-weight: 700;
  }
`;

export default List;
