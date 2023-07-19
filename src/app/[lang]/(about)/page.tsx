import Landing from './(landing)'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <section id="landing">
        <Landing />
      </section>

      <p>Test는 /test로</p>
    </div>
  )
}

export default page
