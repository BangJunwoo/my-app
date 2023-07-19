'use client'

// import Input from '@/components/inputTextLabel/inputTextLabel'
import Input from '@/components/inputTextLabelError/inputTextLabelError'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, keyList } from '@/repository/submit'
import type { Schema } from '@/repository/submit'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  // 각각 다른 Input type이나 이벤트가 필요한 경우도 생기기 때문에 더 이상 모듈화하는 것은 너무 많은 규약을 만들어낸다고 판단된다
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      {keyList.map((key) => {
        return <Input key={key} {...register(key)} errors={errors[key]} w="100%" h="44px" />
      })}

      <input type="submit" />
    </form>
  )
}

export default App
