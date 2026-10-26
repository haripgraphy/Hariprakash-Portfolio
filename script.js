/**
 * HARIPRAKASH — FASHION COMMUNICATION & ART DIRECTION
 * BEHANCE ARCHIVE INTEGRATION & KINETIC INTERACTIONS
 */

// SVG Tool Logos (Monochrome Minimalist Icons)
const toolLogos = {
  "blender": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12.516 3.033a6.837 6.837 0 0 0-2.457.697l2.88 2.052a4.444 4.444 0 0 1 2.39-1.077 4.54 4.54 0 0 1 1.966.195 4.606 4.606 0 0 1 2.76 2.784 4.516 4.516 0 0 1-.168 3.398 4.476 4.476 0 0 1-2.43 2.378l1.455 3.226a7.892 7.892 0 0 0 4.298-4.237 8.014 8.014 0 0 0 .313-6.048 8.163 8.163 0 0 0-4.9-4.935 8.064 8.064 0 0 0-6.107-.433zM6.92 7.643a6.924 6.924 0 0 0-3.887 5.145 6.98 6.98 0 0 0 1.94 5.96 6.974 6.974 0 0 0 6.074 1.83 6.942 6.942 0 0 0 5.176-3.832l-3.23-1.464a3.504 3.504 0 0 1-2.616 1.936 3.52 3.52 0 0 1-3.07-.925 3.524 3.524 0 0 1-.98-3.01 3.498 3.498 0 0 1 1.963-2.602L6.92 7.643zm3.766 2.684l-2.05-2.88a7.887 7.887 0 0 0-3.32 4.417 8.02 8.02 0 0 0 .614 6.023l3.22-1.47a4.57 4.57 0 0 1-.303-3.037 4.49 4.49 0 0 1 1.839-3.053z"/></svg>`,
  "cycles": `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v8.5l6 6"/></svg>`,
  "premiere": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="4.8" y="16.5" font-family="Inter, sans-serif" font-weight="700" font-size="10.5" fill="currentColor">Pr</text></svg>`,
  "indesign": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="5.8" y="16.5" font-family="Inter, sans-serif" font-weight="700" font-size="10.5" fill="currentColor">Id</text></svg>`,
  "illustrator": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="5.5" y="16.5" font-family="Inter, sans-serif" font-weight="700" font-size="10.5" fill="currentColor">Ai</text></svg>`,
  "resolve": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><circle cx="12" cy="6.5" r="3.2"/><circle cx="6.5" cy="16" r="3.2"/><circle cx="17.5" cy="16" r="3.2"/></svg>`,
  "canva": `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M15 9.5c-.8-1-2.2-1.2-3.3-.5-1.4.9-1.7 2.8-1.7 4.5 0 1.8.8 3.5 2.5 3.5 1.2 0 2.2-.8 2.6-1.8" stroke-linecap="round"/></svg>`,
  "excel": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 8l8 8m0-8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  "camera": `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6V4h4v2"/></svg>`,
  "lightroom": `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="5.5" y="16.5" font-family="Inter, sans-serif" font-weight="700" font-size="10.5" fill="currentColor">Lr</text></svg>`
};

