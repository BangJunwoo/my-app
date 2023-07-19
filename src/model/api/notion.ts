import 'server-only'

export const filteredRows = async (databaseId: string, data: any) => {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

export const retieve = async (pageId: string) => {
  const response = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
  })
  return await response.json()
}
// import { Client } from '@notionhq/client'

// const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY })
// // 클라이언트가 에러가 있어서 fetch 로 수정
// export const filteredRows = async () => {
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       property: 'Task completed',
//       checkbox: {
//         equals: true,
//       },
//     },
//   })
//   return response
// }
