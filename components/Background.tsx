const background = {
  title: "aA (portfolio)",
  poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-demo-wide-1080p-filtered-poster.png",
  // mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.mp4",
  mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p.mp4",
  webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.webm",
}
interface BackgroundVideoProps {
  src?: string,
}
export default function Background({src}: BackgroundVideoProps) {
  return(
    <div className="fixed h-[100svh] w-[100svw] scroll-none flex justify-center align-center brightness-[50%]">
      <video autoPlay muted loop poster={background.poster} className="fixed scroll-none object-cover scale-150 h-[100svh] w-[100svw]">
          <source src={src || background.mp4} type="video/mp4"/>
      </video>
    </div>
  )
}