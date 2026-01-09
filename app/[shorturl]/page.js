import { redirect, notFound } from "next/navigation"
import clientPromise from "@/lib/mongodb"   

export default async function Page({ params }) {
    try {
        const { shorturl } = await params
        
        if (!shorturl) {
            redirect('/')
        }
        
        const client = await clientPromise
        const db = client.db("bit-links")
        const collection = db.collection("url")

        const existing = await collection.findOne({ shorturl: shorturl })
        
        if (existing && existing.url) {
            redirect(existing.url)
        } else {
            notFound()
        }
    } catch (error) {
        console.error('Error fetching short URL:', error)
        // If it's not a redirect error, show 404
        if (error.message && error.message.includes('NEXT_REDIRECT')) {
            throw error
        }
        notFound()
    }
}