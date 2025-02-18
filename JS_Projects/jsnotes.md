## JSNOTES

Presented here are snippets of my module based scripts folder that I use in my project where I'm working on!

All function/object names I'm using here exists within the scripts folder of my project.

Therefor, you have to translate them to your own disciplines to get those snippets to work.

Also, 'import' is as I have them in my project discipline and you have to deal with that yourself.

- File
  
  - **Shorties/fetchHandlers.js**
    - functions
      1. getHyperlinkHandler(args)
         - Depedencies; 
           - FetchHandler/FetchStatusHandler.
         - About
           - A dry function to deal with async hyperlinks.
           - The **url** is where you **get** your data from.
           - The **callback function** is where you process that **data** for further use.
           - ! Yes, I might could have use **then()** too but I think this way is more handy and simpler to maintain.
      2. getDataHandler(args).
         -Depedencies; 
         - FetchHandler/FetchStatusHandler.
           - About
         - A dry function to deal with async data.
         - The **url** is where you **get** your data from.
         - The **callback function** is where you process that **data** for further use.

- File  
  
  - **Shorties/handyFunctions.js**
    
    - func 01
      
      - addAttributes = async (...args)
    
    - description 01
      
      - async function that adds html/svg attributes to a html/svg element. 
      - note: data attributes you can add on two ways <code>{'data-foo': 'value'}</code> or <code>{data_foo: 'value'}</code>, by the second option data_foo will be translated to 'data-foo'. 
    
    - func 02
      
      - addClass = async (...args)
    
    - description 02
      
      - async function that add a single class (element, class).
    
    - func 03
      
      - removeClass = async (...args)
    
    - description 03
      
      - async function that removes a single class (element, class).
    
    - func 04
      
      - replaceClass = async (...args)
    
    - description 04
      
      - async function that toggles a between classes (element,remove_class,add_class).     
    
    - func 05
      
      - addClasses = async (...args
    
    - description 05
      
      - async function that add multiple classes (element, <code>['class1', 'class2']</code>).    
    
    - func 06
      
      - removeClasses = async (...args)
    
    - description 06
      
      - async function that removes multiple classes (element, <code>['class1', 'class2']</code>).    
    
    - func 07
      
      - domEraser = async (dom_parent)
    
    - description 07
      
      - async function that removes a child- from a parent element.
      
      - example:
        
        ```
        <div class='parent'>
            <div class='child one'></div>
            <div class='child two'></div>
        </div>
        const parent = await elQuery('div.parent'); 
        await domEraser(parent);
        ```
      
      - result: 
        
        ```
        <div class='parent'>
            <div class='child two'></div>
        </div>
        ```
    
    - func 08
      
      - elQuery(...args)
    
    - description 08
      
      - async function to query the dom
      
      - example1: here it takes the document as parent.
        
        ```
        <div class='parent'>
            <div class='child one'></div>
            <div class='child two'></div>
        </div>
        const parent = await elQuery('div.parent');
        console.log('parent: ',parent);
        ```
      
      - result1: 
        
        ```
        <div class='parent'></div>
        ```
      
      - example2: here it queries the children from the parent.
        
        ```
        const children = await  elQuery('div.child', true, parent);
        console.table({'children': children})
        ```
      
      - result2: 
        
        ```
        children [0]= child one, [1]= child two
        ```
      
      - example3: here it query just one child.
        
        ```
        const child_two = await  elQuery('div.child.two', false,parent);        
        ```
      
      - result3: 
        
        ```
        <div class='child two'></div>
        ```
    
    - func 09
      
      - setContent = async function (...args)
    
    - description 09
      
      - An async function to pass content to a dom element.
      
      - example:        
        
        ```
        <div class='parent'>
        </div>
        const parent = await elQuery('div.parent');
        const sample = async ()=>{
            return `just some sample text`;
        };
        await setContent(parent,await sample());
        ```
      
      - result: 
        
        ```
        <div class='parent'>just some sample text</div>
        ```
    
    - func 10
      
      - getContent = async function (...args)
    
    - description 10
      
      - async function to get the innerHTML of an element.
      
      - example1:        
        
        ```
        <div class='parent'>
          <div class='child one'>just some sample child text</div>
        </div>
        const parent = await elQuery('div.parent');
        const child_data = await getContent('div.child.one',true,parent);
        console.log ('child_data = ',child_data);
        ```
      
      - result1: 
        
        ```
        child_data = just some sample child text
        ```
      
      - example2:        
        
        ```
        <div class='lonely'>
          just some sample lonely text
        </div>
        const lonely = await elQuery('div.lonely');
        const lonely_data = await getContent('div.lonely');
        console.log ('lonely_data = ',lonely_data);
        ```
      
      - result2: 
        
        ```
        lonely_data = just some sample lonely text
        ```
    
    - func 11
      
      - getClassHelper(...args)
    
    - description 11
      
      - An async function to get a HTMLCollection. 
      
      - In short, this are live elements and updates the dom when they change or disapear!
      
      - Also, it will always return an array [], it means that when you use it the minimum value is 'parent[0]' and not just 'parent'.
      
      - example1:        
        
        ```
        <div class='parent'>
            <div class='child one'></div>
            <div class='child two'></div>
        </div>
        const parent = await getClassHelper('parent');
        console.log('parent: ',parent[0]);
        ```
      
      - result1: 
        
        ```
        <div class='parent'></div>
        ```
      
      - example2:        
        
        ```
        <div class='parent'>
            <div class='child one'></div>
            <div class='child two'></div>
        </div>
        const children = await getClassHelper('child',parent);
        console.table({'children': children})
        ```
      
      - result2: 
        
        ```
        children [0]= child one, [1]= child two
        ```
    
    - func 12
      
      - getIdHelper(id)
    
    - description 12
      
      - async function to get elements id.
      - note: pass the id without ```#```
    
    - func 13
      
      - lorem_ipsum = async ()
    
    - description 13
      
      - an async function to pass dummy text and handy for testing.   
