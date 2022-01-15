import React, { Component } from 'react';
import {
  Statistics,
  Title,
  ButtonsList,
  ButtonItem,
  Button,
  Subtitle,
  FeedbacksOutput,
  OutputItem,
} from './StatisticStyled';

class Statistic extends Component {
  static propTypes = {
    //
  };

  state = {
    good: 5,
    neutral: 7,
    bad: 12,
  };

  incrementGood = () =>
    this.setState(prevState => ({
      good: prevState.value + 1,
    }));

  incrementNeutral = () =>
    this.setState(prevState => ({
      neutral: prevState.value + 1,
    }));

  incrementBad = () =>
    this.setState(prevState => ({
      bad: prevState.value + 1,
    }));

  render() {
    return (
      <Statistics>
        <Title>Please leave feedback</Title>
        <ButtonsList>
          <ButtonItem>
            <Button type="button">Good</Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button">Neutral</Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button">Bad</Button>
          </ButtonItem>
        </ButtonsList>
        <Subtitle>Statistics</Subtitle>
        <FeedbacksOutput>
          <OutputItem className="GoodFeedback">
            Good: {this.state.good}
          </OutputItem>
          <OutputItem className="NeutralFeedback">
            Neutral: {this.state.neutral}
          </OutputItem>
          <OutputItem className="BadFeedback">Bad: {this.state.bad}</OutputItem>
        </FeedbacksOutput>
      </Statistics>
    );
  }
}

export default Statistic;
