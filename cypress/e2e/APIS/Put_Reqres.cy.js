/// <reference types="cypress" />
describe ('Put Reqres', () => {
it('Validar Update retornando 201', () => {

    const dados = {
        "name": "morpheus",
        "job": "Quality Assurance"
    }


    cy.request({
        method: 'Post',
        url: 'https://reqres.in/api/users/3',
        body: dados,
        failOnStatusCode: false


    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq("morpheus");
        expect(response.body.job).to.eq("Quality Assurance");

        //validação de body
        let retorno = response.body
        cy.log(JSON.stringify(retorno, null, 2))

    })

})
})