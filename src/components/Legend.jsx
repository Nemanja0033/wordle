import '../index.css';

const Legend = () => {
  return (
    <div className="legend-container">
      <div className="legend-item">
        <div className="legend-box right" />
        <span className="legend-label">Right spot</span>
      </div>
      <div className="legend-item">
        <div className="legend-box wrong" />
        <span className="legend-label">Wrong spot</span>
      </div>
      <div className="legend-item">
        <div className="legend-box none" />
        <span className="legend-label">Not exist</span>
      </div>
    </div>
  );
};

export default Legend;
