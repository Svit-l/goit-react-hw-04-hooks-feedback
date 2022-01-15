import React, { Component } from 'react';

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="Statistics">
        <h1>Please leave feedback</h1>
        <ul className="ButtonsList">
          <li>
            <button type="button">Good</button>
          </li>
          <li>
            <button type="button">Neutral</button>
          </li>
          <li>
            <button type="button">Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul className="FeedbacksOutput">
          <li className="GoodFeedback">0</li>
          <li className="NeutralFeedback">0</li>
          <li className="BadFeedback">0</li>
        </ul>
      </div>
    );
  }
}

export default Statistic;
