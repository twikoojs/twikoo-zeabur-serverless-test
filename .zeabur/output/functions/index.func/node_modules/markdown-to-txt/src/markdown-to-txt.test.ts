import markdownToTxt from "./markdown-to-txt";

// Test cases derived from https://guides.github.com/features/mastering-markdown/

test("Headers", () => {
	const original = `
# This is an \`<h1>\` tag
## This is an \`<h2>\` tag
###### This is an \`<h6>\` tag`;
	const expected = `
This is an <h1> tag

This is an <h2> tag

This is an <h6> tag`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Emphasis", () => {
	const original = `
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_`;
	const expected = `
This text will be italic
This will also be italic

This text will be bold
This will also be bold

You can combine them
	`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Lists", () => {
	const original = `
* Item 1
* Item 2

- Item 1
- Item 2`;

	const expected = `
Item 1
Item 2

Item 1
Item 2`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Images", () => {
	const original = `
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)`;
	const expected = `
GitHub Logo
Format: Alt Text`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Links", () => {
	const original = `
http://github.com - automatic!
[GitHub](http://github.com)`;
	const expected = `
http://github.com - automatic!
GitHub`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Blockquotes", () => {
	const original = `
As Kanye West said:

> We're living the future so
> the present is our past.`;
	const expected = `
As Kanye West said:

We're living the future so
the present is our past.`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Inline code", () => {
	const original = `
I think you should use an
\`<addr>\` element here instead.`;
	const expected = `
I think you should use an
<addr> element here instead.`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Code block", () => {
	const original = `
\`\`\`javascript
function fancyAlert(arg) {
    if(arg) {
        $.facebox({div:'#foo'})
    }
}
\`\`\`

    function fancyAlert(arg) {
        if(arg) {
            $.facebox({div:'#foo'})
        }
    }`;
	const expected = `
function fancyAlert(arg) {
    if(arg) {
        $.facebox({div:'#foo'})
    }
}

function fancyAlert(arg) {
    if(arg) {
        $.facebox({div:'#foo'})
    }
}
`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Tables", () => {
	const original = `
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column`;
	const expected = `
First Header Second Header
Content from cell 1 Content from cell 2
Content in the first column Content in the second column`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});

test("Strikethrough", () => {
	const original = `
~~this~~`;
	const expected = `
this`;
	expect(markdownToTxt(original)).toEqual(expected.trim());
});
