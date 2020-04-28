import React from "react";
import "./post-status-filter.css";

const postStatusFilter = () => {
  return (
    <div className="btn-group">
    {/* Стили подтягиваются с бутсрэп сдн */}
      <button type="button" className="btn brn-info">
        Все
      </button>
      <button className="btn">Понравилось</button>
    </div>
  );
};

export default postStatusFilter;
