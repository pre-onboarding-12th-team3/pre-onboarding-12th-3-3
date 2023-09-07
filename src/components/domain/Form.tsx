import { styled } from 'styled-components';

import { Input, List } from '@/components';

const TITLE = '국내 모든 임상시험 검색하고<br>온라인으로 참여하기';

const Form = () => {
  return (
    <Section>
      <Title dangerouslySetInnerHTML={{ __html: TITLE }} />
      <Input />
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