// Authentic Project Database with Simple English Descriptions and Behance Galleries
const projectsData = {
  "249047443": {
    no: "01 / 13",
    title: "AFTER US!/____",
    subtitle: "3D ART • MODELING • SPECULATIVE VISUALIZATION — 2026",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/176cf6249047443.69ff07a0c9849.jpg",
    context: "Personal 3D Architecture Study",
    role: "3D Modeler, Lighting & Texture Artist",
    duration: "4 Weeks Worldbuilding Sprint",
    behanceUrl: "https://www.behance.net/gallery/249047443/AFTER-US____",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Cycles Render Engine", logo: "cycles" }
    ],
    narrative: `
      <p>What would my college campus look like after humans are gone? That is the big question behind <strong>AFTER US!/____</strong>.</p>
      <p>In this project, I took the real concrete architecture of NIFT Kannur and reimagined it as an empty, decaying world after an apocalypse. I wanted to explore how clean concrete structures look when overgrown with dust, broken glass, and forgotten shadows.</p>
      <p>Everything was modeled from scratch in Blender and rendered using the Cycles engine. I focused on making the atmosphere feel real and quiet—adding morning sunlight streaming through floating dust particles, chipped concrete edges, and volumetric fog rolling down the corridors.</p>
    `,
    specs: [
      "Built from scratch in Blender 3D using Cycles physically based rendering",
      "Atmospheric volumetric fog and procedural dust particles",
      "Realistic surface textures showing chipped concrete, rust, and overgrown moss"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e958bd249047443.69ff079dd4871.png", caption: "Sunlight streaming through morning dust inside the main building" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/da47e4249047443.69ff079e5722c.png", caption: "Overgrown corridor with deep shadows and cracked floor tiles" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/69cf28249047443.69ff079e56b74.png", caption: "Close-up of weathered concrete pillars and ground debris" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/579b3f249047443.69ff079eb3982.png", caption: "Looking down the quiet, abandoned hallway" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/80684e249047443.69ff079eb3d66.png", caption: "Broken ceiling grid letting natural daylight into the room" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c213e8249047443.69ff079f304f7.png", caption: "Wide landscape view of the silent campus courtyard" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/118646249047443.69ff07a009061.jpg", caption: "Detailed courtyard render showing scattered debris and soil" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5b1c11249047443.69ff07a070ecd.jpg", caption: "Close-up view of procedural moss spreading across the concrete floor" }
    ]
  },
  "248585813": {
    no: "02 / 13",
    title: "EZHAKAL: CRAFT RESEARCH DOCUMENTATION",
    subtitle: "HERITAGE HANDLOOM DOCUMENTARY & COFFEE TABLE BOOK — 2025",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/36e173248585813.69f4a077e0290.png",
    context: "NIFT Kannur (Fashion Communication Semester 5 Project)",
    role: "Co-Director, Editorial Designer & Field Researcher",
    duration: "1-Week Field Research at Paravur, Kochi, Kerala",
    behanceUrl: "https://www.behance.net/gallery/248585813/Ezhakal-A-Craft-Research-Documentation",
    tools: [
      { name: "Cinema Camera", logo: "camera" },
      { name: "Adobe InDesign", logo: "indesign" },
      { name: "Adobe Premiere Pro", logo: "premiere" }
    ],
    narrative: `
      <p><strong>Ezhakal</strong> was created for our Craft Research Documentation subject in Semester 5 at NIFT Kannur. It was a teamwork project by six Fashion Communication students.</p>
      <p>We traveled to the Paravur Handloom Co-operative Society in Kochi, Kerala, to document traditional Kerala handloom weaving. We spent days on-site interviewing local weavers, learning how natural cotton threads are spun and dyed, and recording the steady rhythm of the wooden fly-shuttle looms.</p>
      <p>We turned our field research into two tangible outcomes: a large coffee table book filled with authentic photographs and artisan stories, and a short craft documentary film celebrating the patience and cultural heritage of handmade textiles.</p>
    `,
    specs: [
      "Conducted on-site field research at Paravur Handloom Co-operative Society in Kochi, Kerala",
      "Created an archival coffee table book and a documentary film",
      "Documented wooden fly-shuttle looms, yarn dyeing, and traditional weaving techniques"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1ede62248585813.69f4a077e58b5.gif", caption: "Animated record of the wooden fly-shuttle loom in motion at Paravur" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/9e9669248585813.69f4a077e2841.gif", caption: "Animated thread alignment and warp tensioning by hand" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/acf9e6248585813.69f4a077e37d3.png", caption: "Close-up photograph of raw cotton warp threads stretched on the wooden frame" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/cad727248585813.69f4a077e31c5.png", caption: "Traditional handloom tools, wooden shuttles, and bobbin winding spindles" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d11427248585813.69f4a077e06fb.png", caption: "Artisan hands guiding the thread with generational muscle memory" },
      { url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/4eb6d2248585813.Y3JvcCwxMTUwNiw5MDAwLDQ0NzEsMA.png", caption: "Printed coffee table book cover and editorial typography spreads" }
    ]
  },
  "249169795": {
    no: "03 / 13",
    title: "NANGELI",
    subtitle: "FASHION CULTURE & COSTUME • VISUAL STORYTELLING — 2026",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2de1ac249169795.6a0213ae87fff.jpg",
    context: "NIFT Kannur (Fashion Culture and Costume Subject)",
    role: "Creative Direction, Photography & Costume Storyboarding",
    duration: "Collaborative Editorial Production",
    behanceUrl: "https://www.behance.net/gallery/249169795/Nangeli",
    collaborators: "Hariprakash Kannamkulath, Geethika S, Joju Francis, Hiran Ramesh, Arshiya Askar, Suraj TV, Abhinand Ajay",
    tools: [
      { name: "Cinema Camera", logo: "camera" },
      { name: "Adobe Lightroom", logo: "lightroom" },
      { name: "Adobe InDesign", logo: "indesign" }
    ],
    narrative: `
      <p><strong>Nangeli</strong> is a visual storytelling project inspired by the legendary story of Nangeli, created for the Fashion Culture and Costume subject at NIFT Kannur.</p>
      <p>Nangeli is remembered in Kerala's historical consciousness for her defiance against the oppressive caste-based breast tax (<em>mulakkaram</em>) in 19th-century Travancore. Through traditional handloom attire, natural outdoor lighting, earthy organic tones, and minimal compositions, our team sought to recreate the emotion and atmospheric gravity of that era—presenting the narrative more like silent, evocative memories than a conventional cinematic scene.</p>
      <p>Created collaboratively with fellow Fashion Communication students Geethika S, Joju Francis, Hiran Ramesh, Arshiya Askar, Suraj TV, and Abhinand Ajay.</p>
    `,
    specs: [
      "Created for Fashion Culture & Costume subject at NIFT Kannur",
      "Explores 19th-century Kerala historical resistance through authentic handloom costume, natural lighting, and minimal framing",
      "Collaborative production directed with fellow Fashion Communication designers"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2de1ac249169795.6a0213ae87fff.jpg", caption: "Editorial portrait composition reflecting historical stillness and traditional attire" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9d37c1249169795.6a0213ae87b17.jpg", caption: "Traditional Kerala handloom attire draped against natural outdoor lighting" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ff9c5c249169795.6a0213ae88506.jpg", caption: "Earthy atmospheric tones and silent period framing" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2c1e74249169795.6a0213ae8a9e7.jpg", caption: "Evocative visual narrative of resistance and cultural memory" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/af6bae249169795.6a0213ae8afbe.jpg", caption: "Detail of raw woven textures and traditional draping" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e5cda249169795.6a0213ae8b56b.jpg", caption: "Minimal composition capturing the emotional gravity of the legend" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fd437b249169795.6a0213ae8b9ee.jpg", caption: "Quiet study of light filtering through foliage on historical attire" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dcf1b7249169795.6a0213ae8c008.jpg", caption: "Storyboarding sequence depicting traditional daily rhythm" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/03dff6249169795.6a0213ae8c672.jpg", caption: "Cinematic stillness and authentic Kerala color palette" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e54a31249169795.6a0213ae8cd07.jpg", caption: "Wide environmental framing conveying isolation and quiet defiance" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/db381c249169795.6a0213ae8d18f.jpg", caption: "Archival visual essay conclusion" }
    ]
  },
  "256784861": {
    no: "04 / 13",
    title: "SOMEWHERE BETWEEN US (SHORT FILM)",
    subtitle: "MOVING IMAGES & DIRECTION • CINEMATOGRAPHY — 2025",
    heroImage: "https://mir-s3-cdn-cf.behance.net/projects/max_808/34bed5256784861.6acb84158bdbe.jpg",
    context: "NIFT Moving Images & Editing Coursework",
    role: "Director, Cinematographer & Sound Designer",
    duration: "5-Day Sprint (Shooting & Post-Production)",
    behanceUrl: "https://www.behance.net/gallery/256784861/Somewhere-Between-Us-(Short-Film)",
    tools: [
      { name: "Cinema Camera", logo: "camera" },
      { name: "DaVinci Resolve", logo: "resolve" },
      { name: "Adobe Premiere Pro", logo: "premiere" }
    ],
    narrative: `
      <p><strong>Somewhere Between Us</strong> is an indie mystery short film created for our college subject Moving Images & Editing.</p>
      <p>We had a strict deadline of just 5 days and a tiny budget of only ₹2,500 to plan, shoot, direct, and edit the complete film. The story follows two college friends on a late-night drive that slowly turns into an unsettling time loop—where moments repeat, but small eerie details change every time.</p>
      <p>I handled the direction, cinematography, and sound design. With minimal gear, I used available streetlights, night shadows, and natural ambient room audio to create genuine psychological tension.</p>
      <p>🎬 <em>Full short film is available to watch on YouTube: <a href="https://www.youtube.com/watch?v=taKswh1m2uE" target="_blank" rel="noopener" style="color: #c99; text-decoration: underline;">Watch on YouTube ↗</a></em></p>
    `,
    specs: [
      "Completed in a strict 5-day deadline from first idea to final video export",
      "Shot on a micro-budget of ₹2,500 using natural low-light environments",
      "Features suspenseful night cinematography, ambient sound design, and rhythmic time-loop editing"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2c570a256784861.6ac65a156f9bd.jpg", caption: "Car cabin dialogue scene illuminated by dashboard and phone screen glow" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/09bef4256784861.6ac65a156f533.jpg", caption: "Moody atmospheric shot of the empty road under streetlights" },
      { url: "https://mir-s3-cdn-cf.behance.net/projects/original/6e821c247769745.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg", caption: "Key production still capturing the psychological tension in the final scene" }
    ]
  },
  "246316057": {
    no: "05 / 13",
    title: "ZENZA BRONICA GS-1 — 3D VISUALIZATION",
    subtitle: "3D HARD-SURFACE MODELING & HISTORICAL RECONSTRUCTION — 2025",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ccaa19246316057.69c4a37d3e76d.jpg",
    context: "Mechanical Precision 3D Study",
    role: "3D Modeler & Texture Artist",
    duration: "2 Weeks Precision Modeling",
    behanceUrl: "https://www.behance.net/gallery/246316057/Zenza-Bronica-GS-1-3D-Visualization",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Cycles Render Engine", logo: "cycles" }
    ],
    narrative: `
      <p>The <strong>Zenza Bronica GS-1</strong> is a famous Japanese electronic 6x7 medium-format film camera released in 1983, beloved by studio photographers for its modular build and sharp lenses.</p>
      <p>As an analog photography enthusiast, I wanted to recreate every single physical detail of this camera in 3D. I carefully modeled the knurled metal dials, the textured leatherette grip, the lens markings, and the multi-coated glass elements.</p>
      <p>Rendered in Blender Cycles using physically based materials to show realistic metal edges, rubber textures, and subtle colored reflections across the glass optics.</p>
    `,
    specs: [
      "Precision subdivision surface modeling matching real 1980s camera dimensions",
      "Physically based shaders for textured leatherette, brass dials, and optical glass multicoating",
      "Detailed recreation of the modular camera body, viewfinder, and interchangeable 120 film back"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/69b922246316057.69c2194d320c8.jpg", caption: "Front view showing optical glass coatings and realistic lens reflections" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/58183a246316057.69c2194d30740.jpg", caption: "Top controls view showing the shutter speed dial and film advance crank" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e47818246316057.69c2194d3146a.jpg", caption: "Detailed macro view of the knurled focus ring and distance scale" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6d6dcd246316057.69c2194d31aca.jpg", caption: "Side profile showing the modular 120 roll film back attachment" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/04f274246316057.69c2194d30dde.jpg", caption: "Studio rim-lighting angle highlighting the textured leatherette chassis grip" }
    ]
  },
  "257265487": {
    no: "06 / 13",
    title: "NOT YOUR TYPICAL REINCARNATION STORY: SET DESIGN",
    subtitle: "PRODUCTION DESIGN • SPATIAL PLANNING & ART DIRECTION — 2025",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/61393c257265487.6ad4afed2b87b.png",
    context: "Film Production Assignment",
    role: "Set Designer & Spatial Planner",
    duration: "3 Weeks Spatial Pre-Visualization",
    behanceUrl: "https://www.behance.net/gallery/257265487/Not-Your-Typical-Reincarnation-Story-SET-DESIGN",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Canva", logo: "canva" },
      { name: "Microsoft Excel", logo: "excel" }
    ],
    narrative: `
      <p>Before a film crew builds a set in real life, every room, wall, and lamp must be tested. This project is a complete production set design created for a fictional narrative film titled <strong>Not Your Typical Reincarnation Story</strong>.</p>
      <p>I built the entire apartment set in 3D using Blender to test camera angles, character walking pathways, and evening lighting setups. I also created 2D architectural blueprints, furniture placement diagrams, and complete cost breakdown sheets in Excel.</p>
      <p>The set uses a warm vintage color palette with bookshelves, retro lamps, and cozy lived-in clutter to reflect the character's personality and daily life.</p>
    `,
    specs: [
      "3D spatial pre-visualization testing camera lens focal lengths and actor movement paths",
      "Architectural 2D blueprints with furniture dimensions and room proportions",
      "Practical lighting plan with color moodboards and material budget spreadsheets"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c56e23257265487.6ad4afed2da88.png", caption: "Overhead floor plan blueprint showing actor walking paths and room layout" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/55001f257265487.6ad4afed2f14c.png", caption: "Study desk corner with warm practical desk lamp and vintage prop clutter" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/24ec06257265487.6ad4afed2fa91.png", caption: "Kitchen partition and dining area furniture choreography" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8525c9257265487.6ad4afed30b96.png", caption: "Material moodboard, color palette selection, and furniture dimensions" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e98f7f257265487.6ad4afed30560.png", caption: "Camera sightline test looking from the hallway into the living room" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6fbf93257265487.6ad4afed2c9eb.png", caption: "Living room sofa corner illuminated by evening window light" }
    ]
  },
  "247858221": {
    no: "07 / 13",
    title: "LEVI'S BRAND VISUAL STUDY",
    subtitle: "FASHION BRANDING & EDITORIAL ANALYSIS — 2024",
    heroImage: "https://mir-s3-cdn-cf.behance.net/projects/max_808/e565d1247858221.69e4e2048e637.jpg",
    context: "Fashion Communication Brand Research",
    role: "Brand Strategist & Editorial Designer",
    duration: "2 Weeks Research Sprint",
    behanceUrl: "https://www.behance.net/gallery/247858221/LEVIs-Brand-Visual-Study",
    tools: [
      { name: "Adobe InDesign", logo: "indesign" },
      { name: "Camera & Direction", logo: "camera" }
    ],
    narrative: `
      <p>Levi's is one of the most iconic clothing brands in the world. In this brand study, I investigated what makes their visual language timeless—from 1870s California gold-rush workwear to modern youth fashion.</p>
      <p>I analyzed their key visual signatures: the famous red tab, copper pocket rivets, dark indigo washes, and bold advertising typography. I then designed a clean editorial research publication exploring how Levi's can communicate sustainability to younger generations.</p>
    `,
    specs: [
      "Visual analysis of iconic Levi's design details: copper rivets, red tab, and denim washes",
      "Modern editorial publication layout with clean typography hierarchy",
      "Brand narrative strategy focused on craftsmanship, durability, and conscious denim fashion"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/25c94c247858221.69e4bb1f9ecb6.png", caption: "Editorial spread analyzing copper rivets, red tab branding, and denim history" },
      { url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/e565d1247858221.69e4e2048e637.jpg", caption: "Full brand study cover featuring raw indigo denim texture and bold typography" }
    ]
  },
  "247894319": {
    no: "08 / 13",
    title: "3D VISUALISATION OF FILM CAMERA",
    subtitle: "3D MODELING & CAMERA OPTICS STUDY — 2024",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4368d0247894319.69e5b591130b4.jpg",
    context: "Camera Modeling & Shading Study",
    role: "3D Modeler & Lighting Artist",
    duration: "2 Weeks Modeling Sprint",
    behanceUrl: "https://www.behance.net/gallery/247894319/3D-VISUALISATION-OF-FILM-CAMERA",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Cycles Render Engine", logo: "cycles" }
    ],
    narrative: `
      <p>A detailed 3D visualization celebrating the mechanical beauty of classic 35mm film cameras.</p>
      <p>I modeled the complete camera body in Blender, including the shutter button, film advance lever, lens aperture ring, and viewfinder glass. I spent extra time in Cycles crafting materials that mimic real-world physics—like how light reflects off anodized black metal and bends through thick glass lenses.</p>
      <p>This project was an exercise in extreme modeling precision, paying attention to tiny screws, knurled metal edges, and clean studio lighting.</p>
    `,
    specs: [
      "Subdivision surface modeling of a vintage 35mm SLR camera body and 50mm prime lens",
      "Simulated glass dispersion and optical reflections inside the camera lens barrel",
      "Multi-angle studio lighting renders showcasing metal textures and tactile dials"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/70a20e247894319.69e5b591121c4.jpg", caption: "Top plate view with ISO selection dial, shutter speed wheel, and advance lever" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e0a29f247894319.69e5b59112932.jpg", caption: "Close-up of the front camera lens showing multi-coated glass elements" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/092794247894319.69e5b591125b9.jpg", caption: "Rear view showing the viewfinder eyepiece and film compartment door" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/0afdaa247894319.69e5b59112d29.jpg", caption: "Side profile showing camera strap eyelets and lens release mechanism" }
    ]
  },
  "246845579": {
    no: "09 / 13",
    title: "ANIMATING THE GODDESS SARASWATI",
    subtitle: "MECHANICAL KINETIC ART & 2.5D ANIMATION — 2024",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c03140246845579.69cf36661ecff.jpeg",
    context: "Experimental Craft & Animation Project",
    role: "Illustrator, Motion Designer & Mechanical Fabricator",
    duration: "2 Weeks Build Sprint",
    behanceUrl: "https://www.behance.net/gallery/246845579/Animating-the-Goddess-Saraswati",
    tools: [
      { name: "Adobe Illustrator", logo: "illustrator" },
      { name: "Adobe Premiere Pro", logo: "premiere" },
      { name: "Physical Mechanism", logo: "resolve" }
    ],
    narrative: `
      <p>This project is a moving mechanical shadow box that brings the famous painting of <strong>Goddess Saraswati</strong> by Raja Ravi Varma into motion.</p>
      <p>I started by digitally redrawing the classical artwork into separate 2.5D vector layers. Then, I engineered a physical mechanical gear-and-lever system by hand inside a wooden frame, connecting the layers so they glide and move smoothly when turning a hand crank.</p>
      <p>It blends traditional Indian cultural iconography with physical mechanics, creating an interactive piece of art that you can touch and play with.</p>
    `,
    specs: [
      "Converted Raja Ravi Varma's traditional painting into layered 2.5D vector cutouts",
      "Engineered hand-cranked mechanical linkages and gears to physically move the artwork",
      "Built complete wooden frame with interior warm spotlighting"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/cb3c7b246845579.69cd4863a73cb.gif", caption: "Animated GIF showing the kinetic crank mechanism moving the layers in real-time" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/76aa38246845579.69ce204dd2a67.png", caption: "2.5D vector illustration breakdown of Goddess Saraswati, veena, and sacred swan" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5e130d246845579.69ce204c36422.png", caption: "Mechanical gear linkage sketches and movement physics planning" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/710e52246845579.69ce204c35ebf.jpg", caption: "Wooden shadow box assembly and physical layer alignment test" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f44f80246845579.69ce204c3697c.gif", caption: "Hand crank rotation test demonstrating smooth mechanical movement" }
    ]
  },
  "246182939": {
    no: "10 / 13",
    title: "PERFUME STORE",
    subtitle: "SPATIAL ARCHITECTURE & 3D INTERIOR DESIGN — 2024",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/52ec3e246182939.69be59ce786f8.jpg",
    context: "Retail Space 3D Design",
    role: "Spatial Designer & 3D Visualizer",
    duration: "3 Weeks Spatial Design Sprint",
    behanceUrl: "https://www.behance.net/gallery/246182939/Perfume-Store",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Cycles Render Engine", logo: "cycles" }
    ],
    narrative: `
      <p>A minimalist luxury perfume boutique concept designed from the ground up in 3D.</p>
      <p>Because fragrance cannot be seen, a perfume store must feel calm, quiet, and luxurious through architecture alone. I designed a space featuring smooth stone walls, back-lit glass display shelves, and custom pedestals that make each bottle look like a precious exhibit.</p>
      <p>I focused heavily on lighting in Blender Cycles, calculating how soft recessed ceiling lamps pass through transparent glass perfume bottles and cast delicate reflections onto the counters.</p>
    `,
    specs: [
      "Custom luxury retail space planning with floating glass display shelves and stone counters",
      "Physically accurate glass refraction, liquid transparency, and ambient downlighting",
      "Interior and exterior 3D architectural renders created in Blender Cycles"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/26e2ea246182939.69cf38df34a40.png", caption: "Close-up view of perfume bottles arranged on illuminated frosted glass shelves" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5c0d7a246182939.69cf38df341d9.png", caption: "Stone consultation counter with minimalist stool seating for fragrance testing" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/74b51d246182939.69cf38df33c61.png", caption: "Architectural hallway showing textured concrete walls and soft downlighting" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/14efb8246182939.69be59ce78ad5.jpg", caption: "Storefront entrance view showing floor-to-ceiling glass and warm interior glow" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/676a67246182939.69be59ce799ed.png", caption: "Symmetrical front display perspective highlighting clean architectural lines" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/31d48f246182939.69be59ce7925c.jpg", caption: "Side perspective showing floating product display shelves and shadow contrast" }
    ]
  },
  "247354035": {
    no: "11 / 13",
    title: "GRADUATION PROJECT SHOWCASE 2026",
    subtitle: "EVENT BRANDING, EXHIBITION CATALOGUE & SIGNAGE — 2026",
    heroImage: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/18b81d247354035.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    context: "NIFT Kannur Graduation Exhibition",
    role: "Visual Identity Designer & Curation Lead",
    duration: "4 Weeks Exhibition Design",
    behanceUrl: "https://www.behance.net/gallery/247354035/Graduation-Project-Showcase-2026",
    tools: [
      { name: "Adobe InDesign", logo: "indesign" },
      { name: "Adobe Illustrator", logo: "illustrator" },
      { name: "Editorial Direction", logo: "camera" }
    ],
    narrative: `
      <p>The <strong>Graduation Project Showcase</strong> at NIFT Kannur is the main event where final-year students exhibit their degree projects to industry experts, faculty, and guests.</p>
      <p>I led the visual identity and graphic design for the 2026 showcase. This included designing the official event logo, typography guidelines, animated motion posters for screens, printed exhibition catalogues, and wayfinding signage throughout the campus halls.</p>
      <p>The branding uses a clean Swiss-inspired grid layout so that every student's work—across fashion, textiles, and visual communication—is presented clearly and proudly.</p>
    `,
    specs: [
      "Complete exhibition branding system: logos, color palette, and typography guidelines",
      "Editorial layout and design of the official printed graduation project catalogue",
      "Motion typography posters for digital displays and directional signage on campus"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/795d87247354035.69f3ccd1c353e.gif", caption: "Animated typography motion poster created for event screens and social media" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d3e6ae247354035.69f3c7a55c521.png", caption: "Exhibition catalogue cover design and modular grid layout" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c78638247354035.69f3c7a560e93.png", caption: "Student project feature page showing image layout and clean typography hierarchy" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ea00f3247354035.69f3c7a56131f.png", caption: "Directional wayfinding signage and entrance banner applications" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/84fd48247354035.69f3c7a561836.png", caption: "Color palette test and printed paper sample mockups" }
    ]
  },
  "205525637": {
    no: "12 / 13",
    title: "WINDUP CLOCK IN 3D",
    subtitle: "3D ASSET MODELING & TEXTURING — 2024",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4d4110205525637.66bc848f876ca.jpg",
    context: "Precision 3D Prop Modeling",
    role: "3D Modeler & Texture Artist",
    duration: "1 Week Precision Sprint",
    behanceUrl: "https://www.behance.net/gallery/205525637/Windup-clock-in-3D",
    tools: [
      { name: "Blender 3D", logo: "blender" },
      { name: "Cycles Render Engine", logo: "cycles" }
    ],
    narrative: `
      <p>A detailed 3D recreation of a vintage mechanical wind-up alarm clock with classic twin bells.</p>
      <p>I modeled every physical component from scratch in Blender—from the curved top bells and the little striker hammer between them, to the winding keys on the back, the time-setting dials, and the curved glass face.</p>
      <p>I gave the clock realistic vintage textures: subtle metal scratches, slightly oxidized brass, and soft reflections on the curved glass cover.</p>
    `,
    specs: [
      "High-poly 3D modeling of mechanical clock parts, twin bells, and winding keys",
      "Realistic material textures showing aged metal, scratched enamel, and curved glass reflections",
      "Macro studio lighting renders created in Blender Cycles"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/432eb6205525637.66bc848f87062.jpg", caption: "Rear view showing the twin windup keys, alarm key, and time setting dials" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/75d342205525637.66bc848f87c4d.jpg", caption: "Top macro shot of the alarm bells and striker hammer mechanism" },
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5202c3205525637.66bc848f881dc.png", caption: "Close-up of the vintage clock face, numerals, and curved clock hands" },
      { url: "https://mir-s3-cdn-cf.behance.net/projects/404/15e82c205525637.66bc848ecc879.jpg", caption: "Full studio angle render highlighting brass patina and metal reflections" }
    ]
  },
  "102717997": {
    no: "13 / 13",
    title: "KERALA ARCHIVE",
    subtitle: "DOCUMENTARY PHOTOGRAPHY & REGIONAL STORIES — 2023",
    heroImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/eacad1102717997.5f3cfc735d7a6.jpg",
    context: "Personal Documentary Photography",
    role: "Photographer & Visual Storyteller",
    duration: "Ongoing Monographic Series",
    behanceUrl: "https://www.behance.net/gallery/102717997/kerala",
    tools: [
      { name: "Camera", logo: "camera" },
      { name: "Adobe Lightroom", logo: "lightroom" }
    ],
    narrative: `
      <p>A personal photography series documenting the natural landscapes, backwaters, and everyday textures of Kerala, my home state.</p>
      <p>Living between my hometown Kodungallur and college in Kannur, I love photographing the quiet, unposed moments—soft morning light filtering through coconut trees, quiet riverbanks, and the slow pace of coastal life.</p>
      <p>This photo collection is the visual foundation for all my creative work, reminding me to keep my digital 3D worlds rooted in real textures, real light, and real emotions.</p>
    `,
    specs: [
      "Natural daylight photography across coastal and rural Kerala",
      "Documenting regional vegetation, calm backwaters, and vernacular architecture",
      "Personal visual archive that inspires my 3D spatial environments"
    ],
    gallery: [
      { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/eacad1102717997.5f3cfc735d7a6.jpg", caption: "Landscape view of Kerala backwaters and morning palm tree reflections" },
      { url: "https://mir-s3-cdn-cf.behance.net/projects/404/225b5e102717997.5f3cfc731983e.png", caption: "Documentary still capturing regional Kerala foliage and calm coastal waters" }
    ]
  }
};

