import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve a list of transaction categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    // Retrieve user-specific categories
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const categories = await prisma.category.findMany({
      where: { userId },
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET route to retrieve a specific category by ID
export const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id, 10); // Extract the category ID from the URL
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST route to create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { title, imageUrl } = req.body;
    const userId = req.user.id; // Assuming you have the user ID in req.user

    const newCategory = await prisma.category.create({
      data: {
        title,
        imageUrl,
        userId,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT route to update an existing category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id, 10); // Extract the category ID from the URL
    const { title, imageUrl } = req.body;

    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: {
        title,
        imageUrl,
      },
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE route to delete a category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id, 10); // Extract the category ID from the URL

    await prisma.category.delete({
      where: { id: categoryId },
    });

    res.status(204).end(); // No content in response
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
