import Loader from "../Loader/Loader";

function SingleSeriesInfo(props) {
  return (
    <div>
      {props.show === null && <Loader />}
      {props.show !== null && (
        <div className="row flex-lg-row align-items-start g-1 py-1">
          <div className="col-6">
            <img
              src={props.show.image.original}
              alt="show"
              className="d-block rounded"
              width="90%"
            />
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <div>
              <h4 className="fs-1">{props.show.name}</h4>
            </div>
            <hr className="my-4 col-10 col-sm-8 col-lg-6" />
            <p className="fs-3">✨Rating - {props.show.rating.average}</p>
            <p className="fs-3">🎬Premiered - {props.show.premiered}</p>
            <p className="fs-3"> 🎞️Episodes - {props.show._embedded.episodes.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleSeriesInfo;
