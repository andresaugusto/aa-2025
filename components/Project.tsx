import { MotionDiv } from '@/components/animation/Motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import Asset from './Asset'

interface ProjectProps {
  index: any
  title: string
  description: string
  image?: string,
}

export default function Project({ index, title, description, image }: ProjectProps) {

  return (
    <MotionDiv
      key={index}
      initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
      transition={{ duration: .75, delay: index*.5}}
    >
      <Card>
        <CardHeader>
          <MotionDiv
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 3}}
            className="mb-md h-xl"
          >
            <img 
              src={image}
              alt="title"
              className="w-100 object-cover"
            />
          </MotionDiv>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <Carousel className="w-50">
            <CarouselContent className="-ml-1">
              {assets && assets.length>0 && assets.map((asset: Record<string, any>, index: any) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Asset index={index} title={asset.title} description={asset.description} source={asset.source} />
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent> */}
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </MotionDiv>
  )
}