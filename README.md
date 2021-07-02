# Facebook Home Page 100% on Javascript

This project is only for measure my skills on javascript.  
For try it, download or clone this repo, create a `index.htm`or `index.html` file and copy this code
`<body><script src="facebook.js charset="uft-8"></script></body>` and run it

## Explaining the process.

1. First I create the **HTML TAGS** with `element.createElement("tag")` method.
2. After I write the *Text Nodes* with `element.createTextNode("text")` method, I did not put the text later because it gave me problems.
3. then I joined the **HTML TAGS** with the corresponding text using `tag.appendChild(text)` to make it easier to place it in the *DOM*.
4. I added the labels to the *DOM* using `document.body.appendChild(tag)`, and for place items inside another I used `tag.appendChild(tag2)`.
5. I placed the attributes for each one **HTML** element with the `element.setAtribute("attrib","value")` method.
6. And finally i put the ***styles*** with `element.style.attrib = "value"` method

## Time spent and explain my experience with this

Really i spent **20** hours distributed in **3** days, my experience with this project was a bit boring, because the hard work was creating the **HTML** elements, the text nodes and putting them together, although I did enjoy placing the elements in the **DOM** and styling them. Although it is repetitive, I liked doing it because it helped me to reinforce my knowledge in ***Javascript***.
