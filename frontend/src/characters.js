
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState} from 'react';
import { Container } from '@mui/material';

import "./css/characters.css";
import characters from './characterList';


export function Characters() {
    const [character, selectCharacter] = useState(characters['GroupPhoto']);


    return (
        <div className="characters">
            <section className="characters-section">
            <h1>Characters</h1>
        <Box  id='characters' 
        sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
           
        }}  >


        <Grid container   
        height= '25vh' 
        border= 'dotted' 
        spacing={1} xs={4} sm={8} md={12} 
        display='flex'
        >
        
        <Grid item xs={2}>
            <Avatar 
            alt="Preston Caviar" 
            src="https://drive.google.com/thumbnail?id=13KwQ6M3XYhdyBAeQ7q5cAqrxGri44Am5"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['Preston']['bgimg'])}
             />
             </Grid>

                <Grid item xs={2}>
            <Avatar 
            alt="Mewnice Whiskerly" 
            src="https://drive.google.com/thumbnail?id=1cLhI4Fy8wmkXAwQnPQzA49dq3myWSn7F"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['Mewnice'])}
             />
                </Grid>

                <Grid item xs={2}>
            <Avatar 
            alt="OctoberTengu" 
            src="https://drive.google.com/thumbnail?id=17bXwup_8wt85n_cys7Hsn9d_SVta2mFw"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['October']['bgimg'])}
             />
                </Grid>

                <Grid item xs={2}>
              <Avatar 
            alt="Rollo" 
            src="https://drive.google.com/thumbnail?id=1zaoNL7h_1oNexoBuQTUdyUty1QioYYHa"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['Rollo'])}
             />
                </Grid>

                <Grid item xs={2}>
            <Avatar 
            alt="Tabitha" 
            src="https://drive.google.com/thumbnail?id=10LrRJTlxxOfQ_Vdl62nppqltlY8sdFij"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['Tabitha'])}
             />
                </Grid>

                <Grid item xs={2}>
            <Avatar 
            alt="Suplex" 
            src="https://drive.google.com/thumbnail?id=14QiH9Y5FSqX22Am74XNOh2PatBsS_3Tj"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick={()=> selectCharacter(characters['Suplex'])}
             />
             </Grid>

        </Grid>



        </Box>
        <Container
       
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          
        },
      }}
    >{character}</Container>
            </section>
            </div>
    )
}

