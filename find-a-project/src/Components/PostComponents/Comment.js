import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Collapse
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    fonts: {
      fontWeight: "bold"
    },
    inline: {
      display: "inline"
    }
  }));

export default function Comment({ comment }) {
    console.log('comment', comment);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <React.Fragment key={1}>
          <ListItem key={1} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="avatar" src={''} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={classes.fonts}>
                  {/* {comment.name} */}
                  This is a comment
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {`This is the content body`}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <p>Inner text</p>
              </ListItem>
            </List>
          </Collapse>
          <Divider />
        </React.Fragment>
      );
}
