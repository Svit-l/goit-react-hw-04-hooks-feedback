import { useState } from 'react';
import React from 'react';

import { FeedbackWrap } from './FeedbackStyled';
import Statistics from '../Statistics';
import Notification from '../Notification';
import ButtonsOptions from '../ButtonOptions/ButtonsOptionsHoock';
// import ButtonsOptions from '../ButtonOptions/ButtonsOptions';
import Section from '../Section';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good * 100) / total());
  };

  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <FeedbackWrap>
      <Section title="Please leave feedback">
        <ButtonsOptions
          values={values}
          onLeaveFeedbackGood={() => setGood(good + 1)}
          onLeaveFeedbackNeutral={() => setNeutral(neutral + 1)}
          onLeaveFeedbackBad={() => setBad(bad + 1)}
        />
      </Section>

      <Section title="Statistics">
        {total() !== 0 ? (
          <Statistics
            values={values}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </FeedbackWrap>
  );
}

export default Feedback;

// +++++++++++++++++++++++++++++++++++++++++++++

// const incrementGood = () => setGood(prevGood => prevGood + 1);

// const incrementNeutral = () => setNeutral(prevNeutral => prevNeutral + 1);

// const incrementBad = () => setBad(prevBad => prevBad + 1);

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);

//   return (
//     <div>
//       <button onClick={() => increment()}>Нажми на меня</button>
//     </div>
//   );
// }
