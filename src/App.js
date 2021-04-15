import './App.css';

// COMPONENTS
import Header from './components/Header'

// PAGES
import BookDetailPage from './pages/BookDetailPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ReadingPage from './pages/ReadingPage'

// LIBRARY
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/books/:id" component={BookDetailPage} />
        <Route exact path="/reading" component={ReadingPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
