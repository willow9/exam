import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesPage from "./components/CategoriesPage";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Exams from "./components/Exams";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Exams} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/questions' component={Questions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
