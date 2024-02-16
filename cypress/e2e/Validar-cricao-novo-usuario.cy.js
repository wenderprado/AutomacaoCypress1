describe('Criar novo usuario ', () => {
  it('Validar a criacao de um novo usuario', () => {

    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //Usuario 1

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuarioTeste1')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Pedro')

    //clicar no  botao enviar
    cy.get('td > .btn').click()

    //verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Pedro')

    //Usuario 2

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuarioTeste2')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Maria')

    //clicar no  botao enviar
    cy.get('td > .btn').click()

    //verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Maria')

      //Usuario 3

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuarioTeste3')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Wender')

    //clicar no  botao enviar
    cy.get('td > .btn').click()

    //verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Wender')

  })


  it('Validar delecao de usuario', ()=>{
    //acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
  
  
        
    //apagar usuario
    cy.get(':nth-child(2) > :nth-child(5) > a').click()
     
      
    //acessar a página novamente 
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
  
  
    //verificar se o usario foi deletado
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.have.text','Wender')
  
    })


})