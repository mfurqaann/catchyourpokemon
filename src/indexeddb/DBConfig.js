export const DBConfig = {
   name: 'MyDB',
   version: 1,
   objectStoresMeta: [
      {
         store: 'pokemonStorage',
         storeConfig: { keyPath: 'id', autoIncrement: true },
         storeSchema: [
            { name: 'id', keypath: 'id', options: { unique: true } },
            { name: 'name', keypath: 'name', options: { unique: false } },
            { name: 'img', keypath: 'img', options: { unique: false } },
         ],
      },
   ],
}
