import React from 'react';

import {
  Statistic,
  Subtitle,
  FeedbacksOutput,
  OutputItem,
} from '../App/StatisticStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Statistic>
    <Subtitle>Statistics</Subtitle>
    <FeedbacksOutput>
      <OutputItem>Good: {good}</OutputItem>
      <OutputItem>Neutral: {neutral}</OutputItem>
      <OutputItem>Bad: {bad}</OutputItem>
      <OutputItem>Total: {total}</OutputItem>
      <OutputItem>Positive feedback: {positivePercentage}%</OutputItem>
    </FeedbacksOutput>
  </Statistic>
);

export default Statistics;
