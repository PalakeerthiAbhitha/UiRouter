import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    Outlet,
    useLocation,
    useParams,
    useNavigate,
  } from 'react-router-dom';
  



export function Login() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      

    return(
        <div className='div5'>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         GUVI
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>


  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         XYZ Organization
        </Typography>
        <Typography variant="h5" component="div">
        India
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Learning is the
        </Typography>
        <Typography variant="body2">
          "Key to success"
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">CONTACT US</Button>
      </CardActions>
    </Card>
    <br></br>
    <br></br>

   <Stack spacing={2} direction="row">
     <Button variant="contained">ADMIN LOGIN</Button>
      <Button variant="contained">STUDENT LOGIN</Button>
    </Stack>
   <div></div>
   <div></div>
    <div>
        <br></br>
        <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular JS</Typography>
        </AccordionSummary>=
      </Accordion>
      <br></br>
      <br></br>

      <div className='div1' id = "id1">
      
      {/* <Link to ="/login"></Link> */}
      <Link className='div1' to="/contactus0"> CONTACT US &nbsp;&nbsp;
      
      </Link> &nbsp;
      <Link className='div1' to="/contactus"> ABOUT US&nbsp;&nbsp; </Link> &nbsp;
      <Link className='div1' to="/contactus1"> BRANCHES&nbsp;&nbsp; </Link> &nbsp;
      
       
         
         
          
          </div>
  </div>
 
    



  </div>
  
    )}

    export function ContactUs0() {
        const navigate = useNavigate();
        return (
          <>
            <h3> Contact US Component    </h3>

            <Link className='' to="/"> Back to home
      
      </Link> &nbsp;
      <br></br>
      <br></br>
      <button onClick={() => navigate(-1)}> Go Back </button> &nbsp;&nbsp;&nbsp;
      <button onClick={() => navigate(1)}> Go Forward </button> &nbsp;
        
            
          </>
        );
      }


      export function ContactUs() {
        const navigate = useNavigate();
        return (
          <>
            <h3> About Us Component   </h3>

            <Link className='' to="/"> Back to home 
      
      </Link> &nbsp;
      <br></br>
      <br></br>
      <button onClick={() => navigate(-1)}> Go Back </button> &nbsp;&nbsp;&nbsp;
      <button onClick={() => navigate(1)}> Go Forward </button> &nbsp;
          
            
          </>
        );
      }
      export function ContactUs1() {
        const navigate = useNavigate();
        return (
          <>
            <h3> Branches Component </h3>

            <Link className='' to="/"> Back to home
      
      </Link> &nbsp;
      <br></br>
      <br></br>
      <button onClick={() => navigate(-1)}> Go Back </button> &nbsp;&nbsp;&nbsp;
      <button onClick={() => navigate(1)}> Go Forward </button> &nbsp;
           
            
          </>
        );
      }
      




