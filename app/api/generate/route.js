import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        // Parse request body
        const body = await request.json()
        
        // Validate inputs
        if (!body.url || !body.shorturl) {
            return Response.json(
                { success: false, error: true, message: 'URL and short URL are required' },
                { status: 400 }
            )
        }

        // Validate URL format
        try {
            new URL(body.url)
        } catch (e) {
            return Response.json(
                { success: false, error: true, message: 'Invalid URL format' },
                { status: 400 }
            )
        }

        // Validate shorturl (alphanumeric and hyphens only)
        if (!/^[a-zA-Z0-9-_]+$/.test(body.shorturl)) {
            return Response.json(
                { success: false, error: true, message: 'Short URL can only contain letters, numbers, hyphens, and underscores' },
                { status: 400 }
            )
        }

        // Connect to MongoDB
        const client = await clientPromise
        const db = client.db("bit-links")
        const collection = db.collection("url")

        // Check if short url exists
        const existing = await collection.findOne({ shorturl: body.shorturl })
        if (existing) {
            return Response.json(
                { success: false, error: true, message: 'Short URL already exists' },
                { status: 409 }
            )
        }
        
        // Insert new URL
        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            createdAt: new Date()
        })

        return Response.json(
            { success: true, error: false, message: 'URL generated successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error in generate API:', error)
        return Response.json(
            { success: false, error: true, message: 'Failed to generate short URL. Please try again.' },
            { status: 500 }
        )
    }
}