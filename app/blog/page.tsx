import Link from 'next/link'
import { getBlogPosts } from '@/lib/notion'

export default async function Blog() {
  const posts = await getBlogPosts()

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="text-lightGray">No blog posts available at the moment. Please check back later.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
              <span className="text-sm text-accentBrown mb-2 block">
                {post.properties.Category?.select?.name || 'Uncategorized'}
              </span>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-accentBrown transition-colors">
                {post.properties.Name?.title[0]?.plain_text || 'Untitled'}
              </h2>
              <p className="text-lightGray">
                {post.properties.Excerpt?.rich_text[0]?.plain_text || 'No excerpt available'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

