import './MyInfo.css';

function MyInfo(props) {
  return (
    <div className='card m-3 person-card'>
      <img className='card-img-top' src={props.imageUrl} alt="Card image cap"/>
      <div className="card-body">
        <h2 className="card-title text-danger">{props.name}</h2>
        <p className="card-text text-dark">{props.desription}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default MyInfo;
