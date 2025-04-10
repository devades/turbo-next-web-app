// import { PrismaClient } from '@prisma/client';
// const PrismaClient = require('@prisma/client')

// const prisma = new PrismaClient()

import { PrismaClient } from './app/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      roles: {
        create: {
          title: 'Product Manager',
          companyName: 'Test Company A',
          active: true,
          tags: {
            create: [{
              name:'product management'
            }]
          }
        },
      },
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      roles: {
        create: [
          {
            title: 'Software Engineer',
            companyName: 'Test Company C',
            active: true,
            tags: {
              create: [{
                name:'javascript'
              }]
            }
          },
          {
            title: 'Technical Lead',
            companyName: 'Test Company B',
            active: true,
            tags: {
              create: [{
                name:'javascript'
              },
              {
                name:'leadership'
              }]
            }
          },
        ],
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })