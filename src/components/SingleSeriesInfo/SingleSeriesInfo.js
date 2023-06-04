import Loader from "../Loader/Loader";

function SingleSeriesInfo(props) {
  return (
    <div>
      {props.show === null && <Loader />}
      {props.show !== null && (
        <div>
          <p>{props.show.name}</p>
          <p>Premiered - {props.show.premiered}</p>
          <p>Rating - {props.show.rating.average}</p>
          <p>Episodes - {props.show._embedded.episodes.length}</p>
          <p>
            <img src={props.show.image.original} alt="show" />
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleSeriesInfo;
