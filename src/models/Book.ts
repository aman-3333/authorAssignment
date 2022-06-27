import { Document, model, ObjectId, Schema } from "mongoose";

const schema = new Schema({
    bookName: { type: String, required: true, },
  
  
    picture:[{type:String}],
  pages:{type:Number},
    price: { type: Number },
    isDeleted: {type: Boolean, default: false},
    authorId:{type: Schema.Types.ObjectId}
}, {
    timestamps: true
});

export interface IBook extends Document {
    bookName: String,


    picture: String,
    pages: Number,
    price: Number,
    isDeleted: Boolean,
    authorId: ObjectId
  
}

export default model<IBook>("book", schema);