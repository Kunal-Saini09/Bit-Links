import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export async function POST(request) {
    const body=await request.json()
    const client = await clientPromise
    const db = client.db("bit-links")
    const collection = db.collection("url")

    //check if short url exsist
    const existing = await collection.findOne({ shorturl: body.shorturl })
    if (existing) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists' })
    }
    const result = await collection.insertOne({
        url: body.url,
        shorturl:body.shorturl
    })
  return Response.json({success:true, error:false,message: 'URL generated successfully' })
}