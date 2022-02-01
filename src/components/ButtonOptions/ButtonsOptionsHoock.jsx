import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsList, Button } from './ButtonsStyled';

const ButtonsOptions = ({
  values,
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  const { good, neutral, bad } = values;
  return (
    <ButtonsList>
      <Button
        type="button"
        id="good"
        onClick={() => {
          onLeaveFeedbackGood();
        }}
      >
        {good}
      </Button>
      <Button
        type="button"
        id="neutral"
        onClick={() => {
          onLeaveFeedbackNeutral();
        }}
      >
        {neutral}
      </Button>
      <Button
        type="button"
        id="bad"
        onClick={() => {
          onLeaveFeedbackBad();
        }}
      >
        {bad}
      </Button>
    </ButtonsList>
  );
};

export default ButtonsOptions;
ButtonsOptions.propTypes = {
  values: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedbackGood: PropTypes.func.isRequired,
  onLeaveFeedbackNeutral: PropTypes.func.isRequired,
  onLeaveFeedbackBad: PropTypes.func.isRequired,
};
