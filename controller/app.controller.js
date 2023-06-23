const {portfolioModel} = require ("../model/portfolio_model");
const {testimonialModel} = require ("../model/testimonial_model");


exports.portfolioApp = async (req,res) => {
   try{
    items = await portfolioModel.find({});
    return res.status(200).send({
        message : "success",
        data: items
    })

     } catch(error){
    res.status(500).json({error: "internal server error"});
    }

}


exports.testimonialApp = async (req,res) => {
    try{
     items = await testimonialModel.find({});
     return res.status(200).send({
         message : "success",
         data: items
     })
 
      } catch(error){
     res.status(500).json({error: "internal server error"});
     }
 
 }