import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { hashPassword } from '../src/app.util';

const prisma = new PrismaClient();
async function main() {
  const newUser = await prisma.user.create({
    data: {
      uuid: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      sex: faker.person.sex(),
      password: await hashPassword('test'),
      birthDate: faker.date.anytime(),
      address: faker.location.streetAddress(),
      skills: 'angular',
      Education: {
        create: {
          schoolName: faker.word.noun(),
          startDate: faker.date.anytime(),
          endDate: faker.date.anytime(),
          details: faker.lorem.paragraph(),
        },
      },
      Experience: {
        create: {
          companyName: faker.company.name(),
          jobTitle: faker.person.jobTitle(),
          startDate: faker.date.anytime(),
          endDate: faker.date.anytime(),
          details: faker.lorem.paragraph(),
        },
      },
    },
  });
  console.log(newUser);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
