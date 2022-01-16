import React from 'react';

import { Title, ButtonsList, ButtonItem, Button } from '../App/StatisticStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <Title>Please leave feedback</Title>
    <ButtonsList>
      {Object.keys(options).map(key => (
        <ButtonItem key={key}>
          <Button
            key={key}
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </Button>
        </ButtonItem>
      ))}
    </ButtonsList>
  </>
);

export default FeedbackOptions;
//
