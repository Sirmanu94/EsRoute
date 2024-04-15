// ShowGithubUser.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GitHubUser from './GitHubUser'; // Assicurati che il percorso di importazione sia corretto

function ShowGithubUser() {
 const {username} = useParams()
 return(
  <div>
    <GitHubUser username = {username}/>
  </div>
 )
}

export default ShowGithubUser;
