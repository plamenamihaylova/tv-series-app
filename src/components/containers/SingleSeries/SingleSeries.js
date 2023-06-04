import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleSeriesInfo from "../../SingleSeriesInfo/SingleSeriesInfo";

function SingleSeries() {
  const params = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.id}?embed=episodes`)
      .then((response) => response.json())
      .then((json) => setShow(json));
  });

  return <SingleSeriesInfo show={show}/>
}

export default SingleSeries;
