import React from "react";
import { Card, CardMedia, CardTitle } from "material-ui/Card";
import "./StreamCard.css";

const StreamCard = props => {
  return (
    <div className="stream-card" onClick={props.handleClick}>
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              subtitle={`Rating: ${props.stream.rating.percentage}%`}
            />
          }
        >
          <img
            className="stream-card-poster"
            src={props.stream.images.poster}
            alt=""
          />
        </CardMedia>
        <div className="stream-card-title">{props.stream.title}</div>
      </Card>
    </div>
  );
};

export default StreamCard;
