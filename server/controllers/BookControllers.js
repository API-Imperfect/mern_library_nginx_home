const Book= require("../models/Book")

// $-title   Create a Book
// $-path    POST /api/v1/books
// $-auth    Public
exports.createBook=async (req,res,next)=>{
   try {
       const book= await Book.create(req.body);
       return res.status(201).json({success:true, data:book})
   } catch (error) {
       return res.status()
   }
}
