import React, { useEffect, useState } from "react";

function Profile({user}) {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [repos, setRepos] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        Promise.all([
            fetch(user.url).then((res)=>res.json()),
            fetch(user.repos_url).then((res)=>res.json())
        ])
        .then(([userData, repoData])=>{
            setName(userData.name || userData.login);
            setLocation(userData.location || 'Unknown');
            setRepos(repoData);
            setLoading(false);
        })
        .catch((e)=>{
            console.error('Error loading profile', e);
            setLoading(false);
        })
    }, [user]);
    
    return (
        <div>
        <h1>User Profile</h1>
        {loading?
            (
                <p>loading...</p>):
        (<div >
            <h2>{name}</h2>
            <p>{location}</p>
            <img src={user.avatar_url} alt={user.login} height={200}/>
            <ul>
                {repos.slice(0,3).map((repo, index)=>(
                    <li key={index}>
                        <a href={repo.html_url}>{repo.name}</a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>

        </div>)}
    
    </div>
    );
}

export default Profile;
