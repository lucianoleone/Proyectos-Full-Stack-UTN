import dotenv from 'dotenv'
dotenv.config()


const ENVIROMENT = {
    PORT: process.env.PORT,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    SECRET_JWT_KEY : process.env.SECRET_JWT_KEY,
    GMAIL_PASSWORD : process.env.GMAIL_PASSWORD,
    GMAIL_USERNAME : process.env.GMAIL_USERNAME,
    URL_BACKEND : process.env.URL_BACKEND,
    URL_FRONTEND : process.env.URL_FRONTEND,
    MYSQL_USER : process.env.MYSQL_USER,
    MYSQL_DB_NAME : process.env.MYSQL_DB_NAME,
    MYSQL_PASSWORD : process.env.MYSQL_PASSWORD,
    MYSQL_HOST : process.env.MYSQL_HOST
}

export default ENVIROMENT