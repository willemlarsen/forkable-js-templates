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
    let resultText, interpolatedStuff;

    function wat(strings, ...values) {
        console.log(strings);
        console.log(values);
        resultText = strings;
        interpolatedStuff = values;
    }

    const num = 3;

    wat`one${num}two`;

    assert.deepEqual(resultText, ['one', 'two']);
    assert.deepEqual(interpolatedStuff, [3]);
});