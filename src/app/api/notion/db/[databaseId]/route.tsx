import { NextResponse, NextRequest } from 'next/server'
import { filteredRows } from '@/model/api/notion'

export async function POST(request: NextRequest, { params }: { params: { databaseId: string } }) {
  const body = await request.json()
  console.log(body, params.databaseId)

  const data = await filteredRows(params.databaseId, body)
  return NextResponse.json(data)
}

// .json에서 안에 한 번 더 감싸서 여러 데이터를 추가할 수 있긴 하지만 json 드릴링을 줄이기 위해 사용하지 않는다
