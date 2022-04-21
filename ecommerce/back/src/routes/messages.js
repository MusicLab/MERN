import express, { Request, Response, NextFunction } from 'express';
import Messages from "../services/Messages";

const router = express.Router()
const messages = new Messages()

router.post('/new', (Request, Response) => {
    const body = req.body;
    if (!body.email || !body.message) {
        return res.status(400).json({
            error: 'Deben ingresar mail y mensaje'
        })
    }
    messages.addMessage(body)
    return res.json(
        messages
    );
})

router.get(
    '/get',
    async (req, res, next) => {
        try{
            const response = await messages.getMessages()
            res.json(response)
            next()
        }
        catch(err){
            res.status(400).json({
                error: 'Ocurrió un error al obtener los mensajes'
            })
        }
        
    })


export default router;