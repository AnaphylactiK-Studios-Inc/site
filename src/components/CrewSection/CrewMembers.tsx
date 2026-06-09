export interface CrewMemberInterface {
    name: string;
    role: string[];
    bio: string;
    imageUrl: string;
    links: string[];
}

export const CrewMembers: CrewMemberInterface[] = [
    {
        name: "Chloe",
        role: ["Co-Founder", "Developer"],
        bio: "Meow meow.",
        imageUrl: "https://example.com/chloe.jpg",
        links: ["https://www.linkedin.com/in/chloe"]
    },
    {
        name: "Maddie",
        role: ["Co-Founder", "Developer"],
        bio: "Meow meow.",
        imageUrl: "https://example.com/madeline.jpg",
        links: ["https://www.linkedin.com/in/madeline"]

    },

];