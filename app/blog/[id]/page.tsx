import { getBlogPost } from '@/lib/notion'
import Link from 'next/link'

interface PageProps {
  params: { id: string }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getBlogPost(params.id)

  if (!post) {
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

  const { page, blocks } = post

  const renderBlocks = (blocks: any[]) => {
    return blocks.map((block: any) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={block.id} className="mb-4">{block.paragraph.rich_text[0]?.plain_text || ''}</p>
        default:
          return null
      }
    })
  }

  return (
    <div className="container mx-auto px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{page.properties.Name.title[0]?.plain_text || 'Untitled'}</h1>
        <div className="mb-4 text-lightGray">
          <span>{new Date(page.properties.Date?.date?.start || Date.now()).toLocaleDateString()}</span> • 
          <span>{page.properties.Category?.select?.name || 'Uncategorized'}</span>
        </div>
        <div className="prose prose-invert max-w-none">
          {renderBlocks(blocks)}
        </div>
        <Link href="/blog" className="inline-block mt-8 text-accentBrown hover:underline">
          ← Back to Blog
        </Link>
      </article>
    </div>
  )
}
