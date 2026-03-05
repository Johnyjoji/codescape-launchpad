"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the type for a single team member
export type TeamMember = {
    id: string | number;
    name: string;
    role: string;
    bio: string;
    imageSrc: string;
    thumbnailSrc: string;
};

// Define the props for the slider component
interface TeamSliderProps {
    members: TeamMember[];
    /** Optional class name for the container */
    className?: string;
}

/**
 * A reusable, animated team slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TeamSlider = ({
    members,
    className,
}: TeamSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 'direction' helps framer-motion understand slide direction (next vs. prev)
    const [direction, setDirection] = useState<"left" | "right">("right");

    const activeMember = members[currentIndex];

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    const handlePrev = () => {
        setDirection("left");
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    const handleThumbnailClick = (index: number) => {
        // Determine direction for animation
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    // Get the next up to 3 members for the thumbnails, excluding the current one
    // We want to show a preview of other members
    const thumbnailMembers = members
        .filter((_, i) => i !== currentIndex)
        .slice(0, 3);

    // Animation variants for the main image
    const imageVariants = {
        enter: (direction: "left" | "right") => ({
            y: direction === "right" ? "100%" : "-100%",
            opacity: 0,
        }),
        center: { y: 0, opacity: 1 },
        exit: (direction: "left" | "right") => ({
            y: direction === "right" ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    // Animation variants for the text content
    const textVariants = {
        enter: (direction: "left" | "right") => ({
            x: direction === "right" ? 50 : -50,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: "left" | "right") => ({
            x: direction === "right" ? -50 : 50,
            opacity: 0,
        }),
    };

    return (
        <div
            className={cn(
                "relative w-full min-h-[600px] md:min-h-[500px] overflow-hidden bg-transparent text-foreground p-4 md:p-8",
                className
            )}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
                {/* === Left Column: Meta and Thumbnails === */}
                <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
                    <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
                        {/* Pagination */}
                        <span className="text-sm text-muted-foreground font-mono">
                            {String(currentIndex + 1).padStart(2, "0")} /{" "}
                            {String(members.length).padStart(2, "0")}
                        </span>
                        {/* Vertical "Team" Text */}
                        <h2 className="text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
                            THE TEAM
                        </h2>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex space-x-2 mt-8 md:mt-0">
                        {thumbnailMembers.map((member) => {
                            // Find the original index to navigate to
                            const originalIndex = members.findIndex(
                                (m) => m.id === member.id
                            );
                            return (
                                <button
                                    key={member.id}
                                    onClick={() => handleThumbnailClick(originalIndex)}
                                    className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                                    aria-label={`View ${member.name}`}
                                >
                                    <img
                                        src={member.thumbnailSrc}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* === Center Column: Main Image === */}
                <div className="md:col-span-4 relative h-80 min-h-[350px] md:min-h-[450px] order-1 md:order-2">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={activeMember.imageSrc}
                            alt={activeMember.name}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} // Cubic bezier for smooth ease
                            className="absolute inset-0 w-full h-full object-cover rounded-lg border border-border/50"
                        />
                    </AnimatePresence>
                </div>

                {/* === Right Column: Text and Navigation === */}
                <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
                    {/* Text Content */}
                    <div className="relative overflow-hidden pt-4 md:pt-16 min-h-[250px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <p className="text-sm font-medium text-primary uppercase tracking-widest">
                                    {activeMember.role}
                                </p>
                                <h3 className="text-3xl font-bold mt-2">
                                    {activeMember.name}
                                </h3>
                                <blockquote className="mt-6 text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground italic">
                                    "{activeMember.bio}"
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-2 mt-8 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-12 h-12 border-border/50 bg-background/50 backdrop-blur-sm"
                            onClick={handlePrev}
                            aria-label="Previous member"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                            onClick={handleNext}
                            aria-label="Next member"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
