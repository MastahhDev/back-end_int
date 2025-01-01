import RecipeModel from "../../models/recipeModel";

const validSortFields = ["createdDate", "title", "description"];

export const getAllRecipes = async (req, res) => {
    try {
        const { //Request data
            page,
            pageSize,
            title,
            sortBy = "createdDate",
            order = "desc",
        } = req.query;

        if (!validSortFields.includes(sortBy)) { //If the sort field isn't on validSortFields
            return res.status(400).json({ message: "Invalid sort field." });
        }

        const filters = {}; //Code to filter by title
        if (title) {
          filters.title = { $regex: title, $options: "i" };
        }

        const options = { //Sorter options
            page: parseInt(page, 10),
            limit: parseInt(pageSize, 10),
            sort: { [sortBy]: order === "desc" ? -1 : 1 },
            populate: {
              path: "author",
              select: "name email",
            },
        };

        const recipes = await RecipeModel.paginate(filters, options);

        res.status(200).json({ //Response data
            data: recipes.docs,
            meta: {
              currentPage: recipes.page,
              totalPages: recipes.totalPages,
              totalDocuments: recipes.totalDocs,
              limit: recipes.limit,
              hasNextPage: recipes.hasNextPage,
              hasPrevPage: recipes.hasPrevPage,
            },
          });

    } catch (error) {
        console.error("Error obtaining recipes:", error);
        res.status(500).json({ message: "Error obtaining recipes", error: error.message });
    }
}