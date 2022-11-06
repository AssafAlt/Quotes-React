import { useParams, Route, Link, useMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Assaf",
    text: "If it's look like a cowboy and it's smell like a cowboy it's Sinai"
  },
  { id: "q2", author: "Assaf", text: "Europe" }
];

const QuoteDetail = () => {
  const match = useMatch("/posts");
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.postId);
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
