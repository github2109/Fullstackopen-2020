import { useState } from "react";
const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
    </tbody>
  );
};
const Button = ({ counter, setCounter, text }) => {
  const clickBtn = (counter, setCounter) => {
    return setCounter(counter + 1);
  };
  return <button onClick={() => clickBtn(counter, setCounter)}>{text}</button>;
};
const Statistics = (props) => {
  const getAllValues = () => {
    return props.good + props.neutral + props.bad;
  };
  const getAverage = () => {
    return (props.good - props.bad) / getAllValues();
  };
  const getPositive = () => {
    return (props.good / getAllValues()) * 100;
  };
  if (getAllValues() === 0)
    return (
      <div>
        <h2>statistics</h2>
        <p>No feadback given</p>
      </div>
    );
  return (
    <div>
      <h2>statistics</h2>
      <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={getAllValues()} />
      <StatisticLine text="average" value={getAverage()} />
      <StatisticLine text="positive" value={getPositive() + " %"} />
      </table>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feadback</h1>
      <Button counter={good} setCounter={setGood} text="good" />
      <Button counter={neutral} setCounter={setNeutral} text="neutral" />
      <Button counter={bad} setCounter={setBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
