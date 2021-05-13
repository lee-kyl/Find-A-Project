import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Profile from '../Components/ProfileChange';
import { loadProfile } from '../Redux/actions/profile'


export default function SetProfile() {
    const dispatch = useDispatch();
    useEffect(async ()=>{
      if(localStorage.getItem('profile')){
      const { result } = JSON.parse(localStorage.getItem('profile'));
      const { _id } = result;
      dispatch(loadProfile(_id));
      }
    },[]);
    return (
        <div>
            <Profile></Profile>
        </div>
    )
}
