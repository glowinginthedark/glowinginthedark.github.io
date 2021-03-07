function quadraticSolve(a, b, c, roots = 0) {
    if (roots < -1 || roots > 1)
        throw new RangeError("The argument root must be between -1 and 1 (inclusive)");

    const surd = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

    b = -1 * b;

    if (roots == -1)
        return (1/2) * (b - surd);
    if (roots == 1)
        return (1/2) * (b + surd);

    return [b + surd, b - surd].map(i => i * (1/2));
}

function getpstime() {
    options = {
        timeZone: 'America/Vancouver',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
    
    return(formatter.formatToParts(new Date()));
}

function startClock() {
    const secondHand = document.querySelector('.h_s');
    const minuteHand = document.querySelector('.h_m');
    const hourHand = document.querySelector('.h_h');
    const pstime = getpstime();
    const showHand = hand => setTimeout(() => hand.style.display = "block", 100);

    let secondAngle = pstime[10].value / 60 * 360;
    secondAngle += secondAngle > 180 ? 180 : -1 * 180;

    let minuteAngle = parseInt(pstime[8].value) * 6;
    minuteAngle += pstime[10].value / 60 * 6;
    minuteAngle = minuteAngle > 180 ? minuteAngle + 180 : minuteAngle - 180;

    let hourAngle = 30 * parseInt(pstime[6].value);
    hourAngle += ((pstime[8].value * 60 + parseInt(pstime[10].value)) / 3600) * 30;
    hourAngle = hourAngle > 180 ? hourAngle + 180 : hourAngle - 180;

    const secondInterval = () => secondHand.style.transform = `rotate(${secondAngle +=6}deg)`;
    secondInterval();
    showHand(secondHand);
    setInterval(secondInterval, 1000);

    const minInterval = () => minuteHand.style.transform = `rotate(${minuteAngle+=1}deg)`;
    minInterval();
    showHand(minuteHand);
    setInterval(minInterval, 10000);

    const hourInterval = () => hourHand.style.transform = `rotate(${hourAngle+=1}deg)`;
    hourInterval();
    showHand(hourHand);
    setInterval(hourInterval, 120000);
}

function placeDots() {
    const clock = document.querySelector('#clock');
    const dotsContainer = document.querySelector('.dots_container');
    const _dots = document.querySelectorAll('.dot');

    const dots = [..._dots];

    const H = dotsContainer.offsetHeight;
    const r = H / 2;

    for (let i = 0; i < dots.length; i++) {
        const y_offset = -r * Math.cos(Math.PI * i / (dots.length / 2)) + r;

        a = 1,
        b = -2 * r,
        c = Math.pow(y_offset - r, 2),
        roots = i < (dots.length / 2) ? 1 : -1;

        x_offset = quadraticSolve(a, b, c, roots);
        
        dots[i].style.top = `${y_offset}px`;
        dots[i].style.left = `${x_offset}px`;
    }
}

(function () {

    placeDots();
    startClock();

    // event listeners
    window.onresize = () => placeDots();
    
})();
