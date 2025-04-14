import "../css/PaintingCard.css";
function PaintingCard({ painting }) {
  function onFavoriteClick() {
    alert("clicked");
  }
  return <div className="painting-card">
      <div className="painting-poster">
        <img src={painting.url} alt={painting.title} />
        <div className="painting-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ¿❤️?
          </button>
        </div>
      </div>
      <div className="painting-info">
        <h3>{painting.title}</h3>
        <p>{painting.release_date}</p>
      </div>
    </div>

}
export default PaintingCard;