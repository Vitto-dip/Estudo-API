import { soma, dobro } from './services.js'

import { Router } from 'express'

const server = Router();

server.get('/ping', (req, resp) => {
    try {
        resp.send('pong');
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/dobro/:numero' , (req, resp) => {
    try {
        const numero = Number(req.params.numero);
    
        const valor = dobro(numero);
    
        resp.send({
            dobro: valor
        })
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/soma', (req, resp) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
    
        const valor = soma(a, b);
    
        resp.send({
            soma: valor
        })
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/soma', (req, resp) => {
    try {
        const { valores:{a, b} } = req.body;
    
        //const a = req.body.a;
        //const b = req.body.b;
    
        const valor = soma(a, b);
    
        resp.send({
            soma: valor
        })
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;