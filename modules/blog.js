var mongoose=require("mongoose");




// create the module 
var PostSchema=new mongoose.Schema(
{
	//blog title
	title:String,
	// blog url
	url:String,
	// blog desc
	desc:String,
	//date of creation
	creation_date:{
		type:Number,
		default:Date.now()
	},
	comments:[
         {
			type:mongoose.Schema.Types.ObjectId,
			ref:"Comment"
		}
	],
	author:
	{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		name:"String"
	}

});

// export it 
module.exports=mongoose.model("Post",PostSchema);