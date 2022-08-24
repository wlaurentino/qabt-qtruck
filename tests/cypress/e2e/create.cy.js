import mapPage from '../support/pages/Map'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-22.950532379483978',
            longitude: '-43.1842498476425',
            name: 'Food truck del Chavo',
            description: 'O melhor lugar para tomar o suco de limão que parece de groselha e tem sabor de tamarindo.',
            opening_hours: 'das 14h as 20h'
        }
        
        cy.apiCreateUser(user)
        cy.uiLogin(user)
        
        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)

        cy.wait(10000)

    })

})