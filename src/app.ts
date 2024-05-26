import express, { Express, Request, Response } from "express"
import cors from 'cors'
import { myDataSource } from "./config/app-data-source"
import { User } from "./entities/user.entity"


// create and setup express app
const app: Express = express()

app.use(cors())
app.use(express.json())

// register routes
// get user by id
app.get("/users/:id", async function (req: Request, res: Response) {
    let response: any;
    try {
        const results = await myDataSource.getRepository(User).findOneBy({
            id: +req.params.id,
        })
        const { password, ...user } = results;
        response = user;
    } catch (error) {
        console.log({ error });
        response = error;
    }
    return res.send(response)
})
// create an user
app.post("/users", async function (req: Request, res: Response) {
    let response: any;
    try {
        const user = await myDataSource.getRepository(User).create(req.body)
        const results = await myDataSource.getRepository(User).save(user)
        if (results) {
            response = {
                message: 'User resigstered successfully'
            }
        }
    } catch (error) {
        console.log({ error })
        response = error;
    }
    return res.send(response)
})

app.post("/login", async function (req: Request, res: Response) {
    let response: any;
    try {
        const user = await myDataSource.getRepository(User).findOneBy({ email: req.body.email })
        if (user) {
            if (user.password !== req.body.password) {
                return res.status(401).json({ message: 'Invalid credentials' })
            }
            if (user.userRole !== req.body.userRole) {
                return res.status(401).json({ message: "Unauthorised access" });
            }
            response = {
                message: 'Login successfull'
            }
        }
        else {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        console.log({ error })
        response = error;
    }
    return res.send(response)
})

export { app }