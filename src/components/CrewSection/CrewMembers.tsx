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
        role: ["Team Lead", "Developer"],
        bio: "Growing up immersed in Minecraft every weekend, Chloe knew from a young age that she wanted to create fun and meaningful experiences that encourage others to dream beyond what seems currently possible, just as games have done for her. With her interdisciplinary background, she is drawn to the convergence of art forms and technology within video games. Chloe is particularly inspired by the creative storytelling and player agency in Heavy Rain, and the imaginative nature of the Bioshock universe.",
        imageUrl: "https://example.com/chloe.jpg",
        links: ["https://bigcheungus.itch.io"]
    },
    {
        name: "Maddie",
        role: ["Programming Lead", "Developer"],
        bio: "Maddie’s passion for video games stretches back to infancy, where she learned to read from playing Pokémon games and reading game manuals for other Nintendo classics. But, it was games like LittleBigPlanet that sparked her ideas to build worlds and share them with others. She believes games are a uniquely powerful medium for bringing people together through storytelling, creativity, and fantastical experiences woven into everyday life. Her work is constantly influenced by Media Molecule, Bethesda, old-school Maplestory, and indie titles like Night in the Woods and Slay the Spire.",
        imageUrl: "https://example.com/madeline.jpg",
        links: ["https://madelahn.com"]
    },
    // {
    //     name: "Celina",
    //     role: ["Co-Founder", "Developer"],
    //     bio: "",
    //     imageUrl: "https://example.com/celina.jpg",
    //     links: []
    // },
    {
        name: "Jayden",
        role: ["Developer"],
        bio: "Jayden’s first exposure to how immersive a game could be was when he played LocoRoco 2 when he was just a child. Ever since then, Jayden was inspired by many games throughout his childhood and teenage years. There were so many game worlds out there, created by so many developers, with so many aspects to consider throughout development. It was his wish to create his own unique game world. Fast forward to today, Jayden has made several games of his own, each with their own distinct charm. But he still dreams of creating the perfect game to present to the world. Some of Jayden’s favourite games include Demon Bluff, Cult of the Lamb, Chants of Senaar, A Dance of Fire and Ice, Just Shapes and Beats, and Death and Taxes. But Jacksmith from the age of Flash games will always hold a special place in his heart.",
        imageUrl: "https://example.com/jayden.jpg",
        links: ["https://akata-ryuuko.itch.io"]
    },
    {
        name: "Raffaela",
        role: ["Art Lead", "3D Artist"],
        bio: "Raffaela is a watercolour painter and 3D artist based in Toronto with a passion for depicting cute animals in her art. She has earned both a Bachelor of Fine Arts at York University and a diploma in 3D Animation at Centennial College. From a young age, she always enjoyed obsessing over anything with an engaging story, particularly novels and animated films, but it wouldn't be until high school that she discovered the valuable impact of video games as an interactive form of storytelling. She is now a gaming enthusiast with one of her all-time favourites being Fire Emblem Awakening. It is her belief that there is power in positivity and that video games just might be the perfect vehicle for inspiring others to be brave.",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://linktr.ee/raff.paints"]
    },
    {
        name: "Daniel",
        role: ["3D Artist"],
        bio: "Specializing in character design, Daniel's interest stems from drawing characters from games he has had attachments towards. This was further developed into original designs after distancing himself from a game that he took great inspiration from. Though Daniel rarely plays video games, he often watches many Youtubers who do, particularly games that support multiplayer allowing these Youtubers to play with friends and fans. It was the feeling of community that drove Daniel to share his art and fuel a desire to create his own game. The games that influenced his creativity include Minecraft, Five Nights at Freddy’s, and a few Lego games (Star Wars, Batman, and Marvel).",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://linktr.ee/Dan1Jam"]
    },
    {
        name: "Avery",
        role: ["2D Artist"],
        bio: "",
        imageUrl: "https://example.com/celina.jpg",
        links: []
    },
    {
        name: "Gigi",
        role: ["3D Artist", "Animator"],
        bio: "Pik Chi (Gigi) Chan is a Hong Kong 3D animator and 2D artist, whose work thrives on playful, heartfelt and character-driven storytelling. Inspired by games and animations, she weaves this whimsical and expressive energy into animations and illustrations, bringing life to characters, from original characters to existing characters. Gigi’s goal is to create works that offer comfort, relate and connect with viewers on a personal level via both mediums. The games and animations fueling her passion include Ace Attorney, Five Nights at Freddy’s, Sky: Children of the Light, Undertale, Barbie, Cinderella, and Sherlock Holmes and the Great Escape.",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://www.linkedin.com/in/pik-chi-gigi-chan/", "https://www.instagram.com/snoww_piu/"]
    },
    {
        name: "Bruno",
        role: ["2D Artist"],
        bio: "A Toronto-based illustrator and graphic designer with a love for all things pop-culture from today back to the mid nineties. Growing up with a love of obscure JRPGs, anime, and lore-heavy world building, Bruno is always striving to create art that feels like a snapshot into another realm -- hopefully one you'd like to see more of. A true believer in video games as a powerful form of art, Bruno hopes to be part of the creation of something that’s as special as the works that made him who he is today.",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://pantscat.myportfolio.com/", "https://www.instagram.com/pantscatdoesart/"]
    },
    {
        name: "Richard",
        role: ["Creative Director", "Sound Designer"],
        bio: "Having discovered his love of electronic music as a teen, Richard Hu has made a name for himself in the Chinese doujinshi music community online as a producer/DJ of 8 years. He believes that audio is an integral part of visual storytelling mediums, and draws upon his diverse musical experience in classical piano and contemporary electronic dance music genres in his practice. His favourite video game composers include Hiroyuki Sawano (Xenoblade Chronicles X), Christopher Larkin (Hollow Knight), and Chris Christodoulou (Risk of Rain 2).",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://linktr.ee/frgdrgns"]
    },
    {
        name: "Ben",
        role: ["Sound Designer"],
        bio: "Ben Kemppainen is a double bassist currently studying at the University of Toronto, as well as an electric guitarist and bassist, composer, sound designer, and audio engineer. After an initial lack of interest in music as a youth, the soundtracks of video games and movies caught his attention, and a newfound fascination with music spiralled from there. Ben loves to spend his time letting curiosity lead him to learn new skills and knowledge, both inside and outside the world of music and sound. His musical inspirations range far and wide, but some favourite artists include Plini, David Maxim Micic, Sungazer, and Nobuo Uematsu.",
        imageUrl: "https://example.com/celina.jpg",
        links: ["https://www.instagram.com/benjaminkemppainen"]
    },
    {
        name: "Eric",
        role: ["Sound Designer"],
        bio: "Eric Liang is a jazz pianist and composer based in Toronto, and is an active performer in the city’s music scene. Graduating from the University of Toronto in 2026 (B. Mus), he has studied with Glenn Zaleski, David Story, Chris Donnelly, and Ethan Ardelli. Regarding music for video games and film, Eric is interested in the ways that music and sound shape spaces and experiences. His favourite artists span many genres and always change with the seasons; they currently include Louis Cole, glaive, and Wynton Kelly.",
        imageUrl: "https://example.com/celina.jpg",
        links: []
    },
];