// import { Client } from '@notionhq/client'

// const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY })
// // 클라이언트가 에러가 있어서 fetch 로 수정

const databaseId = '533d140d87a34058aa292e2de3b39e88'

export const filteredRows = async () => {
  const data = {
    filter: {
      property: 'Task completed',
      checkbox: {
        equals: true,
      },
    },
  }

  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  // const result = await response.json()

  return await response.json()
}
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
