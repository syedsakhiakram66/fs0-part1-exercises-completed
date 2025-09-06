const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = ({ course }) => <h1>{course}</h1>
  const Part = ({props}) => <p>{props.name} {props.exercises}</p> 
  const Total = () => <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>


  return (
    
    <>
      <Header course={course} />
      <Part props={part1} />
      <Part props={part2} />
      <Part props={part3} />
    <Total />
    </>
  );
};

export default App;
