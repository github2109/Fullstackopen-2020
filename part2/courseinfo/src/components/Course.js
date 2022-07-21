const Header = ({ text }) => {
  return <h1>{text}</h1>;
};
const Content = ({ course }) => {
  const total = course.parts.reduce((total, current) => {
    return total + current.exercises;
  }, 0);
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total {total}</p>
    </div>
  );
};
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <Header text={course.name} />
      <Content course={course} />
    </div>
  );
};

export default Course;
