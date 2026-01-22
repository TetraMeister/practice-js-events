const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pLi = document.querySelectorAll("p");

pLi.forEach(function (e) {
    e.addEventListener("click", function (ev) {
        ev.preventDefault()

        if (ev.target.hasAttribute('data-id')) {
            const id = ev.target.dataset.id;
            incrementCounter('paragraphs', id);
        } else if (ev.target.hasAttribute('href')) {
            const link = new URL(ev.target.href).pathname;
            incrementCounter('links', link);
        };
    });
});

function incrementCounter(element, key) {
    stats[element][key] = (stats[element][key] || 0) + 1;
};

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

