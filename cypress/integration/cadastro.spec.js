/// <reference types="cypress"/>

var Chance = require('chance')
var chance = new Chance()
//min 7:14
describe('Cadastro', () => {
    it('', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        // Inputs de texto / textarea / email -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // Inputs de radio / checkboxes -> check
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')
        
        // Inputs do tipo combobox / select -> select
        cy.get('select#countries').select('Dinamarca', { force: true })
        cy.get('select#years').select('2006', { force: true })
        cy.get('select#months').select('Janeiro', { force: true })
        cy.get('select#days').select('8', { force: true })

        // Inputs de senha -> type
        cy.get('input#firstpassword').type('testAutomated123')
        cy.get('input#secondpassword').type('testAutomated123')
        
        // Inputs do tipo button -> click
        cy.contains('Finalizar cadastro').click()

        // espero que a minha aplicação seja direcionada para a listagem
        //url
        //deve contar listagem
        //should contain listagem
        cy.url().should('contain', 'listagem')
    });
});
