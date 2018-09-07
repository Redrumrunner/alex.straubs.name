# Adding boostrap

## Add reactsrap

I have added **reactsrap** and **bootstrap** to the project. This will give you a bunch of pre-made bootsrap components that you can use to make your page or application. Since it you have bootsrap you can also create your own components with bootstrap classes. You should not try to use the **bootsrap** javascript as it doesn't play well with react and you can do almost all of it in react components. More on that later.

## Adding needed modules
In a terminal I ran the following.
1. ```yarn add bootsrap```
2. ```yarn add reactstrap```

### Bootsrap
In order to use bootsrap classses I added the line ```import 'bootstrap/dist/css/bootstrap.min.css';``` to the imports of ```src/index.js```.

### Reactstrap
You can find a list of components and examples how to use them [here](https://reactstrap.github.io/components/alerts/).

## App.js
Added the import line for bootsrap (above) and changed the ```Likes``` to ```LikesJumbo``` and ```LikesChild``` to ```LikesCard```. I also made the app use reactstrap Nav and layout components. You should look at the reactstrap [NavBar documentation](https://reactstrap.github.io/components/navbar/) and the [bootsrap documentation](https://getbootstrap.com/docs/4.0/components/navbar/) to see why I used ```className="bg-light"```, see if you can fix it another way. Try removing it and see what happens. Also, make sure you look at all the ways I called ```<LikesCard>``` and try and understand them.

## Likes.js
Removed for ```LikesJumbo.js```.

## LikesChild.js
Removed for ```LikesCard.js```.

## LikesChild.css
Removed because it we don't need it.

## LikesJumbo.js
Imports ```React``` and ```Jumbotron``` from ```reactsrap``` and made a component that takes a thing to like.

## LikesCard.js
Imports ```React``` from ```react``` and ```Card```, ```CardBody```, ```CardText```, and ```CardTitle``` from ```reactstrap``` and we create a card with the props title and thing. We use ES6 (Javascript 'Next') to [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the first arguemnt passed to the react component. This will always be the props. We extract ```thing``` and ```why``` by doing ```{thing, why}``` in the function definition. And set a default ```beer``` and the text in the constant set in WHY by setting the ```{thing="beer", why=WHY}```.
