import { BiSearchAlt2 } from '@react-icons/all-files/bi/BiSearchAlt2';
import { useState } from 'react';
import { styled } from 'styled-components';

const List = () => {
  const [isResults, setIsResults] = useState(false);

  console.log(setIsResults); // 커밋 때문에 임시로 넣어둠 작업 하실 때 지우시면 됩니다.

  return (
    <Wrapper>
      <RecommendSpan>추천 검색어</RecommendSpan>
      {isResults ? (
        <Ul>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
          <Li>
            <BiSearchAlt2 aria-hidden />
            <p>
              달리 분류된 질환에서의 <span>담낭</span>, 담도 및 췌장의 장애
            </p>
          </Li>
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

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
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
