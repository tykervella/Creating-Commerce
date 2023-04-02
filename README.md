# Creating Commerce 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## DESCRIPTION 

Week 13 Challenge for Full-Stack Programming bootcamp at the University of Washington in partnership with edX. This program runs in node JS to define a local server that includes routes for an ecommerce site that allows the client to create, read, update and delete data for categories, tags and products. 

### Backend Functionality DEMO

[DEMO - /categories routes](https://www.loom.com/share/a218c765661b454bafe4e150d03eafd2)

[DEMO - /tags routes](https://www.loom.com/share/1ca9e5347eab4fecb066174d7fc18d64)

[DEMO - /products routes](https://www.loom.com/share/882c22efcb46422ebb4a380fc5083d91)


---


## TABLE OF CONTENTS 

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributions](#contributions)

[Testing](#testing)

[License](#license) 

[Questions](#questions)


---


## INSTALLATION 

This project runs using node,SQL, and insomnia. Follow the necessary installation for these programs to download them to your local device. 

After entering the mySQL terminal enter the code "SOURCE db/schema.sql" to create the ecommerce_db. 

Then, in the normal terminal, run the code "npm i" into node to install the necessary packages.

After that, run the code "node seeds/index.js" into node to seed the ecommerce_db.

Finally run the code "npm start" to begin the application and view it using insomnia at the localhost port 3001. 


---


## USAGE

This program does not include a front-end and therefore runs within the insomnia browser at "localhost:3001/". All fetch requests will be routed through /api followed by the route defined below. 

- To view all products, tags or categories: simply navigate to "/products", "/tags", and "/categories" respectively and perform a GET request. 

- To add a product, tag or category: navigate to "/products", "/tags", and "/categories" respectively, however this time you perform a POST request. You must include a JSON with the necessary information for the new product, tag or category you wish to create. 

- If you wish to view a specific product, tag or category: navigate to "/products/id", "/tags/id", or "/categories/id" and perform a GET request where id is the specific id for the product, tag or category you wish to view. 

- To update information about a specific product, tag or category: navigate to "/products/id", "/tags/id", or "/categories/id" and perform a PUT request where id is the specific id for the product, tag or category you wish to update. You must include a JSON with the necessary information for the new product, tag or category you wish to create. 

- Finally, to delete a specific product, tag or category: navigate to "/products/id", "/tags/id", or "/categories/id" and perform a DELETE request where id is the specific id for the product, tag or category you wish to delete.


---


## CONTRIBUTIONS

[Starter Code](https://github.com/coding-boot-camp/fantastic-umbrella)


---


## TESTING


N/A


---


## LICENSE 

MIT License
      Copyright (c) 2023 tykervella
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
   

--- 


## QUESTIONS


Any Questions regarding this project can be directed to me personally. You can find me at [github](https://github.com/tykervella) or send me an email at tylerkervella@gmail.com.