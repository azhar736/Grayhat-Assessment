import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import UploadScreen from './components/UploadScreen';
import DisplayScreen from './components/DisplayScreen';

function App() {
  return (
    <Router>
    <Header />
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<UploadScreen />} />
        <Route path="/display" element={<DisplayScreen />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
