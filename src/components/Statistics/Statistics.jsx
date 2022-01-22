import React from 'react';
import PropTypes from 'prop-types';
import { FeedbacksOutput, OutputItem } from './StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <FeedbacksOutput>
    <OutputItem>Good: {good}</OutputItem>
    <OutputItem>Neutral: {neutral}</OutputItem>
    <OutputItem>Bad: {bad}</OutputItem>
    <OutputItem>Total: {total}</OutputItem>
    <OutputItem>Positive feedback: {positivePercentage}%</OutputItem>
  </FeedbacksOutput>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
