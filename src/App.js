import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesPage from "./components/CategoriesPage";
import Navbar from "./components/Navbar";
import QuestionsPage from "./components/QuestionsPage";
import Exams from "./components/Exams";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Exams} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/questions' component={QuestionsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
