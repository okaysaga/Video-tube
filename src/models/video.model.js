import { JsonWebTokenError } from "jsonwebtoken";
import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
         videoFile:{
            type: String,
            required: true,
         },
         thumbnail:{
            type: String,
            required: true,
         },
         title:{
            type: String,
            required: true,
         },
         description:{
            type: String,
            required: true,
         },
         duration:{
            type:Number,
            required: true
         },
         views:{
            type: Number,
            default: 0
         },
         isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }

)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 8)
    next()              //it act only when we update password
})

userSchema.methods.isPasswordCorrect = async function(password)
{
    return await bcrypt.compare(password, this.password)   //it gives true or false that it matches with pw or not
}


userSchema.methods.generateAccessToken = function(){
   return Jwt.sign(
        {
            _id:this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    
    }

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)