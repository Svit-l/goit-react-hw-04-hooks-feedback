import React from 'react';

import { ButtonsList, ButtonItem, Button } from './ButtonStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ButtonsList>
      {/* {console.log(options)} */}
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
