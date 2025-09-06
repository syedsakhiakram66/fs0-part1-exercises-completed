const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ props }) => <h1>{props.name}</h1>
  const Part = ({props}) => <p>{props.name} {props.exercises}</p> 
  const Total = () => <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>


  return (
    
    <>
      <Header props={course} />
      <Part props={course.parts[0]} />
      <Part props={course.parts[1]} />
      <Part props={course.parts[2]} />
    <Total />
    </>
  );
};

export default App;
