import { error } from "console";
import schema from "../schema";
import { NextRequest,NextResponse } from "next/server";
export async function GET(request:NextRequest,{params}:{params:{id:number}}) {
if(params.id>10)
return NextResponse.json({error:'user not found'},{status:404});
return NextResponse.json({id:1,name:"Saksham"});
}
export async function PUT( request:NextRequest,  {params}:{params:{id:number}}) {
const body= await request.json();
const validation=schema.safeParse(body);
if(!validation.success)
return NextResponse.json(validation.error.errors,{status:400})
if(params.id>10)
return NextResponse.json({error:'user not found'},{status:404});
return NextResponse.json({id:1,name:body.name},{status:200});
}
export async function DELETE(request:NextRequest,{params}:{params:{id:number}}){
if(!body.name)
return NextResponse.json({error:"Name is required"},{status:400})
return NextResponse.json({});

}