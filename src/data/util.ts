
export function getMongoUrl(config: {user?: string; password?: string; address: string, database: string}): string{
    if( config.user && config.password )
        return `mongodb://${config.user}:${config.password}@${config.address}/${config.database}?authSource=admin`;
    else
        return `mongodb://${config.address}/${config.database}`;
}