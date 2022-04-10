import QuoteList from '../components/quotes/QuoteList';
const AllQuotes = () =>{
 
const DUMMY_QUOTES =[
    {id:'q1', author:'Narsa', text:'Learing React is great !'},
    {id:'q2', author:'Ajay', text:'Learing React is fun..'}

]
    return(
        <div>
           <QuoteList quotes={DUMMY_QUOTES} /> 
        </div>
    )
}
export default AllQuotes;