import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, Chip, Grid, TextField } from "@material-ui/core";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import LongMenu from "./LongMenu";
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    margin: "0 auto",
    width: "80%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  textField: {
    marginTop: 20,
  },
});

const colorMap = {
  Discussion: { backgroundColor: "#256EFF" },
  TeamUp: { backgroundColor: "#A481DA" },
  Project: { backgroundColor: "#3DDC97" },
};

const iconMap = {
  Discussion: <QuestionAnswerOutlinedIcon></QuestionAnswerOutlinedIcon>,
  TeamUp: <GroupAddOutlinedIcon></GroupAddOutlinedIcon>,
  Project: <AssignmentOutlinedIcon></AssignmentOutlinedIcon>,
};

const initState = {
  title: "",
  content: "",
  type: "Discussion",
  tag: "", // Additional attr. for dicussion
  school: "", // Additional attr. for project
  major: "", // Additional attr. for project
  slot: "", // Additional attr. for project
  team: "", // Additional attr. for teamup
};

export default function EditPostCard() {
  const classes = useStyles();
  const [post, setPost] = useState(initState);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("profile"))) {
      const { result } = JSON.parse(localStorage.getItem("profile"));
      setUserId(result._id);
    }
  });

  const sendPost = () => {
      console.log(post);
    axios.post('http://localhost:5000/post/createPost/' + userId, post).then(res => {
        if (res.status == '201') {
            alert('Your post has been created!');
            setPost(initState);
        }
      })
  }

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const renderPostOptions = () => {
    switch (post?.type) {
      case "Discussion":
        return renderDicussionOptions();
      case "Project":
        return renderProjectOptions();
      case "TeamUp":
        return renderTeamUpOptions();
      default:
        return;
    }
  };

  const renderDicussionOptions = () => (
    <Grid item xs={12}>
      <TextField
        id="tag"
        name="tag"
        className={classes.textField}
        label="Discussion tag"
        variant="outlined"
        fullWidth
        value={post?.tag}
        onChange={handleChange}
      />
    </Grid>
  );
  const renderProjectOptions = () => (
    <>
      <Grid item xs={4}>
        <TextField
          id="school"
          name="school"
          className={classes.textField}
          label="Faculty"
          variant="outlined"
          fullWidth
          value={post?.school}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="major"
          name="major"
          className={classes.textField}
          label="Major"
          variant="outlined"
          fullWidth
          value={post?.major}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="slot"
          name="slot"
          className={classes.textField}
          label="slot"
          type="number"
          variant="outlined"
          fullWidth
          value={post?.slot}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
  const renderTeamUpOptions = () => (
    <>
      <Grid item xs={12}>
        <TextField
          id="team"
          name="team"
          className={classes.textField}
          label="Team Name"
          variant="outlined"
          fullWidth
          value={post?.team}
          onChange={handleChange}
        />
      </Grid>
    </>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
        title={post?.title || "Please enter your post title here"}
        style={{ ...colorMap[post?.type], color: "white", font: "bold" }}
        action={<LongMenu post={post} updatePostType={setPost}></LongMenu>}
      ></CardHeader>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.pos}
        >
          <TextField
            id="title"
            name="title"
            className={classes.textField}
            label="Please enter your title here"
            variant="outlined"
            fullWidth
            value={post?.title}
            onChange={handleChange}
          />
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.pos}
        >
          <TextField
            id="content"
            name="content"
            className={classes.textField}
            multiline
            rows={4}
            label="Please enter your content here"
            variant="outlined"
            fullWidth
            value={post?.content}
            onChange={handleChange}
          />
        </Typography>
        <Grid
          container
          flexdirection="row"
          justify="space-around"
          className={classes.pos}
        >
          {renderPostOptions()}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
          <Grid item xs={3}>
            <Button
              size="small"
              color="primary"
              type="button"
              onClick={sendPost}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
