import React from 'react';

import { SectionWrap, Title, Subtitle } from './SectionStyled';

const Section = ({ title, children }) => (
  <SectionWrap>
    {title === 'Please leave feedback' ? (
      <Title>{title}</Title>
    ) : (
      <Subtitle>{title}</Subtitle>
    )}
    {children}
  </SectionWrap>
);
export default Section;
