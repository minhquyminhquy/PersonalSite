import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function getBlogPosts() {
  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID
    if (!databaseId) {
      throw new Error('NOTION_BLOG_DATABASE_ID is not set')
    }
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })
    return response.results
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(pageId: string) {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId })
    const blocks = await notion.blocks.children.list({ block_id: pageId })
    return { page: response, blocks: blocks.results }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

