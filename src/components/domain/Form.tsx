import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Input, List } from '@/components';
import useDebounce from '@/hooks/useDebounce';
import useQuery from '@/hooks/useQuery';
import { EventTypes } from '@/types/types';

const Form = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState(-1);

  const { data, error, isError, fetch, remove } = useQuery(searchText);

  const changeSearchText = (event: EventTypes['changeInput']) => {
    const text = event.target.value;
    setSearchText(text);
    remove();
  };

  const debouncedFetch = useDebounce(400);

  useEffect(() => {
    if (searchText) debouncedFetch(() => fetch());
  }, [searchText]);

  useEffect(() => {
    if (isError) {
      alert(error);
      setSearchText('');
    }
  }, [isError]);

  return (
    <Section>
      <Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Title>

      <Input
        searchText={searchText}
        changeSearchText={changeSearchText}
        fetch={fetch}
        dataLength={data ? data.length : 0}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <List searchKeyword={searchText} searchData={data} selectedItem={selectedItem} />
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
