# Lecture 3

- We have to configure our project to remove console.log
-Babel plugin (transform remove console) removes console.log .
-Take a look at babel documentation it performs a lot of task.
-Read about the function of keys. Whenever a div or array has more than one element in their child then each child has to be assigned a unique key.Why,read docs(Reconciliation)?
-jsx => React.creataElement => object => html(dom) .This is how conversion happens.



KEYS IN REACT(USE)-:                                     
  <LI> FIRST </LI>
  <LI> SECOND </LI>

CONSIDER THE ABOVE LIST
IF ELEMENT IS ADDED AT THE END OF THE LIST ,REACT WILL MATCH THE TWO ITEMS AND THEN INSERT THE THIRD TREE.
CONVERTING BETWEEN THESE TWO TREES WORKS WELL:

NOW IF YOU IMPLEMENT IT NAIVELY, INSERTING AN ELEMENT AT THE BEGINNING HAS WORSE PERFORMANCE,REACT WILL MUTATE EVERY CHILD INSTEAD OF REALIZING IT CAN KEEP THE
 FIRST AND SECOND SUBTREES INTACT. THIS INEFFICIENCY CAN BE A PROBLEM.

IN ORDER TO SOLVE THIS ISSUE, REACT SUPPORTS A KEY ATTRIBUTE. WHEN CHILDREN HAVE KEYS, REACT USES THE KEY TO MATCH CHILDREN IN THE ORIGINAL TREE WITH CHILDREN 
IN THE SUBSEQUENT TREE.

IN PRACTICE, FINDING A KEY IS USUALLY NOT HARD. THE ELEMENT YOU ARE GOING TO DISPLAY MAY ALREADY HAVE A UNIQUE ID, SO THE KEY CAN JUST COME FROM YOUR DATA:

WHEN THAT’S NOT THE CASE, YOU CAN ADD A NEW ID PROPERTY TO YOUR MODEL OR HASH SOME PARTS OF THE CONTENT TO GENERATE A KEY. THE KEY ONLY HAS TO BE UNIQUE 
AMONG ITS SIBLINGS, NOT GLOBALLY UNIQUE.

AS A LAST RESORT, YOU CAN PASS AN ITEM’S INDEX IN THE ARRAY AS A KEY. THIS CAN WORK WELL IF THE ITEMS ARE NEVER REORDERED, BUT REORDERS WILL BE SLOW.

- Read differ algorithm for keys use.



- Reacts tracks uniqueness using keys.

- Babel converts jsx to React.createElement. Babel performs a lot of task in backend.

- We have a package-lock.json inside our node_modules . They lock the versions of the transitive dependencies.



- Use of dist folder .

   When we do a production or a development build parser pushes optimized version of our code in the dist folder.(changed variable_names,less whitesapces, removes console.log etc.)

- Transitive dependency - inception of dependency. Package manager(npm) manages transitive dependency.

- JSX is not a package its a javascript syntax extension.Hence can be used directly no need of any package manager like babel to install.

- Functional components 
  Functional components are nothing but javascript functions returning react elements. JSX is a react element(behind the scenes).
 Functional components names always starts with a capital letter.Its a normal convention and a good practice.
 Functional components are rendered using angular brackets.

- To use a react element inside functional component use {} and element name,as simple as that e.g. {header}. For more eg. see assignment 3 code.
- To use a functional component inside functional componenet you have to use {} and function name with () inside it(e.g. {Header()} or simple use angular brackets(eg. <Header/>).
- {} inside functional components can contain any piece of javascript code.

- JSX NEEDS BABEL
