export const questions = [
  {
    id: 1,
    question: 'What is the purpose of the alt attribute in an img tag?',
    options: [
      { id: 1, content: 'Set the size' },
      { id: 2, content: 'Define alternative text' },
      { id: 3, content: 'Change the format' },
      { id: 4, content: 'Set the alignment' },
    ],
    correctAnswer: 2,
    additionalInfo: `
The **alt** attribute in HTML is used in images to provide **alternative text**, improving **accessibility** and **SEO**.

- Enhances accessibility for users with screen readers.
- Provides context when the image cannot be loaded.
- Helps search engines understand the content of the image.
    `,
  },
  {
    id: 2,
    question: 'Which HTML tag is used to create a link?',
    options: [
      { id: 1, content: '<a>' },
      { id: 2, content: '<link>' },
      { id: 3, content: '<href>' },
      { id: 4, content: '<src>' },
    ],
    correctAnswer: 1,
    additionalInfo: 'The `<a>` tag is used in HTML to create a link.',
  },
  {
    id: 3,
    question: 'What is the primary function of CSS?',
    options: [
      { id: 1, content: 'Define the document structure' },
      { id: 2, content: 'Style and format HTML elements' },
      { id: 3, content: 'Handle client-side logic' },
      { id: 4, content: 'Process server data' },
    ],
    correctAnswer: 2,
    additionalInfo:
      'CSS (Cascading Style Sheets) is mainly used to control the layout, formatting, and visual presentation of HTML documents.',
  },
  {
    id: 4,
    question: 'What does HTML stand for?',
    options: [
      { id: 1, content: 'Hyper Text Markup Language' },
      { id: 2, content: 'High Tech Modern Language' },
      { id: 3, content: 'Hyper Transfer Markup Language' },
      { id: 4, content: 'Home Tool Markup Language' },
    ],
    correctAnswer: 1,
    additionalInfo:
      '**HTML** stands for **Hyper Text Markup Language**. It is the standard language for creating web pages.',
  },
  {
    id: 5,
    question: 'What is the correct way to comment in CSS?',
    options: [
      { id: 1, content: '// This is a CSS comment' },
      { id: 2, content: '<!-- This is a CSS comment -->' },
      { id: 3, content: '/* This is a CSS comment */' },
      { id: 4, content: '# This is a CSS comment' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'In CSS, comments (both block and inline) are written between `/*` and `*/`. This allows adding notes or temporarily disabling certain style rules.',
  },
  {
    id: 6,
    question: 'Which CSS property is used to change the text color?',
    options: [
      { id: 1, content: 'text-color' },
      { id: 2, content: 'font-color' },
      { id: 3, content: 'color' },
      { id: 4, content: 'text-style' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'The `color` property in CSS is used to specify the text color. For example: `color: red;` changes the text color to red.',
  },
  {
    id: 7,
    question: 'What is the purpose of the <head> element in HTML?',
    options: [
      { id: 1, content: 'Contain the main content of the page' },
      { id: 2, content: 'Define a visible header' },
      { id: 3, content: 'Contain metadata and links to external resources' },
      { id: 4, content: 'Create a navigation section' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'The `<head>` element contains **metadata** about the HTML document, such as the title, links to stylesheets, scripts, and other metadata.',
  },
  {
    id: 8,
    question:
      'Which CSS selector is used to select all elements on a page?',
    options: [
      { id: 1, content: '#all' },
      { id: 2, content: '.all' },
      { id: 3, content: '*' },
      { id: 4, content: 'all' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'The **universal selector** `*` in CSS selects all elements in an HTML document. Use it cautiously, as it can affect performance and document structure.',
  },
  {
    id: 9,
    question: 'What is the main difference between margin and padding in CSS?',
    options: [
      { id: 1, content: 'No difference, they are synonyms' },
      {
        id: 2,
        content:
          'Margin is the space from the element’s border outward, padding is the space from the element’s border inward',
      },
      { id: 3, content: 'Margin is for text, padding is for images' },
      {
        id: 4,
        content:
          'Padding is the space from the element’s border outward, margin is the space from the element’s border inward',
      },
    ],
    correctAnswer: 2,
    additionalInfo:
      'Margin creates space around the element, outside its borders. Padding creates space within the element, between its borders and its content.',
  },
  {
    id: 10,
    question: 'Which HTML tag is used to create an unordered list?',
    options: [
      { id: 1, content: '<ol>' },
      { id: 2, content: '<list>' },
      { id: 3, content: '<ul>' },
      { id: 4, content: '<unordered>' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'The `<ul>` (**unordered list**) tag is used to create unordered lists in HTML. List items are defined with `<li>`.',
  },
];
