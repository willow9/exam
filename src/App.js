import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesPage from "./components/category/CategoriesPage";
import Navbar from "./components/Navbar";
import QuestionsPage from "./components/question/QuestionsPage";
import ExamsPage from "./components/exam/ExamsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ExamsPage} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/questions' component={QuestionsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
