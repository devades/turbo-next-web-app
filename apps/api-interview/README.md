# Notes

## Prisma install

https://www.prisma.io/docs/getting-started/quickstart-sqlite

```
pnpm i sqlite3 @prisma/client
pnpm i -D prisma
npx prisma init --datasource-provider sqlite --output ../generated/prisma
npx prisma migrate dev --name init
npx prisma generate

```

### Major Prisma Gotcha !!! 

Prisma - cannot import or require() client instance
-see https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client

Extremely hard to find!

#### warning
In Prisma ORM 7, Prisma Client will no longer be generated in node_modules by default and will require an output path to be defined. Learn more below on how to define an output path.

```
npm install prisma --save-dev
```

Add the following generator definition to your Prisma schema:
```
generator client {
  provider = "prisma-client-js"
  output   = "app/generated/prisma/client"
}
```

Install the @prisma/client npm package &
Generate Prisma Client with the following command:
```
npm install @prisma/client
prisma generate
```

You can now instantiate Prisma Client in your code:
```
import { PrismaClient } from 'app/generated/prisma/client'
const prisma = new PrismaClient()
```