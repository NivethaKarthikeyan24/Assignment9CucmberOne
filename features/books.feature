Feature: BooksandAuthors
    Scenario: Correct non-zero number of books found by author
        Given I have the following books in the store
            | title                                | author      |
            | The devil in the White city          | Erik Larson |
            | The Lion, the Witch and the Wardrobe | C.S. Lewis  |
            | In the Garden of Beasts              | Erik Larson |
        When I search for books by author Erik Larson
        Then I find 2 books
        