import Image from "next/image";
import Link from "next/link";

const HeroWithNav = () => {
  return (
    <section className="w-full">
      {/* Full-Width Banner Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/hero.png"
          alt="Hero banner"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      {/* Sub Navigation Bar */}
      <div className="w-full border-b">
        <div className="flex justify-center space-x-10 py-4 text-sm font-semibold">
          <Link href="#who-we-are" className="text-blue-700 hover:underline">
            WHO WE ARE
          </Link>
          <Link href="#leadership" className="text-blue-700 hover:underline">
            LEADERSHIP
          </Link>
          <Link href="#volunteer-team" className="text-blue-700 hover:underline">
            OUR VOLUNTEER TEAM
          </Link>
          <Link href="#milestones" className="text-teal-500 hover:underline">
            MILESTONES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroWithNav;
