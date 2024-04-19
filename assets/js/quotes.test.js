import {
    quotes,
    getRandomQuote,
    increaseFontSize,
    decreaseFontSize
} from './quotes';

describe('quotes functionality', () => {
    test('getRandomQuote returns a quote object', () => {
        const quote = getRandomQuote();
        expect(quote).toHaveProperty('text');
        expect(quote).toHaveProperty('author');
    });

    test('increaseFontSize increases font size by 2px', () => {
        document.body.innerHTML = `<p id="randomQuote" style="font-size: 14px;"></p>`;
        increaseFontSize();
        const newSize = document.getElementById('randomQuote').style.fontSize;
        expect(newSize).toBe('16px');
    });

    test('decreaseFontSize decreases font size by 2px', () => {
        document.body.innerHTML = `<p id="randomQuote" style="font-size: 16px;"></p>`;
        decreaseFontSize();
        const newSize = document.getElementById('randomQuote').style.fontSize;
        expect(newSize).toBe('14px');
    });
});