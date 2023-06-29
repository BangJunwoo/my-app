import * as z from 'zod'
import * as i18n from './i18n'

export const name = z.string().min(1, { message: '필수 항목 입니다' })
export const subject = z.string().optional()
export const email = z.string().email().default('mineclover@naver.com')
export const message = z
  .string({ required_error: '필수' + i18n.message.required_error })
  .min(1, { message: i18n.message.required_error })
  .max(50000)
