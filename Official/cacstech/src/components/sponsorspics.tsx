import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { src: "/sponsors/redbull.png", title: "RED BULL" },
  { src: "/sponsors/manyavar.jpeg", title: "MANYAVAR" },
  { src: "/sponsors/belgian.jpeg", title: "THE BELGIAN WAFFLE" },
  { src: "/sponsors/ambey.jpeg", title: "Ambey Burger" },
  { src: "/sponsors/dainik.jpeg", title: "DAINIK BHASKAR" },
  { src: "/sponsors/bsnl.jpeg", title: "BSNL" },
  { src: "/sponsors/barbeque.jpg", title: "THE BARBEQUE NATION" },
  { src: "/sponsors/patrika.jpeg", title: "RAJASTHAN PATRIKA" },
];

const Sponsors = () => {
  return (
    <div className="py-16 px-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR PAST SPONSORS
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.title}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
          >
            <div className="w-40 h-40 relative mb-4 bg-white rounded-lg shadow-md p-4">
              <Image
                src={sponsor.src}
                alt={sponsor.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-center font-medium text-white">
              {sponsor.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
