import React, { useEffect, useState } from "react"
import { Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const App = () => {

  return (
    <div>
      <FormControl fullWidth>
  <InputLabel id="Color">Choose your lightsaber</InputLabel>
  <Select
    labelId="lightsaber"
    id="lightsaber"
    value="lightsaber"
    label="Lightsaber"
    
  >
    <MenuItem value="Blue">Blue</MenuItem>
    <MenuItem value="Green">green</MenuItem>
    <MenuItem value="Red">Red</MenuItem>
  </Select>

  <InputLabel id="SithorJedi">Sith or Jedi?</InputLabel>
  <Select
    labelId="lightsaber"
    id="lightsaber"
    value="lightsaber"
    label="Lightsaber"
    
  >
    <MenuItem value="Sith">Sith</MenuItem>
    <MenuItem value="Jedi">Jedi</MenuItem>
  </Select>

  
</FormControl>
      
       
          
     
      
<Button variant="contained">Küldés</Button>

    </div>
  )
}

export default App
