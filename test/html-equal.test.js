const test = QUnit.test;
import TemplateError from './html-equal.js';

function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

QUnit.module('assert.htmlEqual');

test('handles simple whitespace normalization', function(assert) {
    function makeTemplateWithWhitespace() {
        const html = `
            <p>
                hello
                <span>whitespace</span>
            </p>
        `;
        return htmlToDOM(html);
    }

    const result = makeTemplateWithWhitespace();
    assert.htmlEqual(result, `
        <p>
            hello 
            <span>whitespace</span>
        </p>
    `);
});

// // un-comment to see failed test
// test('fails when not equal', function(assert) {
//     function makeTemplate() {
//         const html = `
//             <p>
//                 hello
//                 <span>bad</span>
//             </p>
//         `;
//         return htmlToDOM(html);
//     }

//     const result = makeTemplate();
//     assert.htmlEqual(result, `
//         <p>
//             hello 
//             <span>good</span>
//         </p>
//     `);
// });

test('multiple top-level elements in fragment is error', function(assert) {
    function makeTemplate() {
        const html = `
            <span>hello</span>
            <span>whitespace</span>
        `;
        return htmlToDOM(html);
    }


    const result = makeTemplate();
    
    assert.throws(function() {
        assert.htmlEqual(result, `
            <span>hello</span>
            <span>whitespace</span>
        `);
    }, TemplateError);

});
