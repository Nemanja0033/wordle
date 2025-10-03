import { ToastContainer } from 'react-toastify';
import GameBoard from './components/GameBoard.jsx'

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={2000} draggable={true} theme='dark' />
      <GameBoard />
    </main>
  );
};

export default App;
