import { NextResponse } from 'next/server'
import { filteredRows, allSearch } from '@/model/api/notion'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

export async function GET() {
  const data = await allSearch()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const data = await filteredRows()
  return NextResponse.json(data)
}

// .json에서 안에 한 번 더 감싸서 여러 데이터를 추가할 수 있긴 하지만 json 드릴링을 줄이기 위해 사용하지 않는다
