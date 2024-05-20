/// <reference types="cypress" /> 
// esta referência é adicionada para importar a biblioteca do cypress aqui no vs


// será testado para o site:   https://ebac-jobs-e2e.vercel.app/

describe ('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        //antes de cada teste deve-se visitar o site, e que o cype que estará veriricado o site acima
    })

    it('Deve renderizar 4 vagas', () => { // o it é o "test", para configurar um teste

        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
        // a linha de cima está mandando o cypress buscar no site, o site não especificamente está neste código no qual estamos configurando o teste
        // esta buscando o elemento com a classe especificada (no caso ul) e dentro deles o filho direto li
        // e especificando que eles precisam ter tamanho de 4 no minimo(segunda parte da linha)
    })

    it('Deve filtrar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        //este teste está buscando no input de pesquisa do site, a palavra fullstack
        //type aqui no cypress não quer dizer que esteja especificando um tipo, e sim faland pro cypress digitar no campo
        cy.get('button[type="submit"]').click()
        // este teste está falando que o cypress deve buscar o botao do typo submit (a notação é feita desta forma)
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})