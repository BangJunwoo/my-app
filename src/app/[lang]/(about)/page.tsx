import VideoComp from '@/components/videoWrap/FullScreenVideoWrap'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      {' '}
      <VideoComp src="/video/STEPIN.mp4" />
      <p>Test는 /test로</p>
    </div>
  )
}

export default page
