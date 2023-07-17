import 'server-only'
import axios, { AxiosResponse } from 'axios'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

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

const page = async (props: Props) => {
  const data = await fetch('http://localhost:3000/api/notion/test', { method: 'post' })
  const result: QueryDatabaseResponse = await data.json()
  console.log('page 결과', result)

  return (
    <div>
      <h1 suppressHydrationWarning={true}>{intl}</h1>

      <div>{JSON.stringify(result.results, null, 2)}</div>
      {/* {result.map((text, index) => {
        return (
          <div key={index}>
            {JSON.stringify(text, null, 2)}
            <hr />
          </div>
        )
      })} */}
    </div>
  )
}

export default page
