import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer.";

connect()


export async function POST(request: NextRequest){

    const reqBody = await request.json();
    const {email,username} = reqBody;
 
    const user = await User.findOne({username:username,email:email});
    if(!user){
        NextResponse.json({error:"invalid credentials"},{status:500});
    } 
    await sendEmail({email,emailType:"RESET",userId:user._id})
}