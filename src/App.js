
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={"Home Page"} />
              <Route path="*" element={"ERROR"} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
