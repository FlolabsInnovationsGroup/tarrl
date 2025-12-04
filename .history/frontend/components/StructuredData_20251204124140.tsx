export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "name": "TARRL - Texas Advanced Robotics Research Lab",
        "alternateName": "Texas Advanced Robotics Research Lab",
        "url": "https://tarrl.org",
        "logo": "https://tarrl.org/og-image.jpg",
        "description": "Remote-first Embodied AI research institute. Join PhD-level researchers building open-source robotics systems. Access real robots, collaborate globally, advance your career.",
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://github.com/tarrl",
          "https://twitter.com/tarrl",
          "https://linkedin.com/company/tarrl"
        ],
        "knowsAbout": [
          "Robotics",
          "Artificial Intelligence",
          "Machine Learning",
          "Embodied AI",
          "Humanoid Robotics",
          "Quadruped Robotics",
          "Computer Vision",
          "Reinforcement Learning",
          "Swarm Robotics",
          "Space Robotics"
        ],
        "department": [
          {
            "@type": "ResearchProject",
            "name": "Humanoid Robotics",
            "description": "Develop full-body humanoid robots capable of human-like manipulation and locomotion in real-world environments."
          },
          {
            "@type": "ResearchProject",
            "name": "Quadruped Robotics",
            "description": "Build agile four-legged robots for navigation, manipulation, and dynamic tasks in complex terrain."
          },
          {
            "@type": "ResearchProject",
            "name": "Assistive Robotics",
            "description": "Design robots that enhance human capabilities and support individuals with disabilities."
          },
          {
            "@type": "ResearchProject",
            "name": "Perception Systems",
            "description": "Advance multi-modal sensing, computer vision, and environmental understanding for robots."
          },
          {
            "@type": "ResearchProject",
            "name": "Swarm Robotics",
            "description": "Coordinate multiple robots to solve problems through distributed intelligence and collaboration."
          },
          {
            "@type": "ResearchProject",
            "name": "Simulation Environments",
            "description": "Create realistic physics-based simulations for training and testing robotic systems at scale."
          },
          {
            "@type": "ResearchProject",
            "name": "Tooling & Infrastructure",
            "description": "Develop open-source frameworks, libraries, and developer tools for the robotics community."
          },
          {
            "@type": "ResearchProject",
            "name": "Space Robotics",
            "description": "Engineer robots for space exploration, satellite servicing, and extraterrestrial operations."
          }
        ]
      },
      {
        "@type": "WebSite",
        "name": "TARRL",
        "url": "https://tarrl.org",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tarrl.org/#research-tracks",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "TARRL",
        "description": "Remote-first Embodied AI research institute",
        "url": "https://tarrl.org",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Research Inquiries",
          "email": "research@tarrl.org"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "TARRL",
        "educationalCredentialAwarded": "Research Associate Position",
        "offers": {
          "@type": "Offer",
          "category": "Remote Research Position",
          "eligibleRegion": {
            "@type": "Place",
            "name": "Worldwide"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
