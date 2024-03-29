import 'dotenv/config'

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    table: process.env.DB_TABLA_CONTENIDOS,
    table: process.env.DB_TABLA_JUEGOS,
    table: process.env.DB_TABLA_PREGUNTAS,
    table: process.env.DB_TABLA_RESPUESTAS,
    options: {
      trustServerCertificate: true,
      trustedConnection: true,
    },
  };
  
  export default config;