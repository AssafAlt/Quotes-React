import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Assaf",
    text: "If it's look like a cowboy and it's smell like a cowboy it's Sinai"
  },
  { id: "q2", author: "Assaf", text: "Europe" }
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
