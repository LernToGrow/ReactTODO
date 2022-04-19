export const question = [
    {
        id : 1,
        question:' What are the features of React?',
        answer:'JSX:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. Components: Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.',
    },
    {
        id : 2,
        question:'What is JSX?',
        answer:'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
    },    
    {
        id : 3,
        question:' Can web browsers read JSX directly?',
        answer:'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel',
    },    
    {
        id : 4,
        question:'What is the virtual DOM?',
        answer:'       DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.',
    },    
    {
        id : 5,
        question:'Why use React instead of other frameworks, like Angular?',
        answer:'Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly.Improved performance: React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares its previous state and updates only those components in the real DOM, whose states have changed, rather than updating all the components — like conventional web applications.Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their own logic and controls, and they can be reused through the application, which, in turn, dramatically reduces the development time of an application.',
    },
    {
        id : 6,
        question:'What is an event in React?',
        answer:'An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.React events are named using camelCase, rather than lowercase in HTML.With JSX, you pass a function as the event handler, rather than a string in HTML.',
    },    
    {
        id : 7,
        question:'What are synthetic events in React?',
        answer:'Synthetic events combine the response of different browsers native events into one API, ensuring that the events are consistent across different browsers.The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.',
    },    
    {
        id : 8,
        question:'Explain how lists work in React',
        answer:'We create lists in React as we do in regular JavaScript. Lists display data in an ordered format The traversal of lists is done using the map() function',
    },    
    {
        id : 9,
        question:'Why is there a need for using keys in Lists?',
        answer:'Keys are very important in lists for the following reasons:A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered',
    },    
    {
        id : 10,
        question:'What are forms in React?',
        answer:'React employs forms to enable users to interact with web applications.Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc',
    },
];