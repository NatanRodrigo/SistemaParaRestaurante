import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function About() {
    return (
        <div>
            <TextField variant="outlined" label="Digite o nome do cliente" fullWidth  sx={{marginTop: 5}} />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Selecione a mesa</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{ m: 2,minWidth: 750 }}
                >
                    <MenuItem value={10}>Mesa 01</MenuItem>
                    <MenuItem value={20}>Mesa 02</MenuItem>
                    <MenuItem value={30}>Mesa 03</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel id="demo-simple-select-label">Selecione o garçcom</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{ m: 2,minWidth: 750 }}
                >
                    <MenuItem value={103}>Natan Rodrigo</MenuItem>
                    <MenuItem value={220}>Lucas Souza</MenuItem>
                    <MenuItem value={350}>Daniel Faria</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Selecione o prato</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{ m: 2,minWidth: 750 }}
                >
                    <MenuItem value={1033}>Prato principal</MenuItem>
                    <MenuItem value={2230}>Strognoff</MenuItem>
                    <MenuItem value={3530}>Macarrão</MenuItem>
                </Select>
                <Button variant="contained" sx={{width: 200, padding: 1, marginLeft: 2.5}}>Adicionar prato</Button>
            </FormControl>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Selecione uma bebida</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                sx={{ m: 2,minWidth: 750 }}
                >
                    <MenuItem value={1013}>Coca-Cola</MenuItem>
                    <MenuItem value={2210}>Suco natural</MenuItem>
                    <MenuItem value={3510}>Agua</MenuItem>
                </Select>
                <Button variant="contained" sx={{padding: 1, width:200, alignItems: "flex-start", left:565 }}>Adicionar bebida</Button>
            </FormControl>
        </div>
    )
}