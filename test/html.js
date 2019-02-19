
function html(strings, ...values) {
    const rawHtml = String.raw(strings, ...values);
    const template = document.createElement('template');
    template.innerHTML = rawHtml;
    return template.content; 
}

export default html;