export default {
    PORT: process.env.PORT || 8080,
    mongoLocal: {
        
    },
    mongoRemote: {
        mongoUrl: 'mongodb+srv://javiaps94:javiaps94@cluster0.rcf6c.mongodb.net/sesiones?retryWrites=true&w=majority',
        mongoOptions: advancedOptions        
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './DB/ecommerce.sqlite'
        },
        useNullAsDefault: true,
        debug: true        
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'my-secret-pw',
            database: 'coderhouse'
        }        
    },
    fileSystem: {
        path : './DB'
    }
}
