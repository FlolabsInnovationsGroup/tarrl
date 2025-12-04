/**
 * Populate TARRL content from PDF data
 * Run with: npx ts-node scripts/populate-content.ts
 */

const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-production-9c3d.up.railway.app';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('Error: STRAPI_API_TOKEN environment variable is required');
  process.exit(1);
}

interface ResearchTrackData {
  name: string;
  slug: string;
  order: number;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  examples?: string;
  status: 'active' | 'coming-soon' | 'research';
}

interface BenefitData {
  title: string;
  description: string;
  icon: string;
  order: number;
}

const researchTracks: ResearchTrackData[] = [
  {
    name: 'Humanoid Robots',
    slug: 'humanoid-robots',
    order: 1,
    icon: 'User',
    shortDescription: 'Building advanced bipedal robots for human environments',
    fullDescription: 'Research and development of humanoid robotic platforms capable of navigating and operating in human-centric environments. Focus on bipedal locomotion, manipulation, and human-robot interaction.',
    status: 'active'
  },
  {
    name: 'Quadrupeds',
    slug: 'quadrupeds',
    order: 2,
    icon: 'Dog',
    shortDescription: 'Four-legged robots for diverse terrain navigation',
    fullDescription: 'Development of quadrupedal robots with advanced mobility capabilities. Research includes dynamic locomotion, rough terrain navigation, and autonomous exploration.',
    status: 'active'
  },
  {
    name: 'Assistive Robotics',
    slug: 'assistive-robotics',
    order: 3,
    icon: 'Heart',
    shortDescription: 'Robots designed to help people with daily tasks',
    fullDescription: 'Creating assistive robotic systems that enhance quality of life for individuals with disabilities or mobility challenges. Focus on safety, reliability, and intuitive interaction.',
    status: 'active'
  },
  {
    name: 'Perception & Vision-Language Models',
    slug: 'perception-vlm',
    order: 4,
    icon: 'Eye',
    shortDescription: 'Advanced computer vision and multimodal AI for robots',
    fullDescription: 'Integrating state-of-the-art vision-language models with robotic systems to enable sophisticated scene understanding, natural language grounding, and context-aware decision making.',
    status: 'active'
  },
  {
    name: 'Swarm & Multi-Agent Systems',
    slug: 'swarm-multi-agent',
    order: 5,
    icon: 'Network',
    shortDescription: 'Coordinated teams of robots working together',
    fullDescription: 'Research in distributed robotics, swarm intelligence, and multi-agent coordination. Exploring emergent behaviors and scalable control strategies for robot teams.',
    status: 'active'
  },
  {
    name: 'Simulation & Digital Twins',
    slug: 'simulation',
    order: 6,
    icon: 'Cpu',
    shortDescription: 'Virtual environments for testing and training',
    fullDescription: 'Developing high-fidelity simulation environments and digital twin technologies for rapid prototyping, testing, and training of robotic systems before real-world deployment.',
    status: 'active'
  },
  {
    name: 'Open Source Tooling',
    slug: 'open-tooling',
    order: 7,
    icon: 'Code',
    shortDescription: 'Accessible tools and frameworks for the robotics community',
    fullDescription: 'Building and maintaining open-source software tools, libraries, and frameworks that accelerate robotics research and development across the community.',
    status: 'active'
  },
  {
    name: 'Space Robotics',
    slug: 'space-robotics',
    order: 8,
    icon: 'Rocket',
    shortDescription: 'Robots for extreme environments and space exploration',
    fullDescription: 'Developing robotic systems for space applications, including planetary rovers, orbital servicing, and autonomous systems for extreme environments.',
    status: 'active'
  }
];

const benefits: BenefitData[] = [
  {
    title: 'Access to Robots',
    description: 'Work hands-on with cutting-edge robotic platforms including humanoids, quadrupeds, and custom systems.',
    icon: 'Bot',
    order: 1
  },
  {
    title: 'Research Pipeline',
    description: 'Structured pathway from ideation to publication with mentorship and collaboration opportunities.',
    icon: 'GitBranch',
    order: 2
  },
  {
    title: 'Open Source First',
    description: 'All research outputs, code, and tools are open source, maximizing impact and accessibility.',
    icon: 'Share2',
    order: 3
  },
  {
    title: 'Rapid Prototyping',
    description: 'State-of-the-art facilities and resources for quickly building and testing new ideas.',
    icon: 'Zap',
    order: 4
  },
  {
    title: 'Human-Robot Interaction',
    description: 'Focus on making robots that work seamlessly with people in real-world environments.',
    icon: 'Users',
    order: 5
  },
  {
    title: 'Immediate Impact',
    description: 'Research designed to address real problems and create tangible benefits for society.',
    icon: 'Target',
    order: 6
  }
];

async function createEntry(endpoint: string, data: any) {
  const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({ data })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create ${endpoint}: ${response.status} ${error}`);
  }

  return response.json();
}

async function populateContent() {
  console.log('🚀 Starting content population...\n');

  // Populate Research Tracks
  console.log('📚 Creating Research Tracks...');
  for (const track of researchTracks) {
    try {
      await createEntry('research-tracks', track);
      console.log(`✅ Created: ${track.name}`);
    } catch (error) {
      console.error(`❌ Failed to create ${track.name}:`, error);
    }
  }

  console.log('\n🎁 Creating Benefits...');
  // Populate Benefits
  for (const benefit of benefits) {
    try {
      await createEntry('benefits', benefit);
      console.log(`✅ Created: ${benefit.title}`);
    } catch (error) {
      console.error(`❌ Failed to create ${benefit.title}:`, error);
    }
  }

  console.log('\n✨ Content population complete!');
}

populateContent().catch(console.error);
