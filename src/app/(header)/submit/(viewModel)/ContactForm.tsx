'use client'

import Input from '@/components/inputTextLabel/inputTextLabel'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ZodError } from 'zod'
import { name, subject, email, message } from '@/model/validate/zod'

const schema = z.object({
  name,
  subject,
  email,
  message,
})

console.log(schema.parse({ name: '이름', message: 'test' }))
console.log('jod 객체 보기', schema)
type Schema = z.infer<typeof schema>

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<Schema>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  console.log('에러', errors)
  console.log('검증 중', isValidating)
  console.log('제출 중 ( 제출 중에 의해 기본적으로 두번 렌더링 된다', isSubmitting)

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Input {...register('name')} />
      <Input {...register('email')} type="text" />
      <Input {...register('subject')} type="text" />
      <Input {...register('message')} type="text" />
      <Input type="submit" />
    </form>
  )
}

export default App
