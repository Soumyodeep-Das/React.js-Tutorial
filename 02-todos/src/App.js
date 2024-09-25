import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';

function App() {
  return (
    <div className='todo-container'>
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study" completed='true'/>
      <TodoItem text="Sleep"/>
      <TodoButton />
    </div>
  );
}

export default App;
