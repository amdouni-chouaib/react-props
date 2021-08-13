import React from 'react'
import { Button } from '@material-ui/core';

const ProfileComponent = (props) => {
    return (
        <div style={{display:"flex" , justifyContent:"center" ,marginTop:"24%"}}>
            <Button color="primary" variant="contained" onClick={() => { alert("Welcome Mr" +" "+ props.name,props.bio,props.profession) }}>Click me</Button>
        </div>
    )
}

export default ProfileComponent
