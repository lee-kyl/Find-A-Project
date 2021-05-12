import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Content from "../Components/DetailPageComponents/Content";
import Project from "../Components/DetailPageComponents/Project";
import TeamUp from "../Components/DetailPageComponents/TeamUp";
import { makeStyles } from "@material-ui/core/styles";
import { loadPost } from "../Redux/actions/post";
import Discussion from "../Components/DetailPageComponents/Discussion";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    maxWidth: 1200,
    margin: "0 auto",
  },
}));

export default function DetailPage(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(async () => {
    dispatch(loadPost(id));
  }, [dispatch]);

  const { postData } = useSelector((state) => state.postData);
  const { type } = postData;
  const renderRightColumn = <Content />;
  const renderLeftColumn = {
    Project: <Project />,
    TeamUp: <TeamUp />,
    Discussion: <Discussion />,
  };
  return (
    <Grid container flexdirection="column" justify="space-around">
      <Grid item lg={2}></Grid>
      <Grid item lg={5}>
        {renderRightColumn}
      </Grid>
      <Grid item lg={3}>
        {renderLeftColumn[type]}
      </Grid>
      <Grid item lg={2}></Grid>
    </Grid>
  );
}
