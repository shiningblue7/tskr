/* eslint-disable no-console */
const {
  PrismaClient
} = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */
console.log('start')
async function main() {
  console.log('Please define your seed data.')

  // // Change to match your data model and seeding needs
  const resultUsers = await db.user.createMany({
    data: [{
        id: 1,
        email: "noah@duffbeer.com",
        name: "Noah North"
      },
      {
        id: 2,
        email: "neil@duffbeer.com",
        name: "Neil North"
      },
    ],
    skipDuplicates: true, // Supported with Postgres database
  })
  console.log(`Created ${resultUsers.count} users!`)
  // // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
  // // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
  //return Promise.all(
  //  data.map(async (user) => {
  //    const record = await db.user.create({
  //      data: { name: user.name, email: user.email },
  //    })
  //    console.log(record)
  //  })
  //)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
