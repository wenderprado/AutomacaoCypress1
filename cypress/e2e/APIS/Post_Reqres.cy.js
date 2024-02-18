/// <reference types="cypress" />

describe ('Post Reqres', () => {
    it('Validar Create retornando 201', () => {

        const dados = {
            "name": "morpheus",
            "job": "leader"
        }


        cy.request({
            method: 'Post',
            url: 'https://reqres.in/api/users/',
            body: dados,
            failOnStatusCode: false


        }).then((response) => {
            expect(response.status).to.eq(201)

        })
    
    })


    it('Validar REGISTER - SUCCESSFUL 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }


        cy.request({
            //payload
            method: 'Post',
            url: 'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false


        }).then((response) => {
            //validação de status code
            expect(response.status).to.eq(200)
            
            //validação de body
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
            
            //validação do token
            expect(retorno.token).to.eq("QpwL5tke4Pnpja7X4")

        })
    
    })



    it('Validar REGISTER - UNSUCCESSFUL 400', () => {

        const dados = {
            "email": "sydney@fife"
            
        }


        cy.request({
            //payload
            method: 'Post',
            url: 'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false


        }).then((response) => {
            //validação de status code
            expect(response.status).to.eq(400)
            
            //validação de body
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))


        })
    
    })


    
})