// Cursor dot and hover badge caption removed per user request

// ==========================================================================
// ==========================================================================
// 3D HERO PORTRAIT: DESKTOP MOUSE PARALLAX + PHONE GYROSCOPE & TOUCH TILT
// ==========================================================================
function initHeroGyroParallax() {
  const cards = document.querySelectorAll('.portrait-rounded-card, .portrait-stage');
  if (!cards.length) return;

  cards.forEach((card) => {
    const photo = card.querySelector('.portrait-popout-photo') || card.querySelector('.portrait-photo');
    const glare = card.querySelector('.portrait-glare');
    const gyroPill = document.getElementById('portraitGyroPill') || card.parentElement.querySelector('.portrait-gyro-pill');
    if (!photo) return;

    let isMouseHovered = false;
    let isTouchDragging = false;
    let gyroEnabled = false;

    // Target and current values for smooth animation interpolation
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetPopZ = 16;
    let currentPopZ = 16;
    let targetScale = 1;
    let currentScale = 1;

    let baseGamma = null;
    let baseBeta = null;

    function render3DFrame() {
      // Lerp for 60/120fps buttery smooth kinetic response
      currentRotateX += (targetRotateX - currentRotateX) * 0.12;
      currentRotateY += (targetRotateY - currentRotateY) * 0.12;
      currentPopZ += (targetPopZ - currentPopZ) * 0.12;
      currentScale += (targetScale - currentScale) * 0.12;

      card.style.transform = `perspective(1100px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) scale3d(${currentScale.toFixed(3)}, ${currentScale.toFixed(3)}, ${currentScale.toFixed(3)})`;

      const moveX = (currentRotateY / 6.5) * 5.5;
      const moveY = -(currentRotateX / 6.5) * 5.5;
      const liftY = (currentPopZ > 24) ? -24 : 0;

      photo.style.transform = `translateX(calc(-50% + ${moveX.toFixed(1)}px)) translateY(${liftY + moveY}px) translateZ(${currentPopZ.toFixed(1)}px) scale(${currentScale > 1.01 ? 1.10 : 1})`;

      if (glare) {
        const glareX = 50 + (currentRotateY / 6.5) * 35;
        const glareY = 40 + (currentRotateX / 6.5) * 35;
        glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.28) 0%, transparent 65%)`;
        glare.style.opacity = currentScale > 1.01 ? '0.85' : '0.5';
      }

      requestAnimationFrame(render3DFrame);
    }

    // Start render loop
    requestAnimationFrame(render3DFrame);

    // ------------------------------------------------------------------------
    // 1. Desktop Mouse Movement
    // ------------------------------------------------------------------------
    card.addEventListener('mouseenter', () => {
      isMouseHovered = true;
      targetScale = 1.02;
      targetPopZ = 58;
      photo.style.filter = 'drop-shadow(0 26px 36px rgba(0, 0, 0, 0.65))';
    });

    card.addEventListener('mousemove', (e) => {
      if (!isMouseHovered) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRotateX = ((y - centerY) / centerY) * -4.5;
      targetRotateY = ((x - centerX) / centerX) * 4.5;
    });

    card.addEventListener('mouseleave', () => {
      isMouseHovered = false;
      targetRotateX = 0;
      targetRotateY = 0;
      targetScale = 1;
      targetPopZ = 16;
      photo.style.filter = 'drop-shadow(0 12px 22px rgba(0, 0, 0, 0.4))';
    });

    // ------------------------------------------------------------------------
    // 2. Mobile DeviceOrientation (Gyroscope Tilt)
    // ------------------------------------------------------------------------
    function handleOrientation(e) {
      if (isMouseHovered || isTouchDragging) return;
      if (e.gamma === null || e.beta === null) return;

      // Calibrate natural holding angle when first detected
      if (baseGamma === null || baseBeta === null) {
        baseGamma = e.gamma;
        baseBeta = e.beta;
      }

      // Delta from user's resting posture (clamped for elegance)
      const deltaGamma = Math.max(-28, Math.min(28, e.gamma - baseGamma));
      const deltaBeta = Math.max(-28, Math.min(28, e.beta - baseBeta));

      targetRotateX = (deltaBeta / 28) * -6.5;
      targetRotateY = (deltaGamma / 28) * 6.5;

      const tiltMagnitude = Math.abs(deltaGamma) + Math.abs(deltaBeta);
      if (tiltMagnitude > 4) {
        targetScale = 1.02;
        targetPopZ = 46;
        photo.style.filter = 'drop-shadow(0 22px 32px rgba(0, 0, 0, 0.55))';
      } else {
        targetScale = 1;
        targetPopZ = 20;
        photo.style.filter = 'drop-shadow(0 12px 22px rgba(0, 0, 0, 0.4))';
      }

      if (!gyroEnabled) {
        gyroEnabled = true;
        if (gyroPill) {
          gyroPill.classList.add('is-active');
          const txt = gyroPill.querySelector('.gyro-text');
          if (txt) txt.textContent = '✦ 3D Gyro Active';
        }
      }
    }

    // Function to activate DeviceOrientation (with iOS 13+ permission support)
    function enableGyroscope() {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS 13+ permission workflow
        DeviceOrientationEvent.requestPermission()
          .then((response) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation, { passive: true });
              if (gyroPill) {
                gyroPill.classList.add('is-active');
                const txt = gyroPill.querySelector('.gyro-text');
                if (txt) txt.textContent = '✦ 3D Gyro Active';
              }
            }
          })
          .catch((err) => {
            console.log('DeviceOrientation permission:', err);
          });
      } else if (window.DeviceOrientationEvent) {
        // Android / modern mobile browsers
        window.addEventListener('deviceorientation', handleOrientation, { passive: true });
      }
    }

    // Try listening right away for Android / desktop sensors
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }

    // On user tap/touch (satisfies iOS user gesture requirement)
    card.addEventListener('click', enableGyroscope, { passive: true });
    if (gyroPill) {
      gyroPill.addEventListener('click', (e) => {
        e.stopPropagation();
        enableGyroscope();
      });
    }

    // ------------------------------------------------------------------------
    // 3. Mobile Touch Tilt Fallback (Swipe / Drag with thumb)
    // ------------------------------------------------------------------------
    card.addEventListener('touchstart', () => {
      isTouchDragging = true;
      targetScale = 1.02;
      targetPopZ = 52;
      photo.style.filter = 'drop-shadow(0 24px 34px rgba(0, 0, 0, 0.65))';
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!isTouchDragging || !e.touches || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = card.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRotateX = Math.max(-8, Math.min(8, ((y - centerY) / centerY) * -7));
      targetRotateY = Math.max(-8, Math.min(8, ((x - centerX) / centerX) * 7));
    }, { passive: true });

    card.addEventListener('touchend', () => {
      isTouchDragging = false;
      if (!gyroEnabled) {
        targetRotateX = 0;
        targetRotateY = 0;
        targetScale = 1;
        targetPopZ = 16;
        photo.style.filter = 'drop-shadow(0 12px 22px rgba(0, 0, 0, 0.4))';
      }
    }, { passive: true });
  });
}

// ==========================================================================
// HERO 360° KINETIC SCRUBBER (AFTER US!/____ Turnaround)
// ==========================================================================
const scrubBox = document.getElementById('heroScrub');
const scrubFrames = scrubBox ? scrubBox.querySelectorAll('.scrub-frame') : [];
const progressBar = document.getElementById('heroProgressBar');

if (scrubBox && scrubFrames.length > 0) {
  const totalFrames = scrubFrames.length;

  const handleScrub = (clientX) => {
    const rect = scrubBox.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const frameIndex = Math.min(totalFrames - 1, Math.floor(relativeX * totalFrames));

    scrubFrames.forEach((frame, idx) => {
      if (idx === frameIndex) {
        frame.classList.add('active');
      } else {
        frame.classList.remove('active');
      }
    });

    if (progressBar) {
      progressBar.style.width = `${((frameIndex + 1) / totalFrames) * 100}%`;
    }
  };

  scrubBox.addEventListener('mousemove', (e) => {
    handleScrub(e.clientX);
  });

  scrubBox.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handleScrub(e.touches[0].clientX);
    }
  }, { passive: true });
}

// ==========================================================================
// VIEW SWITCHER: STREAM ⇄ INDEX
// ==========================================================================
const viewButtons = document.querySelectorAll('.view-btn');
const streamView = document.getElementById('streamView');
const indexView = document.getElementById('indexView');

viewButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    viewButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const view = btn.getAttribute('data-view');
    if (view === 'index') {
      streamView.classList.remove('active');
      indexView.classList.add('active');
    } else {
      indexView.classList.remove('active');
      streamView.classList.add('active');
    }

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==========================================================================
// INDEX VIEW FLOATING KINETIC PREVIEW
// ==========================================================================
const indexRows = document.querySelectorAll('.index-row');
const floatingPreview = document.getElementById('floatingPreview');
const floatingImg = document.getElementById('floatingImg');

indexRows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    const imgSrc = row.getAttribute('data-preview');
    if (imgSrc && floatingImg) {
      floatingImg.src = imgSrc;
      floatingPreview.classList.add('visible');
    }
  });

  row.addEventListener('mousemove', (e) => {
    if (floatingPreview) {
      floatingPreview.style.left = `${e.clientX + 36}px`;
      floatingPreview.style.top = `${e.clientY}px`;
    }
  });

  row.addEventListener('mouseleave', () => {
    if (floatingPreview) {
      floatingPreview.classList.remove('visible');
    }
  });
});

// ==========================================================================
// SUBTLE PARALLAX ON SCROLL
// ==========================================================================
const parallaxItems = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  parallaxItems.forEach(item => {
    const speed = parseFloat(item.getAttribute('data-speed')) || 0.04;
    const offset = (scrollY - item.offsetTop) * speed;
    item.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}, { passive: true });

// ==========================================================================
// LIVE CLOCK
// ==========================================================================
function updateClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hours}:${minutes}:${seconds} IST`;
}
setInterval(updateClock, 1000);
updateClock();

// ==========================================================================
// EDITORIAL CASE STUDY MODAL SYSTEM (No Special Boxes, Minimal Tools with Logos, Rich Gallery)
// ==========================================================================
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

function openProjectModal(projectId) {
  const data = projectsData[projectId];
  if (!data || !modal || !modalContent) return;

  // Build clean tool chips with logos (preserved and showcased in project detail page)
  let toolsHtml = '';
  if (data.tools && data.tools.length > 0) {
    toolsHtml = `
      <div class="modal-tools-row">
        <span class="tools-heading">TOOLS & SOFTWARE</span>
        <div class="tools-badges-wrap">
          ${data.tools.map(t => `
            <div class="tool-badge">
              <span class="tool-icon">${toolLogos[t.logo] || ''}</span>
              <span class="tool-name">${t.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Build gallery items after description
  let galleryHtml = '';
  if (data.gallery && data.gallery.length > 0) {
    galleryHtml = `
      <div class="modal-gallery-section">
        <div class="gallery-section-title">PROJECT VISUALS & STILLS (${data.gallery.length})</div>
        <div class="gallery-flow">
          ${data.gallery.map(item => `
            <div class="gallery-item">
              <div class="gallery-img-wrap">
                <img src="${item.url}" alt="${data.title}" loading="lazy">
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Flow remaining details (context, role, duration, specs) directly after the tools
  let specsListHtml = '';
  if (data.specs && data.specs.length > 0) {
    specsListHtml = `
      <ul class="modal-specs-flow">
        ${data.specs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-header-top">
      <span class="modal-num-badge">${data.no}</span>
      <span class="modal-category-badge">${data.subtitle}</span>
    </div>

    <h1 class="modal-title">${data.title}</h1>

    <!-- Hero Image for the project -->
    <div class="modal-hero-image">
      <img src="${data.heroImage}" alt="${data.title}">
    </div>

    <!-- Tools Chips Section (Featured on Project Detail Page) -->
    ${toolsHtml}

    <!-- Clean Metadata Flow (Context, Role, Timeline, Collaborators) -->
    <div class="modal-meta-flow">
      <div class="meta-item"><span class="meta-label">ROLE:</span> ${data.role}</div>
      <div class="meta-item"><span class="meta-label">CONTEXT:</span> ${data.context}</div>
      <div class="meta-item"><span class="meta-label">TIMELINE:</span> ${data.duration}</div>
      ${data.collaborators ? `<div class="meta-item"><span class="meta-label">COLLABORATORS:</span> ${data.collaborators}</div>` : ''}
    </div>

    <!-- Narrative Description -->
    <div class="modal-narrative">
      ${data.narrative}
      ${specsListHtml}
    </div>

    <!-- Additional Project Photos / Gallery After Description -->
    ${galleryHtml}

    <div class="modal-footer-action">
      <a href="${data.behanceUrl}" target="_blank" rel="noopener" class="behance-view-btn">
        <span>VIEW ORIGINAL ON BEHANCE</span>
        <span>↗</span>
      </a>
      <button class="modal-footer-back-btn" onclick="closeProjectModal()">
        <span>← BACK TO PORTFOLIO</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
  const modalWindow = document.getElementById('modalWindow');
  if (modalWindow) modalWindow.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// ==========================================================================
// PORTRAIT: LIVE LOCAL UPLOAD / REPLACEMENT
// ==========================================================================
document.querySelectorAll('.portrait-rounded-card').forEach(card => {
  const fileInput = card.querySelector('input[type="file"]') || 
                    card.parentElement.querySelector('input[type="file"]') ||
                    document.getElementById('portraitFileInput') || 
                    document.getElementById('aboutPortraitFileInput');
  const img = card.querySelector('.portrait-photo');
  const hint = card.querySelector('.portrait-upload-hint');

  if (card && fileInput && img) {
    card.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          img.src = event.target.result;
          if (hint) {
            hint.innerHTML = '<span>CUSTOM PHOTO LOADED</span>';
            setTimeout(() => {
              hint.style.transition = 'opacity 0.6s ease';
              hint.style.opacity = '0';
            }, 1800);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// ==========================================================================
// NAVIGATION SCROLLSPY & SMOOTH ANCHOR HIGHLIGHT
// ==========================================================================
const navLinks = document.querySelectorAll('.header-nav .nav-link');
const sectionIds = ['hero', 'projects', 'experience', 'contact'];

if (document.getElementById('hero')) {
  window.addEventListener('scroll', () => {
    let activeId = 'hero';
    const scrollPos = window.scrollY + 140;

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeId = id;
        }
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else if (href && href.startsWith('#')) {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
}

// ==========================================================================
// COPY EMAIL TO CLIPBOARD
// ==========================================================================
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyBtnText = document.getElementById('copyBtnText');

if (copyEmailBtn && copyBtnText) {
  copyEmailBtn.addEventListener('click', () => {
    const email = copyEmailBtn.getAttribute('data-email') || 'hpkuttan@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      copyBtnText.textContent = 'COPIED TO CLIPBOARD ✓';
      copyEmailBtn.style.borderColor = 'var(--text-main)';
      copyEmailBtn.style.backgroundColor = 'var(--text-main)';
      copyEmailBtn.style.color = '#FFFFFF';
      setTimeout(() => {
        copyBtnText.textContent = 'COPY EMAIL';
        copyEmailBtn.style.borderColor = '';
        copyEmailBtn.style.backgroundColor = '';
        copyEmailBtn.style.color = '';
      }, 2200);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  });
}

// ==========================================================================
// HERO DYNAMIC SCROLL PARTING & CURVED 3D ZOOM (Opposite Sides onto Projects)
// ==========================================================================
function initHeroScrollParting() {
  const heroSection = document.getElementById('hero');
  const projectsSection = document.getElementById('projects');
  if (!heroSection || !projectsSection) return;

  const imageCol = heroSection.querySelector('.hero-image-col');
  const contentCol = heroSection.querySelector('.hero-content-col');
  if (!imageCol || !contentCol) return;

  let animFrameId = null;
  let targetProgress = 0;
  let currentProgress = 0;

  function calculateTarget() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const heroHeight = heroSection.offsetHeight || window.innerHeight;
    // Parting completes smoothly as the user scrolls towards the top of #projects
    const scrollThreshold = Math.max(180, heroHeight * 0.88);

    if (scrollY <= 0) {
      targetProgress = 0;
    } else if (scrollY >= scrollThreshold) {
      targetProgress = 1;
    } else {
      targetProgress = scrollY / scrollThreshold;
    }
  }

  function renderParting() {
    // Kinetic interpolation for silky 60/120fps motion response
    currentProgress += (targetProgress - currentProgress) * 0.16;

    if (Math.abs(currentProgress - targetProgress) < 0.001) {
      currentProgress = targetProgress;
    }

    if (currentProgress === 0) {
      imageCol.style.transform = '';
      imageCol.style.opacity = '';
      contentCol.style.transform = '';
      contentCol.style.opacity = '';
      heroSection.style.pointerEvents = '';
    } else {
      const p = currentProgress;
      // Smoothstep easing for graceful ease-in and ease-out
      const ease = p * p * (3 - 2 * p);

      const isMobile = window.innerWidth <= 800;
      // Dynamic lateral parting distance
      const maxDistX = isMobile
        ? Math.min(85, window.innerWidth * 0.22)
        : Math.min(220, window.innerWidth * 0.18);

      // Inward curvature in small sensitivity (subtle inward 3D tilt towards the center)
      const curveDeg = isMobile ? 4.5 : 6.8;
      const rotY = ease * curveDeg;

      // Zoom-in scale effect (camera push-in sensation as elements part)
      const scale = 1 + (ease * (isMobile ? 0.07 : 0.12));

      // Concave inward translation arc along Z and slight vertical drift
      const translateZ = ease * (isMobile ? 22 : 36);
      const translateY = -ease * 14;

      // Left Column (Portrait + Crimson Card BG) glides to the left & curves inward
      imageCol.style.transform = `perspective(1200px) translate3d(${(-ease * maxDistX).toFixed(2)}px, ${translateY.toFixed(2)}px, ${translateZ.toFixed(2)}px) scale(${scale.toFixed(3)}) rotateY(${rotY.toFixed(2)}deg)`;

      // Right Column (Text Hierarchy) glides to the right & curves inward
      contentCol.style.transform = `perspective(1200px) translate3d(${(ease * maxDistX).toFixed(2)}px, ${translateY.toFixed(2)}px, ${translateZ.toFixed(2)}px) scale(${scale.toFixed(3)}) rotateY(${(-rotY).toFixed(2)}deg)`;

      // Soft dissolution so elements seamlessly yield to the projects section
      const opacity = Math.max(0, 1 - Math.pow(p, 2.6) * 1.0);
      imageCol.style.opacity = opacity.toFixed(3);
      contentCol.style.opacity = opacity.toFixed(3);

      if (p >= 0.98) {
        heroSection.style.pointerEvents = 'none';
      } else {
        heroSection.style.pointerEvents = '';
      }
    }

    if (Math.abs(currentProgress - targetProgress) > 0.0005) {
      animFrameId = requestAnimationFrame(renderParting);
    } else {
      animFrameId = null;
    }
  }

  function handleScroll() {
    calculateTarget();
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(renderParting);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  // Initial check
  calculateTarget();
  renderParting();
}

// ==========================================================================
// SCROLL REVEAL (Content & text pop smoothly from bottom on scroll)
// ==========================================================================
function initScrollReveal() {
  const revealSelectors = [
    '.projects-section-header',
    '.grid-card',
    '.experience-section-header',
    '.timeline-row',
    '.contact-section-header',
    '.contact-main',
    '.contact-sidebar',
    '.about-top-collage-section',
    '.story-reveal-item',
    '.about-direct-actions',
    '.about-antiques-col'
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(', '));
  if (!revealElements.length) return;

  revealElements.forEach((el) => {
    el.classList.add('scroll-reveal');
  });

  // Stagger grid cards in each row
  const gridCards = document.querySelectorAll('.grid-card');
  gridCards.forEach((card, idx) => {
    const colIndex = idx % 4;
    card.style.transitionDelay = `${colIndex * 0.08}s`;
  });

  // Stagger timeline rows
  const timelineRows = document.querySelectorAll('.timeline-row');
  timelineRows.forEach((row, idx) => {
    row.style.transitionDelay = `${(idx % 4) * 0.08}s`;
  });

  // Stagger story paragraphs on about page
  const storyItems = document.querySelectorAll('.story-reveal-item');
  storyItems.forEach((item, idx) => {
    item.style.transitionDelay = `${idx * 0.09}s`;
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      } else {
        // When element moves below the viewport (user scrolls back up past it),
        // remove is-revealed so it animates again when scrolling back down
        if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove('is-revealed');
        }
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-revealed');
    }
    observer.observe(el);
  });

  // When scrolling back up towards the top / hero, ensure all below elements reset
  window.addEventListener('scroll', () => {
    if (window.scrollY < 60) {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= window.innerHeight) {
          el.classList.remove('is-revealed');
        }
      });
    }
  }, { passive: true });
}

// ==========================================================================
// ABOUT PAGE: SCATTERED CURSOR + SCROLL-PARALLAX PHOTO COLLAGES
// ==========================================================================
function initAboutCollage() {
  const stages = document.querySelectorAll('.interactive-collage-stage');
  if (!stages.length) return;

  stages.forEach(stage => {
    const cards = Array.from(stage.querySelectorAll('.collage-card'));
    if (!cards.length) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Initialize card base metrics and rotations
    cards.forEach(card => {
      const depth = parseFloat(card.getAttribute('data-depth')) || 0.05;
      card._depth = depth;

      const computed = window.getComputedStyle(card);
      const baseRotStr = computed.getPropertyValue('--base-rot').trim() || '0deg';
      const baseRot = parseFloat(baseRotStr) || 0;
      card._baseRot = baseRot;
    });

    function updateParallax() {
      // Freeform cursor drift + scroll parallax on screens > 960px
      if (window.innerWidth > 960) {
        // Smooth lerp (linear interpolation) for organic responsiveness
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        const stageRect = stage.getBoundingClientRect();
        const stageCenterY = stageRect.top + stageRect.height / 2;
        const viewportCenterY = window.innerHeight / 2;
        const scrollDistance = viewportCenterY - stageCenterY;

        cards.forEach(card => {
          // If the card is currently hovered, let CSS hover transform take precedence
          if (card.matches(':hover')) {
            card.style.transform = `scale(1.06) rotate(0deg)`;
          } else {
            // Combine horizontal/vertical cursor tracking with scroll-linked physical parallax
            const scrollShift = scrollDistance * card._depth * 0.38;
            const moveX = currentX * card._depth * 70;
            const moveY = (currentY * card._depth * 50) + scrollShift;
            card.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0px) rotate(${card._baseRot}deg)`;
          }
        });
      }

      requestAnimationFrame(updateParallax);
    }

    // Mouse move listener across the window for fluid perspective relative to this stage
    window.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = (e.clientX - centerX) / (rect.width / 2);
      targetY = (e.clientY - centerY) / (rect.height / 2);

      targetX = Math.max(-1.2, Math.min(1.2, targetX));
      targetY = Math.max(-1.2, Math.min(1.2, targetY));
    }, { passive: true });

    stage.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    // Card hover focus, stack cycling, and photo swap handling
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        stage.classList.add('has-hover');
      });

      card.addEventListener('mouseleave', () => {
        stage.classList.remove('has-hover');
      });

      // Click to bring to top of stack (interactive photo album cycling)
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('is-active-top'));
        card.classList.add('is-active-top');
      });
    });

    // Start animation loop for this stage
    requestAnimationFrame(updateParallax);
  });
}

