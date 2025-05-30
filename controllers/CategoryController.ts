import { CategoryService } from "../services/CategoryService";

export class CategoryController {
    static async create({ name, description }: { 
     name: string;
     description?: string;
    }) {
        return await CategoryService.create({ name, description });
    }

    static async getById(id: number) {
        const category = await CategoryService.findById(id);
        if (!category) throw new Error("Category not found");
        return category;
    }

    static async getAll() {
        return await CategoryService.findAll();
    }

    static async delete(id: number) {
     await CategoryService.delete(id);
     return { message: "Category deleted successfully" };
    
    }
}