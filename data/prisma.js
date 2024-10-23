const { PrismaClient } = require('@prisma/client');
const { PrismaD1 } = require('@prisma/adapter-d1');

// 创建 Prisma 客户端实例，并使用 D1 适配器
const prisma = new PrismaClient({
    adapter: new PrismaD1({
        databaseUrl: 'd1:10f27a51-4088-45c1-a1a4-0e55312510ae',
    }),
});

export default prisma;