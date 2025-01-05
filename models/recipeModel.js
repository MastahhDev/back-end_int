import mongoose, {Schema} from "mongoose";
import moongosePaginate from "mongoose-paginate-v2";
import AuthorModel from "./authorModel.js";

const RecipeSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "AuthorModel", required: true },
    createdDate: { type: Date, default: () => Date.now() },
    stepByStep: { type: String, required: true },
    description: { type: String },
    image: { type: Buffer },
    title: { type: String, required: true },
    imageType: { type: String },
});

RecipeSchema.post("save", async (doc) => { //Increase the author's recipeCount
    await AuthorModel.findByIdAndUpdate(doc.author, { $inc: { recipesCount: 1 } });
});

RecipeSchema.post("findOneAndDelete", async (doc) => { //Delete post
    if (doc.author) {
      await AuthorModel.findByIdAndUpdate(doc.author, { $inc: { recipesCount: -1 } });
    }
});

RecipeSchema.plugin(moongosePaginate);

const RecipeModel = mongoose.model("RecipeModel", RecipeSchema);

export default RecipeModel;