import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MotionDiv } from '@/components/Motion'

interface SkillCardProps {
  key?: React.Key
  icon?: any
  title?: string
  description?: string
}

export default function SkillCard({ key, icon: Icon, title, description }: SkillCardProps) {
  return (
    <Card className="border-none shadow-md shadow-black/50 backdrop-blur-lg bg-black/50 bg-gradient-to-l from-black/90 to-black/20">
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
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}