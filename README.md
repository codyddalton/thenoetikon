
![Noetikon](https://github.com/user-attachments/assets/560c5eae-ebf1-4f37-a2c7-91bed1ca931f)
<h2 align="center">Quote Bank Desktop Application</h2>
<p align="center">**WORK IN PROGRESS**</p>
<p align="left">The Noetikon is a Star Wars themed quote bank made for a close friend to house their large collection of quotations. He wanted the ability to store these quotes along with related data, and then to be able to search for the quote from his archive using different search filters associated with those related data points. I suggested two additional features as well, which he happily approved; these being a random quote generator API and a quote sharing feature.</p>



<h2 align="center">Application Features</h2>
<div align="center">
  <img src="https://github.com/user-attachments/assets/ae4001a8-a079-42c8-985c-22db0eff7d9b" />
  <p>Figma Wireframe - Quote Adding</p>
</div>


<b>Quote Adding</b>: Clicking on the '+' button (the first button on the upper right-hand side) opens a quote entry form. It features input and selection fields for each of the data properties of the Quote object. Including:

* Era (Star Wars mythos timeline era)
* Title (descriptive title for the quote)
* Source (book/comic/movie source of the quote)
* Attribution (fictional character speaking the quote)
* Tags (subject-matter tags)
* Author (writer of the quote source)
* Quote (the quote itself)

Title and quote fields are checked for uniqueness. Duplicates and near-duplicates will, upon attempted submission, engage a prompt for the user to compare their new entry with the similar old entries, giving them the option to dismiss the warning or abort their post.

<div align="center">
  <img src="https://github.com/user-attachments/assets/ec64bbf6-cf75-4b9d-b7bb-c7cf9e33d056" />
  <p> Figma Wireframe - Quote Search</p>
</div>

<b>Quote Search</b>: Clicking on the magnifying glass button to the right of the '+' button opens a quote search directory. Quotes can be searched for using one of seven filters matching the seven data points of the Quote object. Using the above graphic for example, we could search for all quotes with an Attribution field matching "Darth Bane". Alternatively, we could enter part or all of a unique Title or Quote using matching filters in order to return exact or similar results. In clicking on a result, the user is taken to the quote view interface, which displays the quote and its other data properties.

<div align="center">
  <img src="https://github.com/user-attachments/assets/aef2ec3f-4c47-4f60-a9ea-b5bc6060ac44" />
  <p> Figma Wireframe - Quote View</p>
</div>

<b>Quote View</b>: A singled-out quote object is displayed, showing each of its seven data properties. From this view, the quote data can also be edited and those edits can be saved; the quote object can also be deleted from the database.

* Edit: By first clicking on the "Edit" button, the displayed fields are replaced with input fields prefilled with the current quote data. The user can alter the inputs for each of the seven properties.

* Save: By clicking on the "Save" button, the user is prompted with a popup window asking to confirm that they're satisfied with the edits they've made. They can choose to abort these edits, or they can confirm them - and the Quote object will be updated in the database to reflect their changes.

* Delete: By clicking on the "Delete" button, the user is prompted with a popup window asking to confirm that they want to delete the Quote object from the database. They can choose to cancel deletion, or they can confirm it - and the Quote object will be remove from the database.

<b>Random Quote</b>: When the application is first loaded, and any time the refresh button (second on the upper left) is pressed, the quote view is filled with data from a randomly chosen Quote object from the user's database. This will display in the same way as a chosen quote from the search feature, and can likewise be edited, saved, or deleted.

<div align="center">
  <img src="https://github.com/user-attachments/assets/2fab2198-b3db-44e3-bef2-cef328c90da1" />
  <p> Figma Wireframe - Quote Share</p>
</div>

<b>Quote Share</b>: By clicking on the share button (first on the upper left), the quote currently in view is presented to a share view interface with the options to share the quote via X, Facebook, or Discord. Additionally, quick links are displayed for the user on the bottom left and right to take them to pre-filled search results for the quote's author and the quote's attribution. If no quote is currently selected, the share option is disabled. 

<h2 align="center">Tech Stack</h3>

<h3 align="center">Front-End</h3>
<p align="center"><b>React</b>: The Noetikon uses React Hooks such as useState and useEffect.<br></br>
<b align="center">Electron</b>: The Noetikon boots with Electron, making it an executable desktop application.</p>

<h3 align="center">Back-End</h3>
<p align="center"><b>Node</b>: The Noetikon uses server-side functionality to communicate between React and the quote database.<br></br>
<b>Express</b>: The Noetikon uses cusom API functionality for searches and CRUD operations.</p>

<h3 align="center">Database</h3>
<p align="center"><b>MongoDB</b>: The Noetikon stores its Quote objects in a MongoDB collection, where they can then be accessed remotely by the user.</p>
