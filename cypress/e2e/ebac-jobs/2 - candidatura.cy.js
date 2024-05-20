/// <reference types="cypress" /> 
//comentários no arquivo home também


describe ('testes para o preenchimento do formulario', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        //antes de cada teste deve-se visitar o site, e que o cype que estará veriricado o site acima
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        //O cypress deve testar é possível clicar no primeiro botão com esta classe, já que existe mais de 
        // botão com a mesma classe
    })

    it('Deve verificar se foi para o fomulário de cadastro', () => {
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })

    it('Deve ir para a página de cadastro', () => { // o it é o "test", para configurar um teste
        cy.get('input[name="nome-completo"]').type('Gustavo Dias')
        cy.get('input[name="email"]').type('Gustavo@teste.com')
        cy.get('input[name="telefone"]').type('38 xxxxx-xxxx')
        cy.get('input[name="endereco"]').type('Rua jest, bairro cypress')
        //configurando teste para campos do tipo input, onde selecionará o atributo do input, no caso, name
        // e deverá digitar o que tá escrito na frente

        cy.get('#linux').check()
        //configurando para testar input do tipo checkbox(type=radio), chamando ele pelo id e testando se ele pode ficar marcado (.check)
        
        cy.get('select[name="escolaridade"]').select('outros')
        //configurando para o campo tipo select, onde ele deverá escolher o valor de "outros"
    
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (umaPalavraQualquerSoParaServirDeReferencia) => {
            expect(umaPalavraQualquerSoParaServirDeReferencia).contain('Obrigado pela candidatura!')
            //configurando para que o alert que aparece no final esteja sendo executando corretamente e contenha o texto descrito
        })

        cy.screenshot('tela-inscrição-preenchida')
    })
})