const iconStr = "/assets/icons/Web-dev"
const appIconStr = "/assets/icons/app-dev"
const ThrreDStr = "/assets/icons/3d"
const TwoDStr = "/assets/icons/2d"
const gameDevIcon = "/assets/icons/game-dev"
const programingIcon = "/assets/icons/programing"
const basicomputerIcon = "/assets/icons/basic-computer"

const courses = [{
    name: 'Web Development Course',
    description: 'Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack).',
    slug: 'web-development',
    bannerImg: '',
    stats: ['3 Months', 5, 'Medium', 'Offline'],
    softwareCovered: [`${iconStr}/HTML.png`, `${iconStr}/Git.png`, `${iconStr}/js.svg`, `${iconStr}/node.svg`, `${iconStr}/mongo.svg`, `${iconStr}/MySQL.png`, `${iconStr}/expressjs.png`, `${iconStr}/aws.png`, `${iconStr}/babel_logo.svg`, `${iconStr}/webpack.svg`],
    subCourses: [{
        courseImg: '/assets/images/web-dev/front.png',
        heading: 'Front End Web Development Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git.'

    }, {
        courseImg: '/assets/images/web-dev/fullStack.png',
        heading: 'Full Stack Web Development Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git.'

    }]
},
{
    name: 'App Development Course',
    description: 'In App development course you will learn object-oriented programming from start to finish on one of the most versatile tech stacks for making platform independent is : Flutter, dart',
    slug: 'app-development',
    bannerImg: '/assets/images/app.png',
    width: 1200,
    subCourses: [{
        courseImg: '/assets/images/app/app-card-img1.png',
        heading: 'Basic App Development Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our Basic App Development Course offers a comprehensive and hands-on learning experience, equipping you with the fundamental skills to build your own mobile applications using Flutter, manage data efficiently, implement version control with Git, and leverage the power of Firebase for seamless backend integration.'

    }, {
        courseImg: '/assets/images/app/app-card-img-2.png',
        heading: 'Advance App Development Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our Advanced Basic App Development Course offers a comprehensive and intensive learning experience,  Data Management, Git, Firebase, and Android development. This advanced course is designed to equip you with the expertise required to build powerful, feature-rich applications for various platforms.'

    }],
    stats: ['3 Months', 6, 'Medium', 'Offline'],
    softwareCovered: [`${appIconStr}/android studio.png`, `${appIconStr}/Dart.png`, `${appIconStr}/firebase.png`, `${appIconStr}/Flutter.png`, `${appIconStr}/Java.png`, `${appIconStr}/Kotlin.png`],
},
{
    name: 'Game Development Course',
    description: 'Our Game Development program is designed to unleash your creativity and equip you with the skills needed to create interactive and engaging games across various platforms with the Tech Stack of: Unity,C#,photon.',
    slug: 'game-development',
    bannerImg: '/assets/images/game/game_1.webp',
    width: 600,
    subCourses: [{
        courseImg: '/assets/images/game/game-card.png',
        heading: 'Basic Game Development Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our Basic Game Development Course offers an exciting and hands-on learning experience, introducing you to the fundamentals of game development using C#, Unity, and Photon. Whether youre a beginner with little or no programming experience or a hobbyist looking to dive into game development.'

    }, {
        courseImg: '/assets/images/game/game-card-img-2.png',
        heading: 'Advance Game Development Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our Advanced Game Development Course offers a comprehensive and hands-on learning experience, empowering you to become a proficient game developer using C Sharp, Unity, Photon, Photoshop, Illustrator, and Blender.'

    }],
    stats: ['3 Months', 5, 'Medium', 'Offline'],
    softwareCovered: [`${gameDevIcon}/CSharp.png`, `${gameDevIcon}/Unity.png`, `${gameDevIcon}/photon_1.png`],
},
{
    name: '3D Graphics Course',
    description: 'Our course offers a comprehensive introduction to the fascinating realm of 3D graphics. You will learn the principles and techniques behind creating realistic 3D models, environments, animations, and special effects.',
    slug: '3d-graphics',
    width: 600,
    subCourses: [{
        courseImg: '/assets/images/3d/3d1_1.png',
        heading: 'Basic 3D Graphics Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential.'

    }, {
        courseImg: '/assets/images/3d/3d-card-img.png',
        heading: 'Advance 3D Graphics Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential.'

    }],
    animate: true,
    bannerImg: '/assets/images/3d/3d_1.webp',
    stats: ['6 Months', 10, 'Medium', 'Offline'],
    softwareCovered: [`${ThrreDStr}/blender.png`, `${ThrreDStr}/substance.png`, `${ThrreDStr}/zbrush.png`],
},
{
    name: '2D Graphics Course',
    description: 'Our course offers a comprehensive introduction to the exciting field of 2D graphics. You will learn the principles and techniques behind creating visually appealing 2D artwork, illustrations, animations, and user interfaces.',
    slug: '2d-graphics',
    width: 1200,
    subCourses: [{
        courseImg: '/assets/images/2d/2d2_1.png',
        heading: 'Basic 2D Graphics Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our Basic 2D Graphics Course offers an immersive and practical learning experience, equipping you with the essential skills to work with industry-standard software like Photoshop, Illustrator, and InDesign. Whether you are a beginner with no prior design experience or a creative enthusiast looking to enhance your graphic design skills, this course is the perfect starting point for you.'

    }, {
        courseImg: '/assets/images/2d/2d1.png',
        heading: 'Advance 2D Graphics Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our Advanced 2D Graphics Course offers an intensive and hands-on learning experience, empowering you to become a skilled graphic designer proficient in Adobe Photoshop, Illustrator, InDesign, and After Effects. This course is designed for experienced designers or individuals seeking to specialize in advanced graphic design techniques and motion graphics.'

    }],
    bannerImg: '/assets/images/2d/2d_1.png',
    stats: ['2 Months', 5, 'Medium', 'Offline'],
    softwareCovered: [`${TwoDStr}/after_effects.png`, `${TwoDStr}/AI.png`, `${TwoDStr}/audition.png`, `${TwoDStr}/indesign.png`, `${TwoDStr}/Photoshop.png`, `${TwoDStr}/premiere.png`, `${TwoDStr}/xd.png`],
},
{
    name: 'Programing Course',
    description: 'Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..',
    slug: 'programing',
    bannerImg: '/assets/images/programing/programing.webp',
    width: 500,
    subCourses: [{
        courseImg: '/assets/images/game/game-card.png',
        heading: 'Basic Programing  Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our C Programming Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you.'

    }, {
        courseImg: '/assets/images/game/game-card-img-2.png',
        heading: 'Advance Programing Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our C Programming Advanced Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you.'

    }],
    stats: ['2 Months', 5, 'Medium', 'Offline'],
    softwareCovered: [`${programingIcon}/c.png`, `${programingIcon}/c++.png`, `${programingIcon}/nympy1.png`, `${programingIcon}/pandas.png`, `${programingIcon}/python.png`, `${programingIcon}/sql.png`],
},

{
    name: 'Basic Computer Course',
    description: 'Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..',
    slug: 'basic-computer',
    bannerImg: '/assets/images/basic-computer/basicComputer.webp',
    width: 700,
    subCourses: [{
        courseImg: '/assets/images/game/game-card.png',
        heading: 'Basic Computer  Course',
        skillLevel: 'Intermediate',
        duration: '3 Months',
        description: 'Our basic Fundamental Computer Course offers a beginner-friendly and hands-on learning experience, introducing you to the fundamental software applications like Microsoft Word and PowerPoint. Whether you are a student, a working professional, or an individual eager to enhance your computer literacy, this course is the perfect starting point for you.'

    }, {
        courseImg: '/assets/images/game/game-card-img-2.png',
        heading: 'Advance Computer Course',
        skillLevel: 'Advanced',
        duration: '6 Months',
        description: 'Our advanced Fundamental Computer Course offers a comprehensive and beginner-friendly learning experience, introducing you to the fundamental software applications like Microsoft Word, Microsoft Excel, Tally, and PowerPoint. Whether you are a student, a working professional, or an individual looking to enhance your computer literacy, this course is the perfect starting point for you.'

    }],
    stats: ['2 Months', 5, 'Medium', 'Offline'],
    softwareCovered: [`${basicomputerIcon}/excel.png`, `${basicomputerIcon}/powerpoint.png`, `${basicomputerIcon}/tally.png`, `${basicomputerIcon}/word.png`],
}

]

export { courses }