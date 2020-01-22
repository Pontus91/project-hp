import React, {useState, useEffect} from 'react';
import {
  PassingContainer,
  PassingWrapper
} from './StyledMyPassing';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const MyPassing = () => {

  const loginInfo = useSelector(state => state.userReducer.userState);
  const dispatch = useDispatch();
  const [dogsOnMyCare, setDogsOnMyCare] = useState([]);

  console.log(dogsOnMyCare);

  /**
   * UseEffect Hook to get userdata and set it to redux state.
   * Also if a user is not logged in it redirects to the startpage instantly.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/login',
    }).then(response => {
      if (response.data.status === 'not logged in') {
        window.location.assign('/');
      } else {
        let data = { ...response.data }
        dispatch({ type: 'UPDATE_USER', value: data })
      }
    })
  }, [dispatch])

/**
   * UseEffect function to get data for sittings.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:3001/api/user/specific/sittings/${loginInfo._id}`,
    }).then(response => {
      setDogsOnMyCare(response.data.doSitting);
    })
  }, [setDogsOnMyCare, loginInfo._id])


  return (
    <PassingContainer>
      <PassingWrapper>

      </PassingWrapper>
    </PassingContainer>
  )
}

export default MyPassing;