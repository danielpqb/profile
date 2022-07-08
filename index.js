const pageURL = document.location.href

const leftButtons = document.querySelectorAll('.category')

leftButtons.forEach((button, i)=>{
    button.id = i
})

switch (pageURL) {
    case 'https://danielpqb.github.io/profile/resume':
        document.getElementById(1).classList.add('selectedCategory')
        break
    case 'https://danielpqb.github.io/profile/portfolio':
        document.getElementById(2).classList.add('selectedCategory')
        break
    case 'https://danielpqb.github.io/profile/contact':
        document.getElementById(3).classList.add('selectedCategory')
        break
    default:
        document.getElementById(0).classList.add('selectedCategory')
        break

}

// Developing
/*
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
</div>
*/