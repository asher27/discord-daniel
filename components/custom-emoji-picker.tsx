'use client';

import {Smile} from "lucide-react";
import data from "@emoji-mart/data";
import {useTheme} from "next-themes";

import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";

import dynamic from 'next/dynamic'

const Picker = dynamic(
    () => import('@emoji-mart/react'),
    {ssr: false}
);

interface CustomEmojiPickerProps {
    onChange: (value: string) => void;
}

const CustomEmojiPicker = ({onChange}: CustomEmojiPickerProps) => {
    const {resolvedTheme} = useTheme();

    return (
        <Popover>
            <PopoverTrigger>
                <Smile
                    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                />
            </PopoverTrigger>
            <PopoverContent
                side="right"
                sideOffset={40}
                className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
            >
                <Picker
                    theme={resolvedTheme}
                    data={data}
                    onEmojiSelect={(emoji: any) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    )
};

export default CustomEmojiPicker;
