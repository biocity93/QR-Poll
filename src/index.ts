import { PrismaClient } from '@prisma/client'

// use `prisma` in your application to read and write data in your DB

const main =async () => {
    const prisma = new PrismaClient()
    const newUser = await prisma.user.create({
        data:{
            name: '',
            email: '',
        },
    })
    const users = await prisma.user.findMany()
    
}

console.log("hello test");