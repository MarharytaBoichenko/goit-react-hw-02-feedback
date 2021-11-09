import './App.css';
import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import StatItem from './components/StatItem/StatItem';
import s from './components/Section/Section.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => ({
      [opt]: prevState[opt] + 1,
    }));
    console.log(this.state);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedBack = good + neutral + bad;
    return totalFeedBack;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePers = Math.round((good / this.countTotalFeedback()) * 100);
    return positivePers;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const stateOpt = Object.keys(this.state);
    const stateVal = Object.values(this.state);
    const isFeedback = Object.values(this.state).some(opt => opt > 0);
    console.log(isFeedback);
    console.log(stateOpt);
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          {stateOpt.map((option, index) => (
            <FeedbackOptions
              key={index + 1}
              options={option}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          ))}
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given." />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
