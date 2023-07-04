// 호출 api를 가져와 사용하는 함수를 만든다
// 데이터 타입과 함수 선언으로 인터페이스를 정의
import * as z from 'zod'
import { name, subject, email, message } from '@/model/validate/zod'

export const schema = z.object({
  name,
  subject,
  email,
  message,
})
export type Schema = z.infer<typeof schema>

export const keyList = schema.keyof().options
