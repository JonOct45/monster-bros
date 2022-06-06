import "./css/history.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


const buttons = [
    <Button size='large'>Welcome to Eos!</Button>,
    <Button size='small'>Genesis</Button>,
    <Button size='small'>Prime Material</Button>,
    <Button size='large'>History of Eos</Button>,
    <Button size='small'>Age of Genesis</Button>,
    <Button size='small'>Pre-Historic Age</Button>,
    <Button size='small'>Age of Ancients</Button>,
    <Button size='small'>Age of Elders</Button>,
    <Button size='small'>Age of Warring States</Button>,
    <Button size='small'>Age of Discovery</Button>,

  ];


export function History() {
    return (

  
      <Box
       
        
        sx={{
          display: 'flex',
          padding: 10,
        
         
          '& > *': {
            m: 1,
          },
        }}
      > {buttons[0]}
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'  
            sx={{    
                alignItems:'center',
                border: '1px dashed red',
                width: '300px'
            }}
        >

        <ButtonGroup
        
            display='flex'
            flexDirection='column'
            orientation="vertical"
            aria-label="vertical contained button group"   
            variant='text' 
            
        >
          {buttons}
        </ButtonGroup>    
        </Box>
        
        <Box
            sx={{
                display: 'flex',
                height: 850,
                width: 1000,
                backgroundColor:'purple'
            }}>
                <img src="https://drive.google.com/thumbnail?id=1z_cb46QKRUhMXyeizd9N5zspsOPWUR0v"/>
            
        </Box>
      </Box>
   
    );
  }