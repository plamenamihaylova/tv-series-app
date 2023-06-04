import "./SeriesList.css";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => {
  return <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>;
};

function SeriesList(props) {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;
