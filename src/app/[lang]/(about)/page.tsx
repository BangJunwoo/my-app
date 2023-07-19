import Landing from './(landing)'

type Props = {}

const page = (props: Props) => {
  return (
    <main>
      <section id="landing">
        <Landing />
      </section>

      <p>Test는 /test로</p>
    </main>
  )
}

export default page
