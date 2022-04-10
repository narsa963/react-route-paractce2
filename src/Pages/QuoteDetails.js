import { useParams, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Comments from "../components/comments/Comments"
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES =[
    {id:'q1', author:'Narsa', text:'Learing React is great !'},
    {id:'q2', author:'Ajay', text:'Learing React is fun..'}

]
const QuoteDetails =() =>{
    const params =useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    console.log(quote)
    if(!quote){
        return(
            <p>No Quote Found</p>
        )
    }
    return(
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
              <Comments />
            </Route>
        </Fragment>
    )   
}
export default QuoteDetails;