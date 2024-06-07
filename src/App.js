import './App.css';
import Book from './book';
import Landing from './landinga';
import { useRef } from 'react';

// import App1 from './video_play';

import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/book" element={<Book/>}/>
      {/* <Route path="/video" element={<App1/>}/> */}

    </Routes>

  );
}

export default App;
