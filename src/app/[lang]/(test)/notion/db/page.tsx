import 'server-only'
import {
  QueryDatabaseResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
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

  console.log(result)
  return (
    <div>
      {result.results.map((text, index) => {
        // 타입 단언 필요
        return (
          <div key={index}>
            <p>{text.object}</p>
            <p>{text.id}</p>
            {/* <p>{text.url ? text.url : '빈 값'}</p> */}
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default page
