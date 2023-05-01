import React from "react";
import { Link } from "react-router-dom";
import {
  Card as Cards,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
type Props = {
  link: string;
  name: string;
  about: string;
  linkName: string;
};
const Card: React.FC<Props> = (props) => {
  const { link, name, about, linkName } = props;
  return (
    <Cards sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{about}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={link}>{linkName}</Link>
        </Button>
      </CardActions>
    </Cards>
  );
};

export default Card;
