# Thrift Titans
Our published site can be viewed here: [Thrift Titans](https://info442-green-beans.web.app/)

## Our Mission

Thrift Titans is a web application aimed to help budget-conscious Gen Z students in Seattle overcome barriers to second-hand shopping, so they can save money, contribute to the environment, and participate in sustainable practices. By making second hand shopping more accessible through our centralized information hub, Thrift Titans, students will be able to engage in sustainable practices and contribute to shaping a more sustainable world. 

## Features

* Home Page
* Event Page
	* Event Search
	* Event Filter
* Store Page
	* Store Search
 	* Store Filter
* About Page
* Quiz Page

## Group Members
* Justin Le
* Yohan Lee
* Tiffany Lu
* Chantalle Matro
* Ella Gabrielle Uchtmann


## Development
Thrift Titans is constructed with:

* Javascript
* CSS
* HTML
* Bootstrap
* React
* Firebase

## User Personas
Our user personas can be viewed here: [Thrift Titans User Personas](/thrift-titans.pdf)

## Testing Protocol
| Feature                          | Requirement Specification                                                                                                                                                                                                                                                                                                                                                              | Testing Cases                                                        | Expected Results                                                                                                                                                                                                                                                                                                             | Expected Deficiency                                                               | Unexpected Results                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Stores/Events Search**             | Enables users to search for specific stores or events on their respective pages. <br><br> Users navigate to the stores or events page using the navigation bar and find the search bar at the top. <br><br> The search functionality is not case sensitive.                                                                                                                                                | The user searches for a store/event within the store/event search bar. | The web application displays the user input from the search bar. <br><br> Returns “result not found” if the user input is invalid.                                                                                                                                                                                                   | Search results may take some time to load.                                      | The web application does not display user input even though it is valid. <br><br> Displays something different from user input. <br><br> Does not display “result not found” if the user input is invalid. <br><br> Displays “result not found” even though the search is valid.                                                                                           |
| **Stores/Events Filter**             | Enables users to refine their search for stores and events by filtering through categories. <br><br> Users navigate to the stores or events page using the navigation bar and find the filtering function at the top, by the search bar. <br><br> The stores filter includes the option to filter by price ($ - $$$$) and location (Seattle neighborhood). Events filter includes date, time, and location (Seattle neighborhood). | Users will select filters or tags within the store/event filter of their liking. | The web application displays all the stores/events that match the selected filters. If no stores/events match the filters selected, “results not found” will be displayed on the page.                                                                                                                                       | Filtered results may take some time to load.                                    | The web application does not display all the stores/events that match the filter. Displays no results even though the filter is valid. Does not display “result not found” if the filter input is invalid.                                                                                                                                          |
| **Stores/Events Interactive Cards**  | Each interactive card displays information about a store or event, such as location, date, time, and price, if applicable. <br><br> Users access these cards by navigating to the stores or events page through the navigation bar. <br><br> Users click on the “More details” button on each card, prompting a new window that displays more details about the store or event.                                       | Users click on the “More details” button on a store/event card.        | The web application opens a new window that displays additional information about the store/event that was clicked on.                                                                                                                                                                                                      | N/A                                                                             | The web application does not open a new window. <br><br> Does not render store/event information directly related to the store that was clicked on. <br><br> Renders information about a different event/store.                                                                                                                                                   |
| **Quiz**                            | The quiz feature recommends which stores or events align with users’ preferences. <br><br> Users access this quiz by navigating to the quiz page through the navigation bar. <br><br> Quiz questions may include style preferences or budget constraints, and answers result in recommendations such as vintage stores, general thrift stores, etc.                                        | Users walk through the quiz to completion.                            | The web application displays the quiz’s results based on the answers checked.                                                                                                                                                                                                                                                | N/A                                                                             | The web application displays an incorrect result. <br><br> Does not display any result. <br><br> Does not proceed from question to question. <br><br> Is unable to submit.                                                                                                                                                                                                                                     |

## Bugs
* In the quiz, if a user answers the questions and then clicks the 'Previous' button, any answers they had entered after the current question will not be saved when they click 'Next' again.
	* Users can reanswer the questions that weren't saved or avoid clicking 'Previous' to ensure their quiz progress is not lost.

## References
Edelson, S. (2022, October 12). 72% of college students shopped fast fashion in 2022; can thredup change their wasteful ways. Forbes. https://www.forbes.com/sites/sharonedelson/2022/08/25/72-of-college-students-shopped-fast-fashion-in-2022-can-thredup-change-their-wasteful-ways/?sh=399192f835f9

editor, L. (2024, February 16). Environment: Say no to fast fashion. The Seattle Times. https://www.seattletimes.com/opinion/letters-to-the-editor/environment-say-no-to-fast-fashion/

Kelly, D. (2023, April 21). Gen Z and millenials cannot afford to shop sustainably, according to New Study. Hypebeast. https://hypebeast.com/2023/4/generation-gen-z-millenials-cannot-afford-shop-sustainable-enviornmentally-friendly-cost-of-living-crisis-new-study-report

Parks, M. (n.d.). Sustainable fashion at Seattle U Creates Community. The Spectator. https://seattlespectator.com/2022/04/04/sustainable-fashion-at-seattle-u-creates-community/

Stitzhal, D. (n.d.). The Naked Truth About Clothing Waste. Seattle; Seattle Public Utilities
