import mongoose from 'mongoose';
import ENVIROMENT from './enviroment.config.js';


const connectToMongoDB = async () => {
    try {
    const response = await mongoose.connect(ENVIROMENT.MONGO_DB_URL);
    console.log('conexion exitosa con mongoDB ', mongoose.connection.name)
    } catch (error) {
        console.log('Ocurrio un error al conectarse a mongoDB', error)
        
    }
}

connectToMongoDB();

export default mongoose
