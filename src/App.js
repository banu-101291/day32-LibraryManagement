
import  Home  from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';


import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;