import { useState } from "react";
const ButtonVote = ({ selected, votes, setVotes }) => {
  const eventClick = () => {
    const newvotes = [...votes];
    newvotes[selected] += 1;
    setVotes(newvotes);
  };
  return <button onClick={() => eventClick()}>vote</button>;
};
const ButtonSelect = ({ setSelected, length }) => {
  const eventClick = () => {
    setSelected(Math.floor(Math.random() * (length - 1)));
  };
  return <button onClick={() => eventClick()}>next anecdote</button>;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const VoteMax = Math.max.apply(null, votes);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <ButtonVote selected={selected} votes={votes} setVotes={setVotes} />
      <ButtonSelect setSelected={setSelected} length={anecdotes.length} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.indexOf(VoteMax)]}</p>
      <p>has {VoteMax} votes</p>
    </div>
  );
};

export default App;
