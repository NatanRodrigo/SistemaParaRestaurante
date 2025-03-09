import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import Select from "@mui/material/Select";

function Selectmesa() {
    const [prato, setPrato] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPrato(event.target.value);
    };
    return (
        <FormControl variant='filled' sx={{ m: 2,minWidth: 750 }}>
            <InputLabel id='demo-simple-select-filled-label'>Selecione a mesa</InputLabel>
            <Select labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={prato}
                onChange={handleChange}
            >
                <MenuItem value=''>Nenhum</MenuItem>
                <MenuItem value={0}>Mesa 01</MenuItem>
                <MenuItem value={1}>Mesa 02</MenuItem>
                <MenuItem value={2}>Mesa 03</MenuItem>
                <MenuItem value={3}>Mesa 04</MenuItem>
                <MenuItem value={3}>Mesa 05</MenuItem>
                <MenuItem value={3}>Mesa 06</MenuItem>
            </Select>
        </FormControl>

    );
}

export default Selectmesa;