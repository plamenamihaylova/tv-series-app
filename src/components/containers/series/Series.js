import { useEffect, useState } from "react";
import fetch from "cross-fetch";

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((response) => response.json())
      .then((json) => setSeries(json));
  });
  return <div> The length of series array - {series.length}</div>;
}

export default Series;