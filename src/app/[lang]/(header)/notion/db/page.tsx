import 'server-only'
import { QueryDatabaseResponse, QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import { notionDB } from '@/repository/notion'

type Props = {}
const date = Date.now()
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
} as const
const intl = new Intl.DateTimeFormat('ko-KR', options).format(date)

const query = {
  filter: {
    property: 'Task completed',
    checkbox: {
      equals: true,
    },
  },
}

const page = async (props: Props) => {
  // revalidate는 seconds 단위다
  const result: QueryDatabaseResponse = await notionDB('533d140d87a34058aa292e2de3b39e88', query)

  return (
    <div>
      {/* <div>{JSON.stringify(result.results, null, 2)}</div> */}
      {result.results.map((text, index) => {
        return (
          <div key={index}>
            {JSON.stringify(text, null, 2)}
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default page
