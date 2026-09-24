const GITHUB_URL = "https://jmtri7.github.io/";

const posts = [
  {
    subject: "Hello World!",
    date: "02/24/2023",
    sections: [
      { heading: "My Github", links: [{ text: "https://github.com/Jmtri7", url: "https://github.com/Jmtri7" }] },
      {
        heading: "Games",
        links: [
          { text: "Orc Slayer", url: `${GITHUB_URL}OrcSlayer` },
          { text: "Tile World", url: `${GITHUB_URL}TileWorld` },
        ],
      },
      {
        heading: "Animations",
        links: [
          { text: "Render 3D", url: `${GITHUB_URL}Render3D` },
          { text: "Visual Maths", url: `${GITHUB_URL}VisualMaths` },
          { text: "Space Station", url: `${GITHUB_URL}SpaceStation` },
          { text: "Bouncing Boxes", url: `${GITHUB_URL}BouncingBoxes` },
          { text: "Projectile Viewer", url: `${GITHUB_URL}ProjectileViewer` },
        ],
      },
      {
        heading: "Senior Project Blog",
        links: [{ text: `${GITHUB_URL}SeniorProject/`, url: `${GITHUB_URL}SeniorProject/` }],
      },
    ],
    img: null,
    video: "seniorprojectdemo.mp4",
  },
];
