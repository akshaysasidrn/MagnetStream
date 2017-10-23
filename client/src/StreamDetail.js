import React from "react";
import {
  Card,
  // CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";

const StreamDetail = props => {
  return (
    <div className="card">
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              subtitle={`Rating: ${props.stream.rating.percentage}%`}
            />
          }
        >
          <img className="poster" src={props.stream.images.poster} alt="" />
        </CardMedia>
        <CardText>{props.stream.title}</CardText>
        {/* <CardActions>
          <FlatButton label="Stream" />
          <FlatButton label="Download" />
        </CardActions> */}
      </Card>
    </div>
  );
};

export default StreamDetail;
