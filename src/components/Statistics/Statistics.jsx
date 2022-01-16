import React from 'react';

import { FeedbacksOutput, OutputItem } from '../App/StatisticStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <FeedbacksOutput>
    <OutputItem>Good: {good}</OutputItem>
    <OutputItem>Neutral: {neutral}</OutputItem>
    <OutputItem>Bad: {bad}</OutputItem>
    <OutputItem>Total: {total}</OutputItem>
    <OutputItem>Positive feedback: {positivePercentage}%</OutputItem>
  </FeedbacksOutput>
);

export default Statistics;
