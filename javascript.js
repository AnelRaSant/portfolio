
//UNIVERSE BACKGROUND
    function createStars(type, quantity) {
        for (let i = 0; i<quantity; i++) {
            var star = document.createElement('div');
            star.classList.add('star', `type-${type}`); 
            star.style.left = `${randomNumber(1,99)}%`;
            star.style.bottom = `${randomNumber(1,99)}%`;
            star.style.animationDuration = `${randomNumber(50,200)}s`;
            document.body.appendChild8(star);
        }
    }
    function randomNumber(min, max) {
        return Math.floor(Math.random() *max) + min;
    }
    createStars(1,100);
    createStars(2,85);
    createStars(3,70);

    //CLOCK
    const showClock = () => {
        const clock = document.getElementById('clock');
        let currDate = new Date();

        let h = currDate.getHours();
        let m = currDate.getMinutes();
        let s = currDate.getSeconds();

        m = m < 10 ? `0${m}` : m;
        s = s < 10 ? `0${s}` : s;

        clock.innerText = `${h}:${m}:${s}`;

        setTimeout(showClock, 1000)
    }

    showClock();
