// components/StayInformed.tsx
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Naija Spirit: Unique Powers of Resilience or Learned Helplessness?",
    image: "it1.png", // replace with actual images in /public
    link: "#",
  },
  {
    id: 2,
    title: "Ignorance Around Mental Health Challenges is Expensive",
    image: "it2.png",
    link: "#",
  },
  {
    id: 3,
    title:
      "Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia",
    image: "it3.png",
    link: "#",
  },
];

export default function StayInformed() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <p className="text-green-600 font-medium mb-2">Stay Informed</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-3xl">
          Through advocacy, education, and support, we’re building a stigma-free
          future for mental health in Nigeria.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                <img
                  src={article.image}
                  alt={article.title}
                  
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {article.title}
              </h3>
              <a
                href={article.link}
                className="mt-3 text-blue-600 font-medium hover:underline flex items-center gap-1"
              >
                READ MORE <span className="text-lg">›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
