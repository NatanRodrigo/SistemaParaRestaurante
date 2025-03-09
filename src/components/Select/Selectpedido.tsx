import { Button, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Select from "@mui/material/Select";

function Selectpedido() {
    const [prato, setPrato] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPrato(event.target.value);
    };
    return (
        <FormControl variant='filled' sx={{ m: 2,minWidth: 750 }}>
            <InputLabel id='demo-simple-select-filled-label'>Selecione o prato</InputLabel>
            <Select labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={prato}
                onChange={handleChange}
            >
                <MenuItem value=''>Nenhum</MenuItem>
                <MenuItem value={0}>Strognoff</MenuItem>
                <MenuItem value={1}>Macarrão na chapa</MenuItem>
                <MenuItem value={2}>File mion</MenuItem>
                <MenuItem value={3}>Picanha</MenuItem>
                <MenuItem value={3}>Sushi</MenuItem>
                <MenuItem value={3}>Churrasco</MenuItem>
            </Select>
            <Button variant="contained" sx={{m: 2 ,minWidth: 100}}>Adicionar prato</Button>
        </FormControl>

    );
}

export default Selectpedido;