const rightHeader = `
<a target="_blank" href="https://github.com/danielpqb">
    <div class="rightIcon">
        <ion-icon name="logo-github"></ion-icon>
    </div>
</a>
<a target="_blank" href="https://www.linkedin.com/in/daniel-pq-barros/">
    <div class="rightIcon">
        <ion-icon name="logo-linkedin"></ion-icon>
    </div>
</a>
<a target="_blank" href="https://discord.com/users/274740926524686336">
    <div class="rightIcon">
        <ion-icon name="logo-discord"></ion-icon>
    </div>
</a>
<a target="_blank" href="https://www.instagram.com/danielpqb/">
    <div class="rightIcon">
        <ion-icon name="logo-instagram"></ion-icon>
    </div>
</a>
<a target="_blank" href="https://www.facebook.com/danielpqb/">
    <div class="rightIcon">
        <ion-icon name="logo-facebook"></ion-icon>
    </div>
</a>`

const leftHeader = `
    <div class="profilePhoto">
        <img src="img/profilePhoto.jpg">
        <div>DANIEL BARROS</div>
    </div>

    <div class="category selectedCategory">
        <ion-icon name="person"></ion-icon>
        <h1>ABOUT ME</h1>
        <h2>WHO AM I</h2>
    </div>

    <div class="category">
        <ion-icon name="newspaper"></ion-icon>
        <h1>RESUME</h1>
        <h2>CV</h2>
    </div>

    <div class="category">
        <ion-icon name="briefcase"></ion-icon>
        <h1>PORTFOLIO</h1>
        <h2>MY WORKS</h2>
    </div>

    <div class="category">
        <ion-icon name="call"></ion-icon>
        <h1>CONTACT</h1>
        <h2>SAY HELLO</h2>
</div>`

const resumeContent = `
<div class="name">
    <h1>Daniel Pereira Queiroz Barros</h1>
    <h2>Full Stack Software Engineer Developer</h2>
</div>
<div class="section">
    <h1>Main Skills</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            width="50" height="36" alt="Javascript" />
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            width="50" height="36" alt="Typescript" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="50"
            height="36" alt="React" />
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            width="50" height="36" alt="HTML" />
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            width="50" height="36" alt="CSS" />
    </div>
</div>
<div class="section">
    <h1>Other Skills</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            width="50" height="36" alt="NodeJS" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="50"
            height="36" alt="MongoDB" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" width="50"
            height="36" alt="C#" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            width="50" height="36" alt="C" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="50"
            height="36" alt="Python" />
    </div>
</div>`

