import { ToastContainer } from 'react-toastify';
import GameBoard from './components/GameBoard.jsx'
import Legend from './components/Legend.jsx';

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={2000} draggable={true} theme='dark' />
      <Legend />
      <GameBoard />
    </main>
  );
};

export default App;
