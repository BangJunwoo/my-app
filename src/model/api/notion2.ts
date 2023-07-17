import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY })
// test 주소
const databaseId = '533d140d87a34058aa292e2de3b39e88'

export const filteredRows = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Task completed',
      checkbox: {
        equals: true,
      },
    },
  })
  return response
}

export const allSearch = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Task completed',
      checkbox: {
        equals: true,
      },
    },
  })
  return response
}
