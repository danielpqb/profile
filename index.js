const leftButtons = document.querySelectorAll('.category')

leftButtons.forEach((button, i) => {
    button.id = i
    button.onclick = selectCategory
})

document.querySelector('.page').innerHTML = aboutmeContent

function selectCategory() {
    if (this.classList.contains('selectedCategory')) {
        return
    }

    document.querySelector('.selectedCategory').classList.remove('selectedCategory')
    this.classList.add('selectedCategory')

    switch (Number(this.id)) {
        case 1: //Resume
            document.querySelector('.page').innerHTML = resumeContent
            document.querySelector('.cssFile').innerHTML = `<link rel="stylesheet" href="resume.css"></link>`
            break;
        case 2: //Portfolio
            document.querySelector('.page').innerHTML = portfolioContent
            document.querySelector('.cssFile').innerHTML = `<link rel="stylesheet" href="portfolio.css"></link>`
            break;
        case 3: //Contact
            document.querySelector('.page').innerHTML = contactContent
            document.querySelector('.cssFile').innerHTML = `<link rel="stylesheet" href="contact.css"></link>`
            break;
        default: //About Me
            document.querySelector('.page').innerHTML = aboutmeContent
            document.querySelector('.cssFile').innerHTML = ''
            break;
    }
}