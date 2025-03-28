"use client";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ButtonModes() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme} = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder with the same dimensions as the button
        // to avoid layout shift during hydration
        return (
            <Button aria-label="Toggle dark mode" asChild>
                <div className="w-6 h-6" />
            </Button>
        );
    }

    return (
        <Button 
            aria-label="Toggle dark mode" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6" />
            ) : (
                <Moon className="w-6 h-6" />
            )}
        </Button>
    );
}