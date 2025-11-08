@e2e @userDelete
Feature: User delete

    Scenario: Remove user from room
        Given i am the room page
        When I click on the bin icon
        Then i should see a delete confirmation modal
        When i confirm the deletion
        Then i should see a success message