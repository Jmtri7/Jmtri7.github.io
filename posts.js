posts = [
{
    "subject" : "Hello World!",
    "date" : "02/24/2023",
    "message" :

      "<br>My Github${newline}"

      + writeLink('https://github.com/Jmtri7', 'https://github.com/Jmtri7')

      + "${newline}Work In Progress${newline}"

      + writeLink('${githubURL}JSengine', 'JS Engine')

      + "${newline}Games${newline}"

      + writeLink('${githubURL}OrcSlayer', 'Orc Slayer')
      + writeLink('${githubURL}TileWorld', 'Tile World')

      + "${newline}Animations${newline}"

      + writeLink('${githubURL}Render3D', 'Render 3D')
      + writeLink('${githubURL}VisualMaths', 'Visual Maths')
      + writeLink('${githubURL}SpaceStation', 'Space Station')
      + writeLink('${githubURL}BouncingBoxes', 'Bouncing Boxes')
      + writeLink('${githubURL}ProjectileViewer', 'Projectile Viewer')

      + "${newline}Senior Project Blog${newline}"

      + writeLink('${githubURL}SeniorProject', '${githubURL}SeniorProject/'),

    "img" : null,
    "video" : "seniorprojectdemo.mp4",
},
];
writePosts();