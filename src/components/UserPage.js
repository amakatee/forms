import React, { useState } from 'react'
import '@mui/material'
import { TextField, Grid, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser'
import { Card } from '@mui/material';
import '../App.css'



const initialState = {
  id: 0,
  name:'',
  email:'',
  mobile:'',
  message: ''
}
export default function UserPage() {
 function sendEmail(e) {
   e.preventDefault()

   emailjs.sendForm('service_y6817tv', 'template_eg6j4re',  e.target, 'LBJgM3cKf5iJNE5NS').then(res => {
     console.log(res)
   }).catch (err => console.log(err))
 }
 


const [values, setValues] = useState(initialState)

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

 
  return (
<div>
  <form  action="https://formsubmit.amabjorg@gmail.com" method="POST" >
    <input 
    name='name'
    type='text'
    placeholder='Name'
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
     <input 
    name="user-email" 
    type='email'
    placeholder='Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
      <input 
      name='message'
    type='text'
    placeholder='Message'
    value={message}
 
    onChange={(e) => setMessage(e.target.value)}
    />
    <button type='submit'>submit</button>
  </form>
</div>

  //  <Card style={{maxWidth:600, margin:'0', padding: "20px 5px"}}>
  //    <CardContent>
  //      <Typography variant="h5" >Contatc us</Typography>
  //    <form onSubmit={sendEmail}>
  //         <Grid container spacing={1}>
  //           <Grid xs={12} item>
  //             <TextField 
  //             variant='outlined'
  //             name='name'
  //             type="text"
  //             label="name"
  //             placeholder='Type name'
  //             value={values.name}
  //             onChange={e => setName(e.target.value)}
              
            
  //             />
  //              </Grid>
  //              <Grid xs={12}  item>
  //             <TextField 
  //             variant='outlined'
  //             name="user-email"
  //             type='email'

  //             label="Email"
  //             placeholder='TypeEmail'
  //             value={values.email}
  //             onChange={e => setEmail(e.target.value)}
  //            />
  //              </Grid>

  //              <Grid xs={12}  item>
  //             <TextField 
  //             variant='outlined'
  //             label="mobile"
  //             name="mobile"
  //             placeholder='mobile phone'
  //             value={values.mobile}
  //            />
  //              </Grid>

  //              <Grid xs={12}  item>
  //             <TextField 
  //            variant="filled"
  //             defaultValue="Small"
  //             label="Text"
  //             placeholder='message'
  //             name="message"
  //             rows={7}
  //             value={values.message}
  //            />
  //              </Grid>

  //              <Grid xs={12} item>
  //              <Button type="submit" variant="contained"  fullwidth >Button</Button>
  //              </Grid>
               
  //         </Grid>
  //     </form>
  //    </CardContent>
  //  </Card>
     


 
  )
}

