import { useParams } from "react-router-dom";

function SingleSeries(props) {
  const params = useParams();

  return (
    <div>
      <p>Single Series - the show id will be {params.id}</p>
    </div>
  );
}

export default SingleSeries;
