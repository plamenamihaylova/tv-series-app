import "./SeriesList.css";

const SeriesListItem = ({ series }) => {
  return <li key={series.show.id}>{series.show.name}</li>;
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
