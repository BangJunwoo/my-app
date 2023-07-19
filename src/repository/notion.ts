import { QueryDatabaseResponse, QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

export const notionDB = async (databaseId: string, body: any): Promise<QueryDatabaseResponse> => {
  //test : 533d140d87a34058aa292e2de3b39e88

  const data = await fetch(`http://localhost:3000/api/notion/db/${databaseId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    next: { revalidate: 600 },
  })
  return await data.json()
}
