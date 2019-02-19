function makeImageTemplate(image) {
    // make html string from template literal
    const html = `
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}">
            <p>Horns: ${image.horns}</p>
        </li>
    `;

    // create template element and assign innerHTML
    const template = document.createElement('template');
    template.innerHTML = html;
    // return the content "fragment"
    return template.content;
}

export default makeImageTemplate;