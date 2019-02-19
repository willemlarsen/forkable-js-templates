const test = QUnit.test;

QUnit.module('code cook template');

test('make html from template with interpolation', function(assert) {
    const place = 'world';
    const html = `<p>hello ${place}</p>`;
    assert.equal(html, '<p>hello world</p>');
});


test('call function that generates html template literal', function(assert) {
    
    function generateHtmlTemplate(place) {
        return `<p>hello ${place}</p>`;
    }

    const result = generateHtmlTemplate('mars');
    const expected = '<p>hello mars</p>';
    assert.equal(result, expected);
});

test('what do template literals do?', function(assert) {
    let text, interpolations;
    function wat(strings, ...values) {
        text = strings;
        interpolations = values;
    }

    const num = 3;
    wat`one${num}two`;

    assert.deepEqual(text, ['one', 'two']);
    assert.deepEqual(interpolations, [3]);
});