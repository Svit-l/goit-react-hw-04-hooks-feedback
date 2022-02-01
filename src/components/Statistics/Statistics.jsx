import React from 'react';
import PropTypes from 'prop-types';
import { FeedbacksOutput, OutputItem } from './StatisticsStyled';

const Statistics = ({ values, total, positivePercentage }) => {
  const { good, neutral, bad } = values;
  return (
    <FeedbacksOutput>
      <OutputItem>Good: {good}</OutputItem>
      <OutputItem>Neutral: {neutral}</OutputItem>
      <OutputItem>Bad: {bad}</OutputItem>
      <OutputItem>Total: {total}</OutputItem>
      <OutputItem>Positive feedback: {positivePercentage}%</OutputItem>
    </FeedbacksOutput>
  );
};

Statistics.propTypes = {
  values: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
