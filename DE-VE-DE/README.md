In this final examination, you are to create a page for the fictional company DE-VE-DE where users can add information about movies they want to watch, remove information about movies they have seen, and view all information about the movies they have saved. All of this data should then be saved in a Firebase database.

It is important to note that only information about a movie should be saved in the database, not the actual movie itself. Additionally, there is no requirement for including images/posters or any such visual elements.

Functionality:

    Users should be able to input the following information into input fields: title, genre, release date.
    Users should be able to add information about a movie to be saved in their Firebase database.
    Users should be able to remove information about a movie from their Firebase database.
    Users should be able to view all information about the movies on the page, retrieved from their Firebase database.
    Users should not be able to add a movie that already exists; therefore, the title should not appear more than once in the database.
    Users should be able to click on a movie and mark it as watched, setting the 'watched' property to true in the database for that movie.

Movie:
Field Data Type Description
title String The title of the movie
genre String The genre of the movie
releaseDate String The release year of the movie
watched Boolean Whether the movie has been watched or not; can be true or false
