import mapPage from '../support/pages/Map'
import foodTruckPage from '../support/pages/Foodtruck'


describe('Avaliações', () => {

    it('deve enviar uma nova avaliação', () => {

        cy.fixture('review').as('userReview')

        cy.get('@userReview').then((data) => {

            cy.apiCreateUser(data.user)
            cy.apiLogin(data.user)
            cy.apiCreateFoodTruck(data.foodtruck)

            cy.uiLogin(data.user)

            mapPage.goToFoodtruck(data.foodtruck.name)
            foodTruckPage.addReview(data.review)
            foodTruckPage.reviewShouldBe(data.user, data.review)

        })
    })
})

it('deve enviar uma nova avaliação', () => {

    var user = {
        name: 'Madruga Ramon',
        instagram: '@madruguinha',
        password: 'pwd123'
    }

    var foodtruck = {
        latitude: '-23.584642248123703',
        longitude: '-46.67472571134568',
        name: 'Super de Quico',
        details: 'Sucos de alta qualidade direto do saquinho.',
        opening_hours: 'das 14h às 20h',
        open_on_weekends: false
    }

    var review = {
        comment: 'O suco de limão estava muito bom, mas veio muito pouco.',
        stars: 4
    }

    cy.apiCreateUser(user)
    cy.apiLogin(user)
    cy.apiCreateFoodTruck(foodtruck)

    cy.uiLogin(user)

    mapPage.goToFoodtruck(foodtruck.name)
    foodTruckPage.addReview(review)
    foodTruckPage.reviewShouldBe(user, review)

})