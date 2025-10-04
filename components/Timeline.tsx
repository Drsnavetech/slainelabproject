// components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Milestone {
  title: string;
  description: string;
  image?: string;
}

interface YearData {
  year: string;
  milestones: Milestone[];
}

const timelineData: YearData[] = [
  {
    year: "2019",
    milestones: [
      {
        title: "Optimal Mental Health Debut",
        description: "Introducing a platform dedicated to promoting mental well-being and awareness in Ibadan, Lagos and Abuja.",
        image: "asidoibadan.png",
      },
      {
        title: "Asido Campus Network Launched",
        description: "Pioneering student-led mental health advocacy at the University of Ibadan.",     
        image: "20192.jpg",
      },
      {
        title: "Community Engagement Series Begins",
        description: "First interactive monthly series fostering dialogue and education on mental health.",
      },
    ],
  },
  {
    year: "2020",
    milestones: [
      {
        title: "Unashamed Campaign Launched",
        description:
          "Challenging stigma and empowering open conversations about mental health.",
        image: "unashamed.jpg",
      },
      {
        title: "LIMI Africa Storytelling Series Kicks Off",
        description:
          "Sharing real stories to amplify voices and lived experiences in mental health.",
        image: "20202.png",
      },
      {
        title: "Emergency Helpline Inaugurated",
        description: "Launching a lifesaving support line for psychosocial emergencies."
      }
    ],
  },
  {
    year: "2021",
    milestones: [
      {
        title: "Project Hope Commences",
        description:
          "Providing targeted support and hope to those facing mental health challenges."
      },
      {
        title: "First Suicide Prevention Walk",
        description: "Uniting the community to raise awareness and advocate for prevention.",
        image: "suicide.jpg"
      },
      {
        title: "Inaugural JAME Competition",
        description: "Empowering youth through mental health-themed creativity and advocacy.",
        image: "walk.jpg"
      },
      {
        title: "Donate-a-Book Drive Launched",
        description: "Promoting knowledge-sharing and mental health education through books.",
        image: "book.jpg"
      }
    ],
  },
  {
    year: "2022",
    milestones: [
      {
        title: "Mindset Radio Show Goes Live",
        description: "Weekly conversations on mental health reaching a broader audience.",
        image: "radio.jpg",
      },
    ],
  },
  {
    year: "2023",
    milestones: [
      {
        title: "Mental Health Bill Passed",
        description:
          "Successfully advocating for the historic passing of Nigeria’s Mental Health Bill.",
      },
      {
        title: "Lagos State Recognition",
        description:
          "Honored for outstanding contributions to community mental health and advocacy.",
          image: "20231.jpg"
      },
    ],
  },
  {
    year: "2024",
    milestones: [
      {
        title: "ACAMH LMICs Innovation Award",
        description:
          "Recognized internationally for innovation in mental health research and practice.",
        image: "20241.png",
      },
      {
        title: "Most Outstanding Student Association",
        description:
          "Asido Campus Network honored for exceptional impact on Nigerian campuses.",
        image: "20242.jpg",
      },
      {
        title: "National Suicide Prevention Conference",
        description:
          "Bringing stakeholders together in Abuja to advance prevention efforts nationwide.",
        image: "20243.jpg",
      },
      {
        title: "Advocacy Visit to Attorney General",
        description:
          "Campaigning for the decriminalization of attempted suicide in Nigeria.",
        image: "20244.png",
      },
      {
        title: "Public Hearing Mobilization",
        description:
          "Engaging the public and submitting a formal memorandum to influence policy.",
      },
      {
        title: "Partnership",
        description:
          "Forging global collaboration to strengthen crisis intervention and support.",
        image: "20245.png",
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      {/* Intro text */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Since inception in 2019, Asido Foundation has led bold advocacy for
          mental health reform. These range from public awareness campaigns to
          the passage of the 2021 Mental Health Act.
        </h2>
      </div>

      {/* Central vertical line */}
      <div className="absolute left-1/2 top-50 h-full w-[2px] bg-blue-200 -translate-x-1/2" />

      {timelineData.map((yearBlock, yearIndex) => (
        <YearBlock
          key={yearBlock.year}
          year={yearBlock.year}
          milestones={yearBlock.milestones}
          yearIndex={yearIndex}
        />
      ))}
    </section>
  );
}

function YearBlock({
  year,
  milestones,
  yearIndex,
}: {
  year: string;
  milestones: Milestone[];
  yearIndex: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isLeft = yearIndex % 2 === 0; // alternate sides per year

  return (
    <div
      ref={ref}
      className={`relative mb-24 flex flex-col md:flex-row items-start ${
        isLeft ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* Left-side block */}
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pr-10 text-right"
        >
          <MilestoneList milestones={milestones} />
        </motion.div>
      )}

      {/* Node + Year Label */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: [1.3, 1], opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center mx-auto"
      >
        <div className="w-6 h-6 bg-blue-600 rounded-full shadow-md" />
        <div
          className={`absolute text-blue-700 font-semibold ${
            isLeft ? "-left-16" : "-right-16"
          }`}
        >
          {year}
        </div>
      </motion.div>

      {/* Right-side block */}
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pl-10 text-left"
        >
          <MilestoneList milestones={milestones} />
        </motion.div>
      )}
    </div>
  );
}

function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="space-y-8">
      {milestones.map((m, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">{m.title}</h3>
          <p className="mt-2 text-gray-600">{m.description}</p>
          {m.image && (
            <img
              src={m.image}
              alt={m.title}
              className="mt-4 rounded-xl w-full object-cover max-h-72"
            />
          )}
        </div>
      ))}
    </div>
  );
}
