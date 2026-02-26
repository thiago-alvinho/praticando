import mongoose from 'mongoose'

async function conectarAoBanco() {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectarAoBanco;