import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';

function App() {
  return (
    <div className='todo-container'>
      <Header/>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoButton />
    </div>
  );
}

export default App;
