About Project :-
It's an e-commerce project called "Mellow E-commerce" in which I have only worked on the frontend part. I have used React, Javascript and Tailwind CSS.

Live Project URL (Hosted on Vercel) :- https://arizon-assignment-eta.vercel.app/
GITHUB Repo URL :- https://github.com/sidhanthembrom/Arizon-Assignment

Setup Instructions :-
1. Clone the repository and change directory
2. Run "npm install"
3. Run "npm run dev"

A brief Approach :-
I approached the assignment by focusing on building a modular, responsive, and user-friendly e-commerce frontend using React.js, JavaScript, and Tailwind CSS, adhering to the requirements while maintaining clean code practices.

1. Project Structure & Routing

I implemented it with React.js and React Router to manage navigation between the Home, Product Listing, and Cart pages.

2. UI & Styling

The layout and responsiveness were achieved using Tailwind CSS.
I closely followed the reference design from Sample Website to create a modern and consistent UI, including header, hero section, and footer.
Used both Grid and Flexbox to arrange elements.

3. Product Data Fetching

Product data was fetched from the public API, Fake Store API using fetch inside useEffect.
Loading and error states were handled to improve UX.

4. State Management

Used React Context API to manage global cart state, including add, remove, and update quantity operations.

5. Mini Cart & Full Cart Pages

Mini cart is shown as a dropdown from the cart icon and displays current cart items with subtotal.
Full cart page includes quantity controls, remove buttons, and an order summary with calculated totals.

6. Bonus

Search Functionality was implemented by updating an array with the input text in the search bar.
Local storage was used to extract any existing array and store after items have been removed or added to it.
