# Assignment Ask Phill - October 2022

![Screenshot 2022-10-23 at 19 56 56](https://user-images.githubusercontent.com/71289091/197408138-3c04592e-8a28-4521-9f30-e7123a00f1a9.png)

Check the [DEMO](https://steady-sherbet-6b99d9.netlify.app/)

### To check the project locally
``git clone & npm i``

### Technologies Used
React - Typescript - AXIOS & SWR (to fetch data) - SASS - Tailwind CSS - HeroIcons - Netlify(for hosting Demo)

I used [mockAPI](https://mockapi.io/docs) to generate the data for the products and fetched them with AXIOS & SWR.

### Summary of application
Create a store front where users can filter product based on three main categories - color/price/material. To do so we fetch data from an API (using a fetching library) based on the selected filters and then we map the data to our product component. 

### Issues faced
Fetching and handling the data selected from the API via the checkboxes states din't work the way I had planned. Thus for now it simply fetches all data. 
<br>
My idea was to store all the states from all the input fields into an object of empty objects state such as:

``const [selected, setSelected] = useState<{
  color: [],
  categories: [],  
  material: [],
  price: [],
  etc
}>()``

When a checkbox was selected it would change the state selected. 
<br>
To get the matches of the results of your selection you would click a submit button. 
This would trigger a onSumbit handler function such as the following. 

<code>
const handleSumbit = (e) => {
(e).prevent.default();
//do the fetching
//filter the data based on the filter sumbited and maps them to the product component
...
data.filter(product => {
product.color === color & product.category}).map(product => <Product product={product} />
</code>

### If I hand more time:
1. I would have looked deeper into the errors regarding not being able to fetch properly the data with the checkboxes. Probably would have tested fetching the data with useFetch hook and used Tailwind components for the checkboxes.
2. I would have implemented the pagination functionality as described in the [SWR Docs](https://swr.vercel.app/docs/pagination).
3. I would have looked into not making it fetch data every reload of the page as at the moment you 'lose' the products.
4. Finally, I would have dive deeper into making it fetch more performant and fast and maybe more accessible. 

### Notes to take into consideration
1. The application is not fully tested for a11y or for responsiveness as I heavily cutted corners on the styling. I did my best with the amount of time I had to make the styling at list somewhat responsive for mobiles. 
2. As the data I used came from mockAPI using their implemented Faker.js data, not all titles/names/categories or general data matches excactly. Similarly, I couldnt use their images as they were all the same. 
3. I use heavily the css property hover on non-link or non-button elements. I am aware of the breach I'm creating in terms of a11y. I wanted to avoid having errors related to a link tags missing unique link paths and to make the final demo a bit more plausable for the viewer. 
