# Added Simple React Components
In this step I added two new files - Likes.js and LikesChild.js. These files are just basic React componets that render some simple HTML.

## Likes.js
Takes a prop ```thing``` that will render the value in a ```<p>``` tag with some text.

## LikesChild.js
This component takes a ```title``` string prop that it wraps as an ```<h3>``` tag and renders it and all children (HTML) of the component in a ```<div>``` with a dom class/className of ```card``` that is defined in LikesChild.css has a size and outline.

## App.js changes
We changed the orginal ```src/App.js``` to use the components. The following was done:
1. We imported the ```Likes.js``` and ```LikesChild.js``` files. 
2. We added a basic ```<Likes thing="cheese">``` jsx tag to show how a component works.
3. We added a basic ```<LikesChild title="Like One?">``` with some standard HTML to show how a component can render children.
4. We added a ```<LikesChild title="What about beer?">...``` with a ```<Likes>``` react component as a child to show that rendering react components works the same as HTML.

