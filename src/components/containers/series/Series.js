import { useState } from "react";
import fetch from "cross-fetch";
import SeriesList from "../../SeriesList/SeriesList";
import Loader from "../../Loader/Loader";

function Series() {
  const [series, setSeries] = useState([]);
  const [seriesName, setSeriesName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const onSeriesInputChange = (e) => {
    setSeriesName(e.target.value);
    setIsFetching(true);
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        setSeries(json);
        setIsFetching(false);
      });
  };

  return (
    <div>
      <div>
        <input value={seriesName} type="text" onChange={onSeriesInputChange} />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === "" && (
        <p>Please, enter series name to the input.</p>
      )}
      {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
        <p>No TV series with this name have been found.</p>
      )}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={series} />}
    </div>
  );
}

export default Series;
