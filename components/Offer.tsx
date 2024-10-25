import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MotionDiv } from '@/components/Motion'

interface OfferProps {
  index?: any
  icon?: any
  title?: string
  description?: string
}

export default function Offer({ index, icon: Icon, title, description }: OfferProps) {
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
            className="mb-md"
          >
            <Icon className="text-green-400 animate-pulse"/>
          </MotionDiv>
          <CardTitle className="text-transparent bg-gradient-to-r from-white to-white/10 bg-clip-text">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </MotionDiv>
  )
}