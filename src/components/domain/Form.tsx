import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Input, List } from '@/components';
import useQuery from '@/hooks/useQuery';
import { EventTypes } from '@/types/types';

const Form = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { data, error, isError, fetch } = useQuery(searchText);

  const changeSearchText = (event: EventTypes['changeInput']) => {
    const text = event.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    // 디바운스 필요
    if (searchText) fetch();
  }, [searchText]);

  useEffect(() => {
    if (isError) alert(error);
  }, [isError]);

  return (
    <Section>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>

      <Input searchText={searchText} changeSearchText={changeSearchText} />
      <List searchKeyword={searchText} searchData={data} />
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
