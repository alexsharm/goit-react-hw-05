import { useSearchParams } from "react-router-dom";

export default function SearchMovie() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.searchInput.value;
    evt.target.elements.searchInput.value = "";
    params.set("query", query);
    setParams(params);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchInput" />
        <button>Search</button>
      </form>
    </>
  );
}
