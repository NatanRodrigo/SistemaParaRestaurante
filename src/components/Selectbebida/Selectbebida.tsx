import { Button, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Select from "@mui/material/Select";

function Selectbebida() {
    const [bebida, setBebida] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setBebida(event.target.value);
    };
    return (
        <FormControl variant='filled' sx={{ m: 2,minWidth: 750 }}>
            <InputLabel id='demo-simple-select-filled-label'>Selecione a bebida</InputLabel>
            <Select labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={bebida}
                onChange={handleChange}
            >
                <MenuItem value=''>Nenhum</MenuItem>
                <MenuItem value={15}>Coca-cola</MenuItem>
                <MenuItem value={31}>Suco natural laranja</MenuItem>
                <MenuItem value={23}>Suco natural morango</MenuItem>
                <MenuItem value={35}>Agua com gás</MenuItem>
                <MenuItem value={36}>Agua sem gás</MenuItem>
                <MenuItem value={39}>Fanta laranja</MenuItem>
            </Select>
            <Button variant="contained" sx={{m: 2 ,minWidth: 100}}>Adicionar bebida</Button>
        </FormControl>
        
    );
   
    
}

export default Selectbebida;