const portfolioContent = `
<div class="name">
    <h1>Daniel Pereira Queiroz Barros</h1>
    <h2>Full Stack Software Engineer Developer</h2>
</div>
<div class="section">
    <h1>Projects</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <table>
            <tr>
                <th>Deploy</th>
                <th>Repo</th>
                <th>Description</th>
                <th>Techs</th>
            </tr>
            <tr>
                <td><a href="https://danielpqb.github.io/my-first-web-game/" target="_blank">Slimeland</a>
                </td>
                <td>
                    <a href="https://github.com/danielpqb/my-first-web-game" target="_blank">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                            width="30" height="30" alt="Github" />
                    </a>
                </td>
                <td>An RPG game on your web browser</td>
                <td><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                        width="50" height="36" alt="Javascript" />
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                        width="50" height="36" alt="HTML" />
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                        width="50" height="36" alt="CSS" />
                </td>
            </tr>
            <tr>
                <td><a href="https://github.com/danielpqb/Enem2019" target="_blank">Enem 2019</a></td>
                <td>
                    <a href="https://github.com/danielpqb/Enem2019" target="_blank">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                            width="30" height="30" alt="Github" />
                    </a>
                </td>
                <td>An analysis of brazilian students performance on Enem 2019</td>
                <td><img src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/b76704a375ae550a08e627ab148945e6eee3d0d6/SVG/Power-BI.svg"
                        width="50" height="36" alt="PowerBI" />
                    <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                        width="50" height="36" alt="Python" />
                    <img src="https://raw.githubusercontent.com/jupyter/notebook/984eefc2a713fad3431427f51ee2a5eda9b47cc1/jupyter.svg"
                        width="50" height="36" alt="Jupyter" />
                </td>
            </tr>
            <tr>
                <td><a href="https://github.com/danielpqb/ERP-Oficina-Design" target="_blank">ERP Oficina
                        Design</a></td>
                <td>
                    <a href="https://github.com/danielpqb/ERP-Oficina-Design" target="_blank">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                            width="30" height="30" alt="Github" />
                    </a>
                </td>
                <td>An ERP that controlls invetory, orders, production, clients, providers and products</td>
                <td><img src="https://img.icons8.com/color/344/microsoft-excel-2019--v1.svg" width="50"
                        height="36" alt="Excel" />
                    <img src="https://img.icons8.com/color/344/microsoft-access-2019--v1.svg" width="50"
                        height="36" alt="Access" />
                    <img src="https://icon-library.com/images/vba-icon/vba-icon-10.jpg" width="50"
                        height="36" alt="VBA" />
                    <img src="https://img.icons8.com/external-soft-fill-juicy-fish/344/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png"
                        width="50" height="36" alt="SQL" />
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="section">
    <h1>Github Stats</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <a href="http://www.github.com/danielpqb"><img
                src="https://github-readme-stats.vercel.app/api?username=danielpqb&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=171717&hide_border=true&show_icons=true" /></a>

        <a href="http://www.github.com/danielpqb"><img
                src="https://github-readme-streak-stats.herokuapp.com/?user=danielpqb&stroke=ffffff&background=171717&ring=3382ed&fire=3382ed&currStreakNum=ffffff&currStreakLabel=3382ed&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" /></a>

        <a href="https://github.com/danielpqb"><img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielpqb&layout=compact&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=171717&hide_border=true&locale=en&custom_title=Top%20%Languages" /></a>

        <a href="https://github.com/danielpqb?tab=followers" target="_blank" rel="noreferrer"><img
                src="https://img.shields.io/github/followers/danielpqb?logo=github&style=for-the-badge&color=3382ed&labelColor=171717" /></a>
    </div>
</div>`

const contactContent = `
<div class="name">
    <h1>Daniel Pereira Queiroz Barros</h1>
    <h2>Full Stack Software Engineer Developer</h2>
</div>
<div class="section">
    <h1>Contact Me</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <a href="mailto:danielpqb@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg"
                width="50" height="32" />
            <p>danielpqb@gmail.com</p>
        </a>
        <a href="https://wa.me/5521994149949" target="_blank" rel="noreferrer">
            <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"
                width="50" height="32" />
            <p>+55 21 9 9414-9949</p>
        </a>
    </div>
</div>
<div class="section">
    <h1>Social</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <a href="https://github.com/danielpqb" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                width="50" height="32" alt="Github" />
            <p>danielpqb</p>
        </a>
        <a href="https://www.linkedin.com/in/daniel-pq-barros" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
                width="50" height="32" />
            <p>daniel-pq-barros</p>
        </a>
        <a href="https://discord.com/users/274740926524686336" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                width="50" height="32" />
            <p>Daniel Barros#5145</p>
        </a>
        <a href="https://www.instagram.com/danielpqb/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg"
                width="50" height="32" />
            <p>danielpqb</p>
        </a>
        <a href="https://www.facebook.com/danielpqb/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/facebook/default.svg"
                width="50" height="32" />
            <p>danielpqb</p>
        </a>
    </div>
</div>`

const aboutmeContent = `
<div class="name">
    <h1>Daniel Pereira Queiroz Barros</h1>
    <h2>Full Stack Software Engineer Developer</h2>
</div>
<div class="section">
    <h1>About Me</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div>
        <p>"I'm a 28 years old developer who loves to code and figure out how to solve deep problems using
            high-edge tech."</p>
        <p>"My main focus are front and back-end development, making applications that
            impact the life of thousands of users."</p>
        <p>"I am also a student at Driven, a Software Engineering school."</p>
    </div>
</div>
<div class="section">
    <h1>Personal Info</h1>
    <ion-icon name="chevron-down"></ion-icon>
    <div></div>
</div>`


document.querySelector('.rightHeader').innerHTML = rightHeader
document.querySelector('.leftHeader').innerHTML = leftHeader

