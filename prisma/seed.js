const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CustomerData = [
  { firstname: 'srimukda', lastname: 'Yanasri', email: 'srimukda@ggg.mail', phone: '0954057224', address: '205' },
  { firstname: 'siwakorn', lastname: 'Phongprom', email: 'siwakorn@ggg.mail', phone: '0954057224', address: '205' },
  { firstname: 'thanasak', lastname: 'Yanasri', email: 'thanasak@ggg.mail', phone: '0954057224', address: '205' },
];

const RoomData = [
  { roomtype: 'srimukda', rate: '3500', status: 'full' },
  { roomtype: 'siwakorn', rate: '3500', status: 'full' },
  { roomtype: 'thanasak', rate: '3500', status: 'full' },
];

const ReservationData = [
  {checkIn: new Date(), checkOut: new Date(), CustomerId: 1 ,RoomId : 1, status: 'Confirmed'},
  {checkIn: new Date(), checkOut: new Date(), CustomerId: 1 ,RoomId : 1, status: 'Confirmed'},
  {checkIn: new Date(), checkOut: new Date(), CustomerId: 2 ,RoomId : 2, status: 'Confirmed'},
  {checkIn: new Date(), checkOut: new Date(), CustomerId: 3 ,RoomId : 3, status: 'Confirmed'},
 ];
 

const run = async () => {
  // await prisma.customer.deleteMany({});
  // await prisma.customer.createMany({
  //   data: CustomerData,
  // });

  // await prisma.room.deleteMany({});
  // await prisma.room.createMany({
  //   data: RoomData,
  // });

  await prisma.reservation.deleteMany({});
  await prisma.reservation.createMany({
    data: ReservationData,
  });

  await prisma.$disconnect();
};

run();
