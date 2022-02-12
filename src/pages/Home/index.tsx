import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = ():JSX.Element =>{
    const navigate = useNavigate();
    const myDate:any  = new Date()  //Date().toLocaleString()
    const dateThai = myDate.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    return(
        <>
            <div>
                <nav>
                    <p>{`Home${dateThai}`}</p>
                    <Button variant="contained" onClick={() => navigate('/demo')}>Demo</Button>


                </nav>
            </div>
        </>
    )
}
export default Home