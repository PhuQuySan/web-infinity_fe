import React from "react";
import { Card, CardContent } from "../reusable-components/card";
import { motion } from "framer-motion";

const features = [
    {
        title: "free > fun > depends on you",
        description:
            "Learning with Infinity is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels all while gaining real-world communication skills.",
        media: (
            <img
                src="/home/cathello.gif"
                alt="GIF"
                className="max-w-full max-h-full object-contain"
            />
        )
    },
    {
        title: "Backed by Researches",
        description:
            "We use a combination of research-backed teaching methods and delightful content to create courses that effectively teach reading, writing, listening and speaking skills!",
        media: (
            <img
                src="/home/cathello.gif"
                alt="GIF"
                className="max-w-full max-h-full object-contain"
            />
        )
    },
    {
        title: "Stay motivated",
        description:
            'We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our "friendly" mascot, Infie the cat.',
        media: (
            <img
                src="/home/cathello.gif"
                alt="GIF"
                className="max-w-full max-h-full object-contain"
            />
        )
    },
    {
        title: "Trusted by the Pros",
        description:
            "We offer a real world needs based teaching program to create courses that effectively improves reading, writing, listening and speaking skills for aviation pros",
        media: (
            <img
                src="/home/cathello.gif"
                alt="GIF"
                className="max-w-full max-h-full object-contain"
            />
        )
    }
];

export default function Feature() {
    return (
        <div className="bg-white dark:bg-gray-900 py-12 space-y-16">
            {features.map((feature, index) => (
                <motion.section
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`
                    w-full max-w-[988px] 
                    h-auto md:h-[530px] 
                    flex flex-col md:flex-row 
                    ${index % 2 === 0 ? "" : "md:flex-row-reverse"} 
                    items-center justify-center 
                    mx-auto px-4 gap-10 md:gap-24
                  `}
                                >
                    <div
                        className="
      w-full max-w-[503px]
      space-y-4
      flex flex-col justify-center
      text-center md:text-left
    "
                    >
                        <h2 className="text-3xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">
                            {feature.title}
                        </h2>
                        <p className="text-muted-foreground text-lg dark:text-gray-300">
                            {feature.description}
                        </p>
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <Card className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-200 dark:bg-gray-700 border-none">
                            <CardContent className="h-full flex items-center justify-center text-xl font-semibold text-black dark:text-white">
                                {feature.media}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.section>


            ))}
        </div>
    );
}
