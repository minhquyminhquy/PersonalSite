import { getBlogPost } from '@/lib/notion'
import Link from 'next/link'

export default async function BlogPost() {

  if (true) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="text-lightGray mb-4">Sorry, the requested blog post could not be found.</p>
        <Link href="/blog" className="text-accentBrown hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }
} 