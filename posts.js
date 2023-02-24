posts = [
{
    "subject" : "Hello World!",
    "date" : "02/24/2023",
    "message" :

      "<br>My Github<br><br>"

      + "<a href='https://github.com/Jmtri7'>https://github.com/Jmtri7</a><br>"

      + "${newline}Work In Progress${newline}"

      + writeLink('JSengine', 'JS Engine')

      + "${newline}Games${newline}"

      + writeLink('OrcSlayer', 'Orc Slayer')
      + writeLink('TileWorld', 'Tile World')

      + "${newline}Animations${newline}"

      + writeLink('Render3D', 'Render 3D')
      + writeLink('VisualMaths', 'Visual Maths')
      + writeLink('SpaceStation', 'Space Station')
      + writeLink('BouncingBoxes', 'Bouncing Boxes')
      + writeLink('ProjectileViewer', 'Projectile Viewer')

      + "${newline}Senior Project Blog${newline}"

      + writeLink('SeniorProject', '${githubURL}/SeniorProject/'),

    "img" : null,
    "video" : "seniorprojectdemo.mp4",
},
];
writePosts();