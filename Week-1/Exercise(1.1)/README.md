# Web Browsers and their workings

    a) What is the main functionality of the browser?

A web browser is a software suite which enables a user to interact with the World Wide Web(WWW) by retrieving, locating and displaying various web content.

    b) What are the High Level Components of a browser?

A browser uses seven critical components to carry out its tasks.

!["browser components"](https://browsertouse.com/wp-content/uploads/2021/06/Browser-Working-1024x544.png?ezimgfmt=rs:771x410/rscb1/ng:webp/ngcb1)

1.  User Interface - This is the forefront of the browser which a user sees. It contains the address bar holding the resource URL and various controls like home, back, forward and refresh actions.

2.  Browser Engine - This component acts as a bridge between the use interface and the rendering engine. It manages and manipulates the rendering engine based on the inputs from all user interfaces.

3.  Rendering Engine - The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and various parsers. Then it generates the layout that is displayed in the User Interface.

4.  Network - This component retrieves URLs based on common web protocols like HTTP, HTTPS and FTP. It also manages communication and security. It sometimes creates a cache of documents to reduce network traffic laod.

5.  JavaScript Engine - It interprets and executes all JavaScript code embedded in a webpage. While the scripts execute, all parsers are kept on hold until completion.

6.  UI Backend - This component exposes a generic interface, that is not platform-specific, to draw simple widgets like input boxes other input controls. Underneath it leverages the OS's user interface methods.

7.  Data persistence/Storage - This component supports browser storage mechanisms like Local Storage, IndexedDB, WebSQL and File System. It is a small database created on the local drive where the browser is installed and manages things like cache, cookies, bookmarks and preferences.

    c) What is the Rendering engine and its use?

    As the name suggests, this components is used to render the webpage on the screen.
    The network layer will start sending parts of the requested document to the render engine in chunks of 8KBs.

!["rendering engine phases"](https://miro.medium.com/max/1200/1*cfQpu6Xvb7e9IiH4CCuiCg.png)

- It will parse the HTML document and convert the elements into a DOM nodes called the DOM tree or content tree.
- it will also parse all the related CSS.
- When the DOM tree is being constructed, the browser will also create another tree known as the "render tree".
- the render tree is a visual representation of the document and contains visual elements in the correct order of their appearance.
- the purpose of the "render tree" is to enable the painting(displaying on screen) of content in the correct order.
- after the construction of the render tree, it goes through a "layout process" where the actual sizes and positions of the content is calculated - this process is also called layout or reflow.
- once the layout process is completed, it enters the "paint" phase.
- in the "paint" phase again the render tree is traversed and the rendere's "paint()" method is called to display the content on the screen.

  d) What are Parsers (HTML, CSS, etc)?

## Parser

A Parser is a compiler or interpreter that breaks data into smaller elements for easy translation into another form or language.

!["html parsing"](https://res.cloudinary.com/practicaldev/image/fetch/s--40NGH5el--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/o91r8lupx8elero5djh3.png)

## HTML Parser

- HTML Parser - the HTML documents undergoes a process called "tokenization" which breaks the code into smaller blocks which are easy to parse.
- once the parsing of HTML begins, the elements are converted into DOM nodes which then are used to construct a DOM tree.
- DOM tree is what is accessed using JavaScript.

## CSS Parser

- In a fashion similar to HTML parser, the CSS parser parses the CSS documents to contruct a CSSOM (CSS Object Model).

!["css parsing"](https://res.cloudinary.com/practicaldev/image/fetch/s--maAtq7ut--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vg9595umg17jzkcdvm7f.png)

    e) What is a Script Processor?

A Script Processor allows you to specify your own processor logic using JavaScript. On the web there are two basic types of scripts:

## Client Side Scipts

- These are the scripts present on the client-side and responsible for the interaction between the user and the webpage.
- These are first downloaded on the client-side(browser) and then interpreted and exceuted by it.

## Server Side scripts

- These scripts are mainly responsible for carrying out tasks on the server-end and then returning the response to the client-end(browser).

  f) what is Tree construction?

- Tree construction is carried out by the browser whenever a document is parsed.
- The HTML parser and CSS parser both construct their respective Object Model trees.
- Apart from DOM and CSSOM trees, browsers also create a "Render Tree" used in the layouting and painting phases.

  g) What is the order of script processing in a browser?

- If the scrpts are not dynamically loaded and have not been marked "defer" or "async", then scripts are loaded in order of how they are encountered in the page.
- It doesn't matter whether it's an external script or an inline script - they are executed in the order they are encountered in the page.
- "Async scripts" (regardless of how they are specified as async) load and run in an unpredictable order.
- The browser loads them in parallel and it is free to run them in whatever order it wants.

  h) what is Layout and Painting?

- Just as both have been discussed above as well, layouting is the process when the broweser calcualtes the sizes and positions of DOM elements. This is called the "Layout"or "Reflow" phase.
- once layouting is completed, the browser then displays or paints the content onto the screen in a process called "Painting".

## Author

- [@jimishgajjar](https://github.com/jimishgajjar)
