import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'William',
      instagram: '@williamad',
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('não deve logar com senha inválida', () => {

    const user = {
      instagram: '@williamad',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  })

  it('não deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@madwill',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')

  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@madwill'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')

  })

  it('todos os campos devem ser obrigatórios', () => {
    const user = {}

    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')

  })

})



