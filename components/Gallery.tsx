import { galleryItems } from '@/lib/data'
import GalleryCollections from '@/components/GalleryCollections'
import Section from '@/components/Section'

export default function Gallery() {
  return (
   <Section title="Work Gallery">
     <div className="container mx-auto">
       <div className="space-y-4">
         {galleryItems.map((item: Record<string, any>, index: any) => (
            <GalleryCollections index={index} title={item.title} description={item.description} image={item.image} />
         ))}
       </div>
     </div>
   </Section>
  )
}