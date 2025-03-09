import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Select from "@mui/material/Select";

function Selectgarcom() {
    const [prato, setPrato] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPrato(event.target.value);
    };
    return (
        <FormControl variant='filled' sx={{ m: 2,minWidth: 750 }}>
            <InputLabel id='demo-simple-select-filled-label'>Escolha um garçcom</InputLabel>
            <Select labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={prato}
                onChange={handleChange}
            >
                <MenuItem value=''>Nenhum</MenuItem>
                <MenuItem value={0}>Natan Rodrigo</MenuItem>
                <MenuItem value={1}>Lucas Souza</MenuItem>
                <MenuItem value={2}>Matheus Silva</MenuItem>
                <MenuItem value={3}>Daniel Faria</MenuItem>
                <MenuItem value={3}>Mariana Teixeira</MenuItem>
                <MenuItem value={3}>Marcela Rodrigues</MenuItem>
            </Select>
        </FormControl>

    );
}

export default Selectgarcom;