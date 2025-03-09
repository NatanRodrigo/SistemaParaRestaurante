"use client";

import { useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Box, Chip, Typography } from "@mui/material";

export default function About() {
    const [cliente, setCliente] = useState("");
    const [mesa, setMesa] = useState([]);
    const [garcom, setGarcom] = useState([]);
    const [pratos, setPratos] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [pratoSelecionado, setPratoSelecionado] = useState("");
    const [bebidaSelecionada, setBebidaSelecionada] = useState("");

    const adicionarPrato = () => {
        if (pratoSelecionado && !pratos.includes(pratoSelecionado)) {
            setPratos([...pratos, pratoSelecionado]);
        }
    };

    const adicionarBebida = () => {
        if (bebidaSelecionada && !bebidas.includes(bebidaSelecionada)) {
            setBebidas([...bebidas, bebidaSelecionada]);
        }
    };

    const salvarPedido = () => {
        alert("Pedido salvo!");
    };

    const cancelarPedido = () => {
        // Resetando os estados
        setCliente("");
        setMesa([]);
        setGarcom([]);
        setPratos([]);
        setBebidas([]);
        setPratoSelecionado("");
        setBebidaSelecionada("");
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5, width: "100%" }}>
            {/* Campo para nome do cliente */}
            <TextField
                variant="outlined"
                label="Digite o nome do cliente"
                sx={{ width: "90%", maxWidth: 1200, mb: 3 }}
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
            />

            {/* Grid para os Selects */}
            <Box sx={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: 4, 
                width: "90%", 
                maxWidth: 1200,
                justifyContent: "center"
            }}>
                <FormControl sx={{ width: "100%", minWidth: 500, maxWidth: 600 }}>
                    <InputLabel id="mesa-label">Selecione a mesa</InputLabel>
                    <Select
                        labelId="mesa-label"
                        multiple
                        value={mesa}
                        onChange={(e) => setMesa(e.target.value)}
                        renderValue={(selected) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {selected.map((value) => <Chip key={value} label={value} />)}
                            </Box>
                        )}
                    >
                        <MenuItem value="Mesa 01">Mesa 01</MenuItem>
                        <MenuItem value="Mesa 02">Mesa 02</MenuItem>
                        <MenuItem value="Mesa 03">Mesa 03</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: "100%", minWidth: 500, maxWidth: 600 }}>
                    <InputLabel id="garcom-label">Selecione o garçom</InputLabel>
                    <Select
                        labelId="garcom-label"
                        multiple
                        value={garcom}
                        onChange={(e) => setGarcom(e.target.value)}
                        renderValue={(selected) => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {selected.map((value) => <Chip key={value} label={value} />)}
                            </Box>
                        )}
                    >
                        <MenuItem value="Natan Rodrigo">Natan Rodrigo</MenuItem>
                        <MenuItem value="Lucas Souza">Lucas Souza</MenuItem>
                        <MenuItem value="Daniel Faria">Daniel Faria</MenuItem>
                    </Select>
                </FormControl>

                {/* Seção de Pratos com Botão Abaixo */}
                <FormControl sx={{ width: "100%", minWidth: 500, maxWidth: 600 }}>
                    <InputLabel id="prato-label">Selecione o prato</InputLabel>
                    <Select
                        labelId="prato-label"
                        value={pratoSelecionado}
                        onChange={(e) => setPratoSelecionado(e.target.value)}
                    >
                        <MenuItem value="Prato Principal">Prato Principal</MenuItem>
                        <MenuItem value="Strogonoff">Strogonoff</MenuItem>
                        <MenuItem value="Macarrão">Macarrão</MenuItem>
                    </Select>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={adicionarPrato}>
                        Adicionar Prato
                    </Button>
                </FormControl>

                {/* Seção de Bebidas com Botão Abaixo */}
                <FormControl sx={{ width: "100%", minWidth: 500, maxWidth: 600 }}>
                    <InputLabel id="bebida-label">Selecione uma bebida</InputLabel>
                    <Select
                        labelId="bebida-label"
                        value={bebidaSelecionada}
                        onChange={(e) => setBebidaSelecionada(e.target.value)}
                    >
                        <MenuItem value="Coca-Cola">Coca-Cola</MenuItem>
                        <MenuItem value="Suco Natural">Suco Natural</MenuItem>
                        <MenuItem value="Água">Água</MenuItem>
                    </Select>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={adicionarBebida}>
                        Adicionar Bebida
                    </Button>
                </FormControl>
            </Box>

            {/* Itens Selecionados Centralizados */}
            <Box sx={{ mt: 4, textAlign: "center", width: "90%", maxWidth: 1200, backgroundColor: "#f5f5f5", padding: 3, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Resumo do Pedido</Typography>
                <Typography variant="body1"><strong>Cliente:</strong> {cliente || "Não informado"}</Typography>
                <Typography variant="body1"><strong>Mesas:</strong> {mesa.length ? mesa.join(", ") : "Nenhuma selecionada"}</Typography>
                <Typography variant="body1"><strong>Garçons:</strong> {garcom.length ? garcom.join(", ") : "Nenhum selecionado"}</Typography>
                <Typography variant="body1"><strong>Pratos:</strong> {pratos.length ? pratos.join(", ") : "Nenhum selecionado"}</Typography>
                <Typography variant="body1"><strong>Bebidas:</strong> {bebidas.length ? bebidas.join(", ") : "Nenhuma selecionada"}</Typography>
            </Box>

            {/* Botões de Salvar e Cancelar no canto inferior */}
            <Box sx={{ 
                position: "fixed", 
                bottom: 20, 
                left: "50%", 
                transform: "translateX(-50%)", 
                display: "flex", 
                gap: 2 
            }}>
                <Button variant="contained" color="primary" onClick={salvarPedido}>
                    Salvar Pedido
                </Button>
                <Button variant="outlined" color="secondary" onClick={cancelarPedido}>
                    Cancelar
                </Button>
            </Box>
        </Box>
    );
}
