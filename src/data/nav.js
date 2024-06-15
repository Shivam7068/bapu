export const dropdownMenus = [
    {
        title: "About", // Title for the first dropdown menu
        items: [
            { text: "About College", to: "/about" },
            { text: "Management Team", to: "/about/mentors" },
            { text: "Course", to: "/about/course" },
            { text: "Affilation/Permission", to: "/affilation" },
        ],
    },
    {
        title: "Faculty", // Title for the second dropdown menu
        items: [
            { text: "Teaching Staff", to: "https://drive.google.com/file/d/1lNwKqKU2N2TsI9qm-nKVPnB6pmRQfCin/view" },
            { text: "Hospital Staff", to: "https://drive.google.com/file/d/1WBNPFAuCxjgrNZvft750mYdqEUQxqR9A/view" },
            { text: " Non Teaching Staff", to: "https://drive.google.com/file/d/1VVoG70a8oOAbs5AXkwzmVJY2A5bHOP4g/view" },
        ],
    },
    {
        title: "Affilation/Permission", // Title for the second dropdown menu
        items: [
            { text: "Affilation University", to: "/affilation" },
            { text: "Vice Chancellor", to: "/vc-registrar" },
            { text: "University Registrar", to: "/registrar" }, // Assuming a combined link
        ],
    },
];
