import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import NotQuote from "./components/UI/NotQuote";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetails from "./Pages/QuoteDetails";

function App() {
  return (
    <Layout>
     <Switch>
      <Route path='/' exact>
         <Redirect to='/quotes' />
      </Route>
       <Route path='/quotes' exact>
         <AllQuotes />
       </Route>
       <Route path='/quotes/:quoteId'>
         <QuoteDetails />
       </Route>
       <Route path="/new-quote">
         <NewQuote/>
       </Route>
       <Route path='*'><NotQuote/> </Route>
     </Switch>
    </Layout>
  );
}

export default App;
