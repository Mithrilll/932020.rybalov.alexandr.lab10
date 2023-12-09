function openCurtain() {
    const el = document.getElementById('curtain');

    el.style.transitionDuration = '1s';
    el.style.transform = 'translateY(-100%)';

    const body = document.getElementsByTagName('body')[0];

    const lamp = document.createElement('img');
    lamp.id = 'lamp';
    lamp.src = 'images/lamp.png';
    lamp.className = 'lamp';
    lamp.style.cursor = 'pointer';

    let timer;
    let holdDelay = 500;

    lamp.addEventListener('mousedown', () => {
        timer = setTimeout(() => {
            timer = null;
            const toggler = document.getElementById('lamp-switch');
            if (toggler.className.includes('on')) {
                toggler.className = 'lamp-switch';
                toggler.style.animation = 'off 0.1s';
                turnLightsOff();
            } else {
                toggler.className += ' on';
                toggler.style.animation = 'on 0.1s';
                turnLightsOn();
            }
        }, holdDelay)
    })

    lamp.addEventListener('mouseup', () => {
        if (timer) {
            clearTimeout(timer);
        }
        const toggler = document.getElementById('lamp-switch');
        toggler.style.animation = '';
    })

    const lampTop = document.createElement('img');
    lampTop.id = 'lamp-top';
    lampTop.className = 'lamp-top';
    lampTop.src = 'images/lamp-top.png';

    const lampSwitch = document.createElement('img');
    lampSwitch.id = 'lamp-switch';
    lampSwitch.className = 'lamp-switch';
    lampSwitch.src = 'images/lamp-switch.png';

    setTimeout(() => {
        body.appendChild(lamp);
        body.appendChild(lampTop);
        body.appendChild(lampSwitch);
    }, 600)

    setTimeout(() => {
        el.remove();
    }, 1000)
}

function turnLightsOn() {
    const body = document.getElementsByTagName('body')[0];

    const hat = document.createElement('img');
    hat.src = 'images/hat.png';
    hat.className = 'hat';
    hat.id = 'hat';
    hat.onclick = function () { hatClick(); }

    const magician = document.createElement('img');
    magician.src = 'images/2.jpg';
    magician.className = 'magician';
    magician.id = 'magician';

    const light = document.createElement('div');
    light.className = 'light';
    light.id = 'light';

    light.style.borderTop = `${window.innerWidth}px solid transparent`;
    light.style.borderLeft = `${window.innerWidth}px solid transparent`;
    light.style.borderRight = `${window.innerWidth}px solid transparent`;
    light.style.borderBottom = `${window.innerWidth}px solid yellow`;
    light.style.top = `-${window.innerWidth - 120}px`

    body.appendChild(light);

    requestAnimationFrame(() => light.style.animation = 'fade 1s');

    setTimeout(() => {
        body.appendChild(hat);
        body.appendChild(magician);
    }, 100)
}

function turnLightsOff() {
    const bunny = document.getElementById('bunny');
    const pigeon = document.getElementById('pigeon');
    const hat = document.getElementById('hat');
    const magician = document.getElementById('magician');
    const light = document.getElementById('light');

    light.style.animation = 'fadeout 1s';
    if (bunny) bunny.style.animation = 'fadeout 1s';
    if (pigeon) pigeon.style.animation = 'fadeout 1s';
    if (hat) hat.style.animation = 'fadeout 1s';
    if (magician) magician.style.animation = 'fadeout 1s';

    setTimeout(() => {
        if (bunny) bunny.remove();
        if (pigeon) pigeon.remove();
        if (hat) hat.remove();
        if (magician) magician.remove();
        light.remove();
    }, 300);

}

function showBunny() {
    if (document.getElementById('bunny') != undefined) {
        return;
    }
    const body = document.getElementsByTagName('body')[0];

    if (document.getElementById('bunny') != undefined) {
        return;
    }

    const pigeon = document.getElementById('pigeon');
    if (pigeon != undefined) {
        pigeon.style.animation = 'hide 1s';
        setTimeout(() => {
            pigeon.remove();
        }, 1000);
    }

    const bunny = document.createElement('img');
    bunny.src = 'images/bunny.png';
    bunny.className = 'bunny';
    bunny.id = 'bunny';
    bunny.onclick = function () { showPigeon(); };

    body.appendChild(bunny);

    requestAnimationFrame(() => bunny.style.animation = 'show 1s');
}

function showPigeon() {
    if (document.getElementById('pigeon') != undefined) {
        return;
    }
    const body = document.getElementsByTagName('body')[0];

    const bunny = document.getElementById('bunny');
    if (bunny != undefined) {
        bunny.style.animation = 'hide 1s';
        setTimeout(() => {
            bunny.remove();
        }, 1000);
    }

    const pigeon = document.createElement('img');
    pigeon.src = 'images/pigeon.png'
    pigeon.className = 'bunny';
    pigeon.id = 'pigeon';
    pigeon.onclick = function () { showBunny(); };

    body.appendChild(pigeon);

    requestAnimationFrame(() => pigeon.style.animation = 'show 1s');
}

function hatClick() {
    const body = document.getElementsByTagName('body')[0];

    let show = 'bunny';
    let hide = 'pigeon';

    if (document.getElementById('bunny') != undefined) {
        hide = 'bunny';
        show = 'pigeon';
    }

    if (document.getElementById('pigeon') != undefined && show == 'pigeon') {
        return;
    }

    const hideEl = document.getElementById(hide);

    if (hideEl != undefined) {
        hideEl.style.animation = 'hide 1s';
        setTimeout(() => {
            hideEl.remove();
        }, 1000);
    }

    const showEl = document.createElement('img');
    showEl.src = 'images/' + show + '.png';
    showEl.className = 'bunny';
    showEl.id = show;
    showEl.onclick = function () {
        if (show == 'bunny') {
            showPigeon();
        } else {
            showBunny();
        }
    };

    body.appendChild(showEl);

    requestAnimationFrame(() => showEl.style.animation = 'show 1s');
}