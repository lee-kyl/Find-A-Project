import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button, Grid,Chip } from "@material-ui/core";
import ProfileSkills from "../Components/ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";
import { loadProfile } from '../Redux/actions/profile'
import axios from 'axios';
import { LinearProgress } from '@material-ui/core';

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
  const { userProfile } = useSelector(state => {
    return state.profileData;
  });
  const { profile } = userProfile;
  const { school, major, selfintro, skills, potrait, team } = profile;
  // const [profile, setProfile] = useState([]);

  const [tempProfile, setTempProfile] = useState({});
  const [userId, setUserId] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skillInput, setSkillInputChange] = useState('');

  const dispatch = useDispatch();
  useEffect(async ()=>{
      if(localStorage.getItem('profile')){
        const { result } = JSON.parse(localStorage.getItem('profile'));
        const { _id } = result;
        setUserId(_id);
        axios.get('http://localhost:5000/profile/getProfile/' + _id).then(res => {
          setTempProfile(res.data.profile);
          setIsLoading(false);
        });
      }
    },[]);

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  }

  const onSkillInputChange = (e) => {
    setSkillInputChange(e.target.value);
  }

  const handleDelete = (profileName) => {
    const newProfile = tempProfile?.skills.filter(name => name != profileName);
    setTempProfile({ ...tempProfile, skills: [...newProfile]});
  }

  const addSkill = () => {
    if (!skillInput) {
      return;
    }

    if (tempProfile?.skills) {
      setTempProfile({ ...tempProfile, skills: [...tempProfile?.skills, skillInput] });
    } else {
      setTempProfile({ ...tempProfile, skills: [skillInput] });
    }
    setSkillInputChange('');
  }

  const skillItems = tempProfile?.skills?.map((item, key) => {
      return (
      <Chip label={item} key={key} color="primary" onDelete={() => {handleDelete(item)}} />
    )
  });

  const handleSubmit = () => {
    axios.post('http://localhost:5000/profile/updateProfile/' + userId, tempProfile).then(res => {
      window.location.href = '/Profile'
    })
  }

  const renderLoadingBar = (<LinearProgress style={{marginTop: 50}}/>);

  const renderProfileChangePage = (
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
                        variant="outlined"
                        key={ school }
                        value = {tempProfile?.school}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="major"
                        name="major"
                        variant="outlined"
                        value = {tempProfile?.major}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="selfintro"
                        name="selfintro"
                        rows={4}
                        variant="outlined"
                        value = {tempProfile?.selfintro}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="skills"
                        label="Skills"
                        variant="outlined"
                        value={skillInput}
                        onChange={onSkillInputChange}
                        fullWidth
                      />
                    <Button fullWidth color="secondary" onClick={addSkill}>ADD SKILL</Button>
                    </Grid>
                    <Grid item xs={12}>
                    {skillItems}
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="outlined" type="button" fullWidth color="primary" onClick={handleSubmit}>SAVE</Button>
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

  return <>{isLoading ? renderLoadingBar : renderProfileChangePage}</>
}
