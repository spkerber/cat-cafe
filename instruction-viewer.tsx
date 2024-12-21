import React from 'react';

const BuildInstructions = () => {
  const content = `# Wabi-Sabi Cat Café Build Guide
*A cozy space inspired by traditional Japanese aesthetics*

## Materials List

### Structure
- Corrugated cardboard for all main panels
  - Must be clean, sturdy cardboard (moving box quality)
  - Cut to same dimensions as outer panels
- 2 sheets kraft cardstock (20"x30") for covering cardboard
- 1 sheet brown cardstock for details
- Strong craft glue or hot glue
- Double-sided tape
- Metal ruler and cutting mat
- Craft knife and scissors
- Pencil for marking
- Heavy books or weights for pressing

### Aesthetics
- Natural twine or thin jute rope
- Light cotton fabric (8"x12") for noren curtain
  - Choose natural, unbleached tones
- Acrylic paints:
  - Warm brown (#C7B299)
  - Deep brown (#8B7355)
  - Natural wood (#5C4033)
- Small paint brush for texturing
- Fine-tip brown marker
- Optional: wood stain effect paint

### Tools
- Bone folder or ruler for crisp folds
- Small clamps or clips
- Sandpaper (fine grit)

## Construction Steps

### 1. Prepare Materials (45 mins)
1. Cut cardboard base panels:
   - Front & back: 24"x16"
   - Sides: 16"x16"
   - Roof: 24"x17" (extra inch for slope)
   - Floor (optional): 24"x16"

2. Cut matching kraft cardstock panels:
   - Add 1" to each dimension for wrapping edges
   - Create tabs by cutting corners at 45° angles
   - Score cardstock for clean folds around cardboard

3. Mount cardstock to cardboard:
   - Apply glue evenly to entire surface
   - Press with heavy books while drying
   - Wrap edges carefully
   - Let dry completely before proceeding

### 2. Paint & Texture (45 mins)
*Before assembly, create the warm, natural finish*

1. Base coat:
   - Paint all pieces with warm brown
   - Let dry completely

2. Texturing:
   - Dry brush darker brown for wood grain effect
   - Gently sand edges for weathered look
   - Add random darker streaks for natural variation

3. Details:
   - Paint window frame deep brown
   - Create subtle patterns using fine brush
   - Let all paint dry completely

### 3. Assembly (1 hour)

1. Main Structure:
   \`\`\`
   Start with front panel flat
   Attach sides using tabs
   Join back panel
   Add internal corner supports
   \`\`\`

2. Window Installation:
   \`\`\`
   Center frame in opening
   Layer frame pieces for depth
   Secure with glue
   Let dry completely
   \`\`\`

3. Roof:
   \`\`\`
   Score for gentle slope
   Create 2" drop back to front
   Attach starting from back
   Secure front edge last
   \`\`\`

### 4. Architectural Details (45 mins)

1. Light Wells:
   - Roll brown cardstock for tubes
   - Paint darker brown
   - Secure 2" from corners
   - Add subtle texture

2. Door Treatment:
   - Install noren mounting rod
   - Create fabric noren with raw edge
   - Add simple design or kanji
   - Hang with natural drape

### 5. Café Elements (30 mins)

1. Window Display:
   - Create tiny wooden counter
   - Add texture and variation
   - Position at window base

2. Optional Details:
   - Small menu board (和菓子)
   - Tiny plants in light wells
   - Natural rope accents
   - Textured window ledge

## Design Tips

### Wabi-Sabi Elements
- Embrace asymmetry
- Leave some edges slightly rough
- Create subtle color variations
- Add intentional "imperfections"

### Texture Ideas
1. Wood Grain Effect:
   \`\`\`
   Use dry brush technique
   Paint in one direction
   Vary pressure for natural look
   \`\`\`

2. Aging Effects:
   \`\`\`
   Light sanding on edges
   Darker color in corners
   Subtle tea stain wash
   \`\`\`

### Color Palette
- Main Structure: Warm brown (#C7B299)
- Accents: Deep brown (#8B7355)
- Details: Rich earth tone (#5C4033)
- Noren: Natural unbleached fabric

## Final Touches

1. Weathering:
   - Light sanding on edges
   - Darker tones in corners
   - Subtle variations in color

2. Protection:
   - Matte clear coat (optional)
   - Focus on high-touch areas
   - Keep natural look

## Care Instructions
- Dust with soft brush
- Keep away from moisture
- Handle with care when cleaning
- Check stability monthly

*Total build time: ~3 hours plus drying time*

---

*Remember: Wabi-Sabi celebrates the beauty of imperfection. Each mark and variation adds to its character.*`;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <div className="prose prose-slate max-w-none">
        <article className="print:prose-sm">
          {content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>;
            }
            if (line.startsWith('- ')) {
              return <div key={index} className="ml-4 my-1">• {line.slice(2)}</div>;
            }
            if (line.startsWith('```')) {
              return <pre key={index} className="bg-gray-50 p-4 rounded my-4 font-mono text-sm">{line.slice(3)}</pre>;
            }
            if (line.startsWith('*')) {
              return <em key={index} className="block my-2">{line}</em>;
            }
            if (line === '') {
              return <div key={index} className="my-4"></div>;
            }
            if (line.match(/^\d+\./)) {
              return <div key={index} className="ml-4 my-1">{line}</div>;
            }
            return <p key={index} className="my-2">{line}</p>;
          })}
        </article>
      </div>
      
      <style jsx global>{`
        @media print {
          body {
            font-size: 12px;
            line-height: 1.5;
          }
          
          h1 { font-size: 24px; margin-top: 24px; margin-bottom: 16px; }
          h2 { font-size: 20px; margin-top: 20px; margin-bottom: 14px; }
          h3 { font-size: 16px; margin-top: 16px; margin-bottom: 12px; }
          
          p, ul, ol { margin-bottom: 12px; }
          
          pre {
            white-space: pre-wrap;
            font-size: 11px;
            padding: 8px;
            background: #f5f5f5;
            border-radius: 4px;
          }
          
          code {
            font-size: 11px;
            padding: 2px 4px;
            background: #f5f5f5;
            border-radius: 2px;
          }

          @page {
            margin: 2cm;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildInstructions;