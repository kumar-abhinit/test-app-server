import { myDataSource } from "./app-data-source"


async function connectdb() {
    try {
        const dS = await myDataSource.initialize()
        if (dS.isInitialized) {
            console.log("Datasource inilialised")
        }
    } catch (error) {
        console.log({ error })
    }
}

export default connectdb;