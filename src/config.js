export default {
    PORT: process.env.PORT || 8080,
    mongoLocal: {
        
    },
    mongoRemote: {
        
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
