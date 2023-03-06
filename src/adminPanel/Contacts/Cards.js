import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "4fr 4fr" }}>
        <Card sx={{ maxWidth: 245, marginTop: "30px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
                <MoreVertIcon />
              </IconButton>
            }
            title="Name of Contact"
            subheader="Entity name"
          />

          <CardContent sx={{ padding: "0px" }}>
            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <PhoneIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  +79208543856
                </Typography>
              </IconButton>
            </div>

            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <EmailIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  example@mail.ru
                </Typography>
              </IconButton>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <PhoneIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                call
              </Typography>
            </IconButton>

            <ExpandMore>
              <ChatIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                chat
              </Typography>
            </ExpandMore>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 245, marginTop: "30px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
                <MoreVertIcon />
              </IconButton>
            }
            title="Name of Contact"
            subheader="Entity name"
          />

          <CardContent sx={{ padding: "0px" }}>
            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <PhoneIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  +79208543856
                </Typography>
              </IconButton>
            </div>

            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <EmailIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  example@mail.ru
                </Typography>
              </IconButton>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <PhoneIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                call
              </Typography>
            </IconButton>

            <ExpandMore>
              <ChatIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                chat
              </Typography>
            </ExpandMore>
          </CardActions>
        </Card>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "4fr 4fr" }}>
        <Card sx={{ maxWidth: 245, marginTop: "30px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
                <MoreVertIcon />
              </IconButton>
            }
            title="Name of Contact"
            subheader="Entity name"
          />

          <CardContent sx={{ padding: "0px" }}>
            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <PhoneIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  +79208543856
                </Typography>
              </IconButton>
            </div>

            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <EmailIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  example@mail.ru
                </Typography>
              </IconButton>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <PhoneIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                call
              </Typography>
            </IconButton>

            <ExpandMore>
              <ChatIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                chat
              </Typography>
            </ExpandMore>
          </CardActions>
        </Card>{" "}
        <Card sx={{ maxWidth: 245, marginTop: "30px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
                <MoreVertIcon />
              </IconButton>
            }
            title="Name of Contact"
            subheader="Entity name"
          />

          <CardContent sx={{ padding: "0px" }}>
            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <PhoneIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  +79208543856
                </Typography>
              </IconButton>
            </div>

            <div>
              {" "}
              <IconButton aria-label="add to favorites">
                <EmailIcon sx={{ marginRight: "8px" }} />
                <Typography variant="body2" color="text.secondary">
                  example@mail.ru
                </Typography>
              </IconButton>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <PhoneIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                call
              </Typography>
            </IconButton>

            <ExpandMore>
              <ChatIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2" color="text.secondary">
                chat
              </Typography>
            </ExpandMore>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
