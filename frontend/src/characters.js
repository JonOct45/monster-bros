
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import "./css/characters.css";

export function Characters() {

    function showCharacter(character){

    }
    return (
        <div className="characters">
            <section className="characters-section">
            <h1>Characters</h1>
        <Grid container spacing={2} columns={10}>
            <Avatar 
            alt="Preston Caviar" 
            src="https://drive.google.com/thumbnail?id=13KwQ6M3XYhdyBAeQ7q5cAqrxGri44Am5"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
            onClick=""
             />
            <Avatar 
            alt="Mewnice Whiskerly" 
            src="https://drive.google.com/thumbnail?id=1cLhI4Fy8wmkXAwQnPQzA49dq3myWSn7F"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
             />
            <Avatar 
            alt="OctoberTengu" 
            src="https://drive.google.com/thumbnail?id=17bXwup_8wt85n_cys7Hsn9d_SVta2mFw"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
             />
              <Avatar 
            alt="Rollo" 
            src="https://drive.google.com/thumbnail?id=1zaoNL7h_1oNexoBuQTUdyUty1QioYYHa"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
             />
            <Avatar 
            alt="Tabitha" 
            src="https://drive.google.com/thumbnail?id=10LrRJTlxxOfQ_Vdl62nppqltlY8sdFij"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
             />
            <Avatar 
            alt="Suplex" 
            src="https://drive.google.com/thumbnail?id=14QiH9Y5FSqX22Am74XNOh2PatBsS_3Tj"
            sx={{ width: 200, height: 200, 
                '&:hover': { 
                    transform: "scale3d(1.20, 1.20, 1)",
                    transition: "transform 0.15s ease-in-out"
                    }
            }}
             />

        </Grid>
        <Box
      sx={{
        width: 1100,
        height: 1100,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
            </section>
            </div>
    )
}