<h1> Project 4: A Django + React App </h1>

by [Marissa Epstein](https://github.com/marepstein) and [Abi James](https://github.com/ajames14)

## Overview

For our fourth and final project on the General Assembly Software Engineering course, we decided to focus on our shared interest in sustainable fashion. We built an app, **Green Garms**, which combines a clothes swap platform and a brand guide, helping users to be more sustainable with their fashion choices. 

We had one week to build our app using ReactJS for the front-end and Django for the-back end, serving our data from a PostgreSQL database.

[Link to Final Product.](https://green-garms.herokuapp.com/#/)

[Check out the GitHub Repo here.](https://github.com/ajames14/project-4)

## Brief

You must:

- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes. 
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.

## Technologies Used

**Front End**: 

- JavaScript
- ReactJS
- ReactRouter
- Axios
- EmailJS
- Bulma
- React Lazy Hero
- SCSS

**Back End**

- Python
- Django
- PostgreSQL
- Bcrypt
- JsonWebToken
- Insomnia

## The Final Product

Green Garms is an app combining two main functions: 

1. Clothes Swap Platform: 
	- In a world of fast fashion, we created a website for exchanging clothes. 
	- Users can browse and filter clothing, upload their own items, request to swap and view their own items and incoming swap requests via their profile. 
	- Once a swap request has been approved by the owner, an email is sent to both parties confirming the swap and allowing them to arrange the exchange. 
	
2. Brand Guide: 
	- We also built a brand guide giving information on the sustainability of well-known fashion brands. The aim is to help users understand the impact their purchases are having. 
	- We sourced our information at (...)

(... INSERT VIDEO LINK...)

## Approach Taken

### Planning 

We started by creating a wireframe for our app and working out the essential features of our MVP. We decided the core features were the Clothes Swap and Brand Guide. Additional features included an Events Calander for eco-fashion events and a sunstainable fashion news feed. These would have been great to include given more time. 

(... Add wireframe pictures ...)

Once we'd worked out the user story, we determined our Entity Relationship Diagrams. Given we essentially had two seperate APIs with relatively complicated functionality, we made sure to thoroughly plan out our models and relationships between them. 

### Our Process

With our theme and plan in place, we started by focusing on the back-end. Firstly, we built the authorization functionality together to allow registration, login and profile views. We had to use a custom user model as we needed extra fields for "owned items" and to make sure users signed up with unique email addressed. 

We then worked on one API each, both with their own challenges and hurdles (see below). Once the logic of the back-end was in place, we did extensive testing of our API using Insomnia. 

When we were comfortable the back-end was robust, we began building our front-end using React. Again we split up the different components but worked collaboratively on design. 

### Hurdles & Wins

**Swap Request Functionality:** 

The logic of the clothes swap requests proved to be challenging. When a user requests a swap, they also choose an item from their "owned items" list that they are willing to exchange. All swap requests for an item appear on the owners profile. When a swap request is received, the owner gets to chose which they would like to accept by clicking "Approve Swap" on the desired item. A confirmation email is then sent to both users confirming the swap and allowing them to arrange the swap. Both items are then marked as "Swapped".

Approving swap requests was one of the main hurdles we faced when implementing this logic. In the end we did this using a PUT request, which updated only the "is_swapped" field on the item model to True. However, to do so we had to build a additional serializer with the other fields as extra kwargs so they were not required in the request.

##### Featured piece of code 1: Swap Approval Serializer 

```
class SwapItemSerializer(serializers.ModelSerializer):
  
  class Meta: 
    model = Item
    fields = '__all__'
    extra_kwargs = {'image': {'required': False}, 'title': {'required': False}, 'description': {'required': False}, 'size': {'required': False}, 'original_price': {'required': False}, 'category': {'required': False}, 'owner': {'required': False}, 'swap_requesters': {'required': False}}
```

Swap Requests were also quite difficult to handle on the front end. In the Swap Requests component, we ran into difficulty due to asynchronous requests when trying to GET data for the desired item and also fetch the current users "owned items", which they can choose to swap from. In the end, we used Promise.all to make sure all requests had been fully loaded before setting state. This proved to be one of the big wins of the project.

##### Featured piece of code 2: Swap Approval Serializer 

```
  function getSwapRequests(elem) {
    const array = elem.swap_requesters.map(swap => {
      return swap.item_to_swap
    })

    const promises = []
    array.forEach(elem => {
      promises.push(axios.get(`/api/items/${elem}/`).then(resp => resp.data))
    })
    Promise.all(promises).then(swaps => setSwapRequests(swaps))
  }
```


### Bugs


##### Featured piece of code 3: Controller Functions

## Conclusion
