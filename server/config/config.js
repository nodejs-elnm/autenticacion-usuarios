// ==========
//  PUERTO
process.env.PORT = process.env.PORT || 3000;


// ==========
//  Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ==========
//  DDBB
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeDB';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;


// ==========
//  Caducidad de Token 60s * 60m * 60h * 15d
process.env.EXPIRATION_TOKEN =  60 * 60 * 24 * 15 ;

// ==========
//  SEED de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

