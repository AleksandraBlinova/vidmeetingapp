import * as React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

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
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
