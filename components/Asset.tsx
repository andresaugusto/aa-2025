import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MotionDiv } from '@/components/Motion'

interface Asset {
  index?: any
  assetType?: string
  fileType?: string
  type?: string
  source?: string
  parentProject?: string
  title?: string
  subtitle?: string
  date?: string
  description?: string[]
  technologies?: string[]
  collaborators?: string[]
}

export default function Asset({ 
  index,
  type,
  source,
  parentProject,
  title,
  subtitle,
  date,
  description,
  technologies,
  collaborators,
}: Asset) {
  return (
    <MotionDiv
      key={index}
      initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
      transition={{ duration: .75, delay: index*.5}}
    >
      <Card className="border-none shadow-md shadow-black/50 backdrop-blur-lg bg-black/50 bg-gradient-to-l from-black/90 to-black/20">
        <CardHeader>
          <MotionDiv
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 3}}
            className="mb-md"
          >
            <img className="" src={`${source ? source : ""}`} alt={title}/>
          </MotionDiv>
          <CardTitle className="text-transparent bg-gradient-to-r from-white to-white/10 bg-clip-text">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </MotionDiv>
  )
}