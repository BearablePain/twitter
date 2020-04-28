import React from "react";
import {Button} from 'reactstrap';
import "./post-status-filter.css";

const postStatusFilter = () => {
  return (
    <div className="btn-group">
    <Button color='info '>Все</Button>
    {/* Стили подтягиваются с бутсрэп сдн */}
      <button type="button" className="btn brn-info">
        Все
      </button>
      <button className="btn">Понравилось</button>
    </div>
  );
};

export default postStatusFilter;
