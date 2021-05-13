import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button, Grid,Chip } from "@material-ui/core";
import ProfileSkills from "../Components/ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";
import { loadProfile } from '../Redux/actions/profile'

const initProfile = {
    school:"N/A",
    major:"N/A",
    selfintro:"This guy is too lazy to write something",
    skills:[],
    potrait:null,
    team:[]
};

export default function Profile() {
  const [formData, setFormData] = useState(initProfile);
  const [skillsArray, setSkillsArray] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const { userProfile } = useSelector(state => state.profileData);
  const { profile } = userProfile;
  const { school, major, selfintro, skills, potrait, team } = profile;

  const dispatch = useDispatch();
  useEffect(async ()=>{
      if(localStorage.getItem('profile')){
      const { result } = JSON.parse(localStorage.getItem('profile'));
      const { _id } = result;
      dispatch(loadProfile(_id));
      }
  },[]);
  setInterval(()=>{ console.log(skills) },2000);
  
  const handleClick = () => {
    setSkillsArray(skills);
    setIsHidden(false);
  }
  const skillItems = skillsArray.map((item) => (
    <Chip label={item}  color="primary" />
  ));

  const handleSubmit = (e) => {
    if(profile){
      setFormData({...formData, school, major, selfintro, skills, potrait, team});
    }
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <Grid
      container
      flexdirection="column"
      justify="space-around"
      style={{ marginTop: 20 }}
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container justify="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="school"
                        name="school"
                        label="School"
                        variant="outlined"
                        key={ school }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="major"
                        name="major"
                        label="Major"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="selfintro"
                        label="Sefl-Introduction"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="skills"
                        label="Skills"
                        variant="outlined"
                        fullWidth
                      />
                    <Button fullWidth color="primary" onClick={handleClick}>YOUR SKILL</Button>
                    <Button fullWidth color="secondary">ADD SKILL</Button>
                    </Grid>
                    <Grid item xs={12}>
                    { isHidden === false ? skillItems : null }
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="outlined"  fullWidth color="primary">SAVE</Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
