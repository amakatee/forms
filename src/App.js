import logo from './logo.svg';
import './App.css';
import UserPage from './components/UserPage';
import { Paper } from '@mui/material';



function App() {
  return (
    <div className="App">
      <Paper>
      <UserPage />
      </Paper>
      
    </div>
  );
}

export default App;
