import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export async function getStaticProps() {
  // Read both markdown files
  const instructionsPath = path.join(process.cwd(), 'cat-cafe-instructions.md')
  const schematicPath = path.join(process.cwd(), 'cat-cafe-schematic.md')

  const [instructionsContent, schematicContent] = await Promise.all([
    fs.readFile(instructionsPath, 'utf8'),
    fs.readFile(schematicPath, 'utf8')
  ])

  // Parse the markdown content
  const instructions = matter(instructionsContent)
  const schematic = matter(schematicContent)

  // Convert markdown to HTML
  const instructionsHtml = marked(instructions.content)
  const schematicHtml = marked(schematic.content)

  return {
    props: {
      instructions: instructionsHtml,
      schematic: schematicHtml
    },
  }
}

export default function Home({ instructions, schematic }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div dangerouslySetInnerHTML={{ __html: instructions }} />
      <div dangerouslySetInnerHTML={{ __html: schematic }} />
    </div>
  )
}