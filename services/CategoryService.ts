import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CategoryService = {
    async create(data: { 
        name: string;
        description?: string;
    }) {
        return await prisma.category.create({ data });
    },

    async findById(id: number) {
        return await prisma.category.findUnique({ where: { id } });
    },

    async findAll() {
        return await prisma.category.findMany();
    },

    async delete(id: number) {
        return await prisma.category.delete({ where: { id } });
    }
};