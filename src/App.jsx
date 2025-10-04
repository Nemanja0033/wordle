import { ToastContainer } from 'react-toastify';
import GameBoard from './components/GameBoard.jsx'
import Legend from './components/Legend.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={2000} draggable={true} theme='dark' />
      <Legend />
      <GameBoard />
      <Footer />
    </main>
  );
};

export default App;
