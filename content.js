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
<div class="leftHeader">
    <div class="profilePhoto">
        <img src="img/profilePhoto.jpg">
        <div>DANIEL BARROS</div>
    </div>
    <a href="https://danielpqb.github.io/profile/index">
    <!--<a href="file:///home/danielpqb/Daniel/profile/index.html">-->
        <div class="category">
            <ion-icon name="person"></ion-icon>
            <h1>ABOUT ME</h1>
            <h2>WHO AM I</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <a href="https://danielpqb.github.io/profile/resume">
    <!--<a href="file:///home/danielpqb/Daniel/profile/resume.html">-->
        <div class="category">
            <ion-icon name="newspaper"></ion-icon>
            <h1>RESUME</h1>
            <h2>CV</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <a href="https://danielpqb.github.io/profile/portfolio">
    <!--<a href="file:///home/danielpqb/Daniel/profile/portfolio.html">-->
        <div class="category">
            <ion-icon name="briefcase"></ion-icon>
            <h1>PORTFOLIO</h1>
            <h2>MY WORKS</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <a href="https://danielpqb.github.io/profile/contact">
    <!--<a href="file:///home/danielpqb/Daniel/profile/contact.html">-->
        <div class="category">
            <ion-icon name="call"></ion-icon>
            <h1>CONTACT</h1>
            <h2>SAY HELLO</h2>
        </div>
    </a>
</div>`

const leftHeader2 = `
<div class="leftHeader">
    <div class="profilePhoto">
        <img src="img/profilePhoto.jpg">
        <div>DANIEL BARROS</div>
    </div>
    <!--<a href="https://danielpqb.github.io/profile/index">-->
    <a href="file:///home/danielpqb/Daniel/profile/index.html">
        <div class="category">
            <ion-icon name="person"></ion-icon>
            <h1>ABOUT ME</h1>
            <h2>WHO AM I</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <!--<a href="https://danielpqb.github.io/profile/resume">-->
    <a href="file:///home/danielpqb/Daniel/profile/resume.html">
        <div class="category">
            <ion-icon name="newspaper"></ion-icon>
            <h1>RESUME</h1>
            <h2>CV</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <!--<a href="https://danielpqb.github.io/profile/portfolio">-->
    <a href="file:///home/danielpqb/Daniel/profile/portfolio.html">
        <div class="category">
            <ion-icon name="briefcase"></ion-icon>
            <h1>PORTFOLIO</h1>
            <h2>MY WORKS</h2>
        </div>
    </a>
    <div class="hLine"></div>
    <!--<a href="https://danielpqb.github.io/profile/contact">-->
    <a href="file:///home/danielpqb/Daniel/profile/contact.html">
        <div class="category">
            <ion-icon name="call"></ion-icon>
            <h1>CONTACT</h1>
            <h2>SAY HELLO</h2>
        </div>
    </a>
</div>`

document.querySelector('.rightHeader').innerHTML = rightHeader
document.querySelector('.leftHeader').innerHTML = leftHeader //leftHeader2
