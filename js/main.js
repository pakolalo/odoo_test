function accordion() {
    const titleAnswers = [...document.querySelectorAll('.answer_top')];

    titleAnswers.forEach(answer => {
        answer.addEventListener('click', () => {
            let height = 0;
            let questionsAnswer = answer.nextElementSibling;
            let addPadding = answer.parentElement;

            addPadding.classList.toggle('answer_padding--add');
            answer.children[1].classList.toggle('down_icon--rotate')

            if (questionsAnswer.clientHeight === 0) {
                height = questionsAnswer.scrollHeight;
            }
            questionsAnswer.style.height = `${height}px`;
        })
    })
}

accordion();