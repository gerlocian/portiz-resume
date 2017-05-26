'use strict';

function nullifyHeight(body) {
    body.removeEventListener('transitioned', nullifyHeight.bind(null, body));
    body.style.height = null;
}

function expand(container, body) {
    if (container.className.split(' ').includes('is-collapsed')) {
        const height = body.scrollHeight;

        body.style.height = `${height}px`;
        body.addEventListener('transitioned', nullifyHeight.bind(null, body));

        container.className = container.className.split(' ').filter(c => c !== 'is-collapsed').join(' ');
    }
}

function collapse(container, body) {
    if (!container.className.split(' ').includes('is-collapsed')) {
        const height = body.scrollHeight;
        const transition = body.style.transition;

        body.style.transition = '';

        requestAnimationFrame(() => {
            body.style.height = `${height}px`;
            body.style.transition = transition;

            requestAnimationFrame(() => {
                body.style.height = '0px';
            });
        });

        container.className = container.className.split(' ').concat('is-collapsed').join(' ');
    }
}

function toggle(container, body) {
    if (container.className.split(' ').includes('is-collapsed')) {
        expand(container, body);
    } else {
        collapse(container, body);
    }
}

function CollapseHelper(c) {
    const container = c;
    const body = container.getElementsByClassName('container-body')[0];

    return {
        toggle: toggle.bind(null, container, body)
    };
}

export default CollapseHelper;