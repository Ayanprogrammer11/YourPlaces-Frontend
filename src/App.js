import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <BrowserRouter>
    <MainNavigation />
    <main>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      </main>
    </BrowserRouter>
    // <div>It worked! Let's start making the project!</div>
  );
}

export default App;