// ==========================================================================
// SYSTEM-SYNCED DARK / LIGHT MODE ENGINE
// ==========================================================================
function initThemeSystem() {
  const themeToggleBtns = document.querySelectorAll('#themeToggleBtn, .theme-toggle-btn');
  const metaThemeColor = document.getElementById('metaThemeColor');
  const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };

  function getEffectiveTheme() {
    try {
      const saved = localStorage.getItem('hariprakash-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return mediaQuery.matches ? 'dark' : 'light';
  }

  function updateMetaAndUI(theme) {
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    }
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Theme: ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode.`);
      btn.setAttribute('title', `Theme: ${theme === 'dark' ? 'Dark' : 'Light'} (Click to toggle)`);
      if (theme === 'dark') {
        btn.classList.add('is-dark');
        btn.classList.remove('is-light');
      } else {
        btn.classList.add('is-light');
        btn.classList.remove('is-dark');
      }
    });
  }

  function applyTheme(theme, isManual) {
    if (isManual) {
      document.documentElement.setAttribute('data-theme', theme);
      if (document.body) {
        document.body.setAttribute('data-theme', theme);
        document.body.classList.remove('theme-white', 'theme-light', 'theme-dark');
        document.body.classList.add(`theme-${theme}`);
      }
      try {
        localStorage.setItem('hariprakash-theme', theme);
      } catch (e) {}
    } else {
      let saved = null;
      try {
        saved = localStorage.getItem('hariprakash-theme');
      } catch (e) {}

      const active = saved || (mediaQuery.matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', active);
      if (document.body) {
        document.body.setAttribute('data-theme', active);
        document.body.classList.remove('theme-white', 'theme-light', 'theme-dark');
        document.body.classList.add(`theme-${active}`);
      }
    }
    updateMetaAndUI(getEffectiveTheme());
  }

  // Initial application on page load
  applyTheme(getEffectiveTheme(), false);

  // Sync automatically when system preference changes
  if (mediaQuery && mediaQuery.addEventListener && !mediaQuery._hasBoundTheme) {
    mediaQuery._hasBoundTheme = true;
    mediaQuery.addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem('hariprakash-theme')) {
          applyTheme(e.matches ? 'dark' : 'light', false);
        }
      } catch (err) {}
    });
  }

  // Toggle button click listener (guarded against duplicate listener attachments)
  themeToggleBtns.forEach(btn => {
    if (btn._themeBound) return;
    btn._themeBound = true;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const current = getEffectiveTheme();
      const newTheme = current === 'dark' ? 'light' : 'dark';

      // Kinetic micro-interaction
      btn.style.transform = 'rotate(180deg) scale(0.92)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 260);

      applyTheme(newTheme, true);
    });
  });
}

// ==========================================================================
// MOBILE DRAWER HAMBURGER NAVIGATION
// ==========================================================================
function initMobileNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('mobileNavCloseBtn');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const menuLinks = drawer ? drawer.querySelectorAll('.mobile-menu-link, .mobile-subtle-link, .mobile-nav-email') : [];

  if (!menuBtn || !drawer) return;
  if (menuBtn._navBound) return;
  menuBtn._navBound = true;

  function openDrawer() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtn.classList.add('is-active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

// Initialize all features on load
function initAllFeatures() {
  initThemeSystem();
  initMobileNavigation();
  initHeroGyroParallax();
  initHeroScrollParting();
  initScrollReveal();
  initAboutCollage();
}

// Run theme detection immediately to eliminate initial render flash
initThemeSystem();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllFeatures);
} else {
  initAllFeatures();
}


