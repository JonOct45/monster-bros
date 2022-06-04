import "./css/history.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

const buttons = [
    <Button key="one">Introduction</Button>,
    <Button key="two">Genesis</Button>,
    <Button key="three">Prime Material</Button>,
  ];


export function History() {
    return (

    <Box>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >

        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {buttons}
        </ButtonGroup>
        <Box
            sx={{
                display: 'flex',
                height:1300,
                width: 1200,
                backgroundColor:'purple'
            }}>
            
        </Box>
      </Box>
      </Box>
    );
  }