import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { getSearchData } from '@/apis/api';
import { Input, List } from '@/components';
import useDebounce from '@/hooks/useDebounce';
import { EventTypes } from '@/types/types';

const Form = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string[]>([]);

  // useDebounce 를 사용한 예시입니다. 로컬 캐싱부분이 생략된 단계라 수정하시면 됩니다. (14-33)
  const debouncedSearchText = useDebounce(searchText, 400);

  useEffect(() => {
    if (debouncedSearchText) {
      getSearchData(debouncedSearchText)
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch((err) => {
          console.error('Error : ', err);
        });
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchText]);

  const changeSearchText = (event: EventTypes['changeInput']) => {
    const text = event.target.value;
    setSearchText(text);
  };

  // 커밋 때문에 임시로 넣어둠 작업 하실 때 지우시면 됩니다.
  console.log(searchResult);

  return (
    <Section>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>

      <Input searchText={searchText} changeSearchText={changeSearchText} />
      <List />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  transform: translateY(-70%);
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;

export default Form;
