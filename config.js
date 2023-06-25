const production = {
    PORT: 3000,
    DB: {
        host: "localhost",
        port: 3306,
        user: 'bnbsso',
        password: 'test1234',
        database: 'bnbssoapi'
    },
    JWT: {
        option: {
            algorithm: 'HS256',
            issuer: "ezcode",
        },
        SECRET: 'bae2f940-8e20-43af-8e4b-4b8fbde272cb'
    }

}
const development = {
    PORT: 20200,
    DB: {
        host: "localhost",
        port: 3306,
        user: 'bnbsso',
        password: 'test1234',
        database: 'bnbssoapi'
    },
    REDIS: {
        host: 'localhost',
        port: 6379
    },
    JWT: {
        option: {
            algorithm: 'HS256',
            issuer: "ezcode",
        },
        SECRET: 'bae2f940-8e20-43af-8e4b-4b8fbde272cb'
    }
}

const config = { production, development };
module.exports = process.env.NODE_ENV !== 'production' ? development : production;
