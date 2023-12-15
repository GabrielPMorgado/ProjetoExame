import express from 'express';
import path from 'path';

const porta = 3000;
const host = '0.0.0.0';

app.listen(porta, host, () => {
    console.log(`Servidor executando na url http://${host}:${porta}`);
});