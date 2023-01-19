(()=>{"use strict";var e={drinks:{text:"Smoothies have become an on-the-go staple for health-conscious eaters, and we have to agree: They’re ridiculously easy to make, filled with fruits and veggies, and are ready in seconds. But not all smoothies are created equal. In fact, many store-bought smoothies are loaded with excess sugar and calories. So, if you’re looking for healthy smoothie recipes, we have the expert-approved tips, tricks, and ingredients to toss into your blender ASAP.",src:"./assets/images/smoothie.jpg",goods:[{meal:"Smoothie",name:"Fresh Strawberry",src:"./assets/images/strawberry.jpg",price:7},{meal:"Smoothie",name:"Sweet Mango",src:"./assets/images/mango.jpg",price:7},{meal:"Smoothie",name:"Strawberry Summer",src:"./assets/images/berries.jpg",price:7}]},balanced:{text:"Whether you are eating breakfast, lunch or dinner, creating a balanced meal is key to ensuring that you are nourished, satisfied, and energized. Although it might seem like a complicated formula, creating a balanced meal is actually quite simple, and once you know how to do it, you will be able to put delicious and healthy meals together in a pinch. So here are 3 well-balanced meal ideas and some quick tips on exactly how to do it.",src:"./assets/images/balanced.jpg",goods:[{meal:"Breakfast",name:"Rice noodles with Vegetables",src:"./assets/images/0_breakfast.jpg",price:10},{meal:"Lunch",name:"Braised Rice with Vegetables",src:"./assets/images/0_lunch.jpg",price:15},{meal:"Dinner",name:"Rice with peas and vegetables",src:"./assets/images/0_dinner.jpg",price:13}]},vegetarian:{text:"Whether you’re going vegetarian full-time or just trying to eat less meat (hello, Meatless Mondays!), having some easy vegetarian recipes on hand is a great idea. As a bonus, you’ll also have some ideas for what to cook when you’re hosting a dinner or BBQ and need something tasty for your vegetarian friends. Many of these recipes can also be modified to be made into vegan recipes, gluten-free recipes, or keto recipes if accommodating other diets as well.",src:"./assets/images/vegetarian.jpg",goods:[{meal:"Breakfast",name:"Oatmeal pancakes with cream cheese",src:"./assets/images/1_breakfast.png",price:8},{meal:"Lunch",name:"Cottage cheese casserole with apple jam",src:"./assets/images/1_lunch.png",price:10},{meal:"Dinner",name:"Wheat pancakes with strawberry jam",src:"./assets/images/1_dinner.png",price:11}]},office:{text:"If you are working in an open office space, or even just a downtown apartment packed with folks and computers, sometimes find yourself eating lunch at your desk, or running down to the local McDonalds to fetch some food. Is it good? It is certainly time savvy, but I wonder if it gives you the same satisfaction as a meal together.",src:"./assets/images/office.jpg",goods:[{meal:"Breakfast",name:"Cordon bleu with bulgur",src:"./assets/images/2_breakfast.png",price:13},{meal:"Lunch",name:"Chicken meatballs with spaghetti",src:"./assets/images/2_lunch.png",price:15},{meal:"Dinner",name:"Beefsteak with buckwheat",src:"./assets/images/2_dinner.png",price:14}]}},a=document.querySelector(".menu__img"),s=document.querySelector(".menu__descr"),t=document.querySelector(".food__list"),n=document.querySelector(".menu__content");function o(e){a.src=e.src,s.textContent=e.text,t.innerHTML="";var n=1;e.goods.forEach((function(e){t.innerHTML+='<li class="food__item">\n            <h2 class="food__title">0'.concat(n,". ").concat(e.meal,'</h2>\n            <img class="food__img" src="').concat(e.src,'" alt="breakfast">\n            <p class="food__name">').concat(e.name,'</p>\n            <p class="food__price">Price: <span class="price">').concat(e.price,'$</span></p>\n            <button class="add-item">Add to bag</button>\n          </li>'),n++}))}o(e.balanced),n.addEventListener("click",(function(a){a.target.classList.contains("menu__item")&&(document.querySelectorAll(".menu__item").forEach((function(e){e.classList.remove("active-menu")})),a.target.classList.add("active-menu"),o(e[a.target.dataset.menu]))}))})();