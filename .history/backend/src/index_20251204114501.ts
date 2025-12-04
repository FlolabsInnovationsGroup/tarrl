// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log('🌱 Checking if initial content needs to be populated...');

    try {
      // Check if research tracks already exist
      const existingTracks = await strapi.entityService.findMany(
        'api::research-track.research-track',
        { limit: 1 }
      );

      if (existingTracks && existingTracks.length > 0) {
        console.log('✅ Content already exists, skipping population');
        return;
      }

      console.log('📚 Populating research tracks...');

      const researchTracks = [
        {
          name: 'Humanoid Robots',
          order: 1,
          icon: 'User',
          shortDescription: 'Building advanced bipedal robots for human environments',
          fullDescription: 'Research and development of humanoid robotic platforms capable of navigating and operating in human-centric environments. Focus on bipedal locomotion, manipulation, and human-robot interaction.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Quadrupeds',
          order: 2,
          icon: 'Dog',
          shortDescription: 'Four-legged robots for diverse terrain navigation',
          fullDescription: 'Development of quadrupedal robots with advanced mobility capabilities. Research includes dynamic locomotion, rough terrain navigation, and autonomous exploration.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Assistive Robotics',
          order: 3,
          icon: 'Heart',
          shortDescription: 'Robots designed to help people with daily tasks',
          fullDescription: 'Creating assistive robotic systems that enhance quality of life for individuals with disabilities or mobility challenges. Focus on safety, reliability, and intuitive interaction.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Perception & Vision-Language Models',
          order: 4,
          icon: 'Eye',
          shortDescription: 'Advanced computer vision and multimodal AI for robots',
          fullDescription: 'Integrating state-of-the-art vision-language models with robotic systems to enable sophisticated scene understanding, natural language grounding, and context-aware decision making.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Swarm & Multi-Agent Systems',
          order: 5,
          icon: 'Network',
          shortDescription: 'Coordinated teams of robots working together',
          fullDescription: 'Research in distributed robotics, swarm intelligence, and multi-agent coordination. Exploring emergent behaviors and scalable control strategies for robot teams.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Simulation & Digital Twins',
          order: 6,
          icon: 'Cpu',
          shortDescription: 'Virtual environments for testing and training',
          fullDescription: 'Developing high-fidelity simulation environments and digital twin technologies for rapid prototyping, testing, and training of robotic systems before real-world deployment.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Open Source Tooling',
          order: 7,
          icon: 'Code',
          shortDescription: 'Accessible tools and frameworks for the robotics community',
          fullDescription: 'Building and maintaining open-source software tools, libraries, and frameworks that accelerate robotics research and development across the community.',
          status: 'active',
          publishedAt: new Date(),
        },
        {
          name: 'Space Robotics',
          order: 8,
          icon: 'Rocket',
          shortDescription: 'Robots for extreme environments and space exploration',
          fullDescription: 'Developing robotic systems for space applications, including planetary rovers, orbital servicing, and autonomous systems for extreme environments.',
          status: 'active',
          publishedAt: new Date(),
        },
      ];

      for (const track of researchTracks) {
        await strapi.entityService.create('api::research-track.research-track', {
          data: track,
        });
        console.log(`✅ Created: ${track.name}`);
      }

      console.log('\n🎁 Populating benefits...');

      const benefits = [
        {
          title: 'Access to Robots',
          description: 'Work hands-on with cutting-edge robotic platforms including humanoids, quadrupeds, and custom systems.',
          icon: 'Bot',
          order: 1,
          publishedAt: new Date(),
        },
        {
          title: 'Research Pipeline',
          description: 'Structured pathway from ideation to publication with mentorship and collaboration opportunities.',
          icon: 'GitBranch',
          order: 2,
          publishedAt: new Date(),
        },
        {
          title: 'Open Source First',
          description: 'All research outputs, code, and tools are open source, maximizing impact and accessibility.',
          icon: 'Share2',
          order: 3,
          publishedAt: new Date(),
        },
        {
          title: 'Rapid Prototyping',
          description: 'State-of-the-art facilities and resources for quickly building and testing new ideas.',
          icon: 'Zap',
          order: 4,
          publishedAt: new Date(),
        },
        {
          title: 'Human-Robot Interaction',
          description: 'Focus on making robots that work seamlessly with people in real-world environments.',
          icon: 'Users',
          order: 5,
          publishedAt: new Date(),
        },
        {
          title: 'Immediate Impact',
          description: 'Research designed to address real problems and create tangible benefits for society.',
          icon: 'Target',
          order: 6,
          publishedAt: new Date(),
        },
      ];

      for (const benefit of benefits) {
        await strapi.entityService.create('api::benefit.benefit', {
          data: benefit,
        });
        console.log(`✅ Created: ${benefit.title}`);
      }

      console.log('\n✨ Content population complete!');
    } catch (error) {
      console.error('❌ Error populating content:', error);
    }
  },
};
