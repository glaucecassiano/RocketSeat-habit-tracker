type Usuario = {
    idade: number
}


function mostraidadedousuario(usuario: Usuario) {
    return usuario.idade
}

const usuario = {
    name: 'Diego',
    idade: 28
}

mostraidadedousuario (usuario)

const usuario2 = {
    name: 'Diego',
    idade: 30
}

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/** metodo  HTTP: Get (buscar informaçao), 
 * Post (criar algo), 
 * Put (atulizar algo por completo), 
 * Patch (atualizar algo exclusivo), 
 * Delete (deletar algo)
 * 
 */

app.get ('/', () =>{
    const habits = prisma.habit.findMany()
    return habits


})

app.listen({
    port:3333,
})

