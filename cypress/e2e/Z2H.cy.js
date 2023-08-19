

describe('https://www.zero2hero.net login test', () => {

    beforeEach(() => {
        cy.visit("https://www.zero2hero.net").as('visit_Z2H');
    })
    it('failed signup', () => {
        
        cy.get('@visit_Z2H')
        cy.get('.ms-auto > [href="/home/discover"]').click()
        cy.get('#email').focus().type('jjy@gmail.com')
        cy.get('#email').should('have.value','jjy@gmail.com')
        cy.get('#password').type('123')
        cy.get('#password').should('have.value','123')
        cy.get('#__next > main > section > div.p-0.container > div > div.bg-white.pt-5.pt-5.pb-lg-0.pb-5.col-md-6 > div > form > div.d-inline-block.w-100 > button').click()
        cy.get('.fade').should('contain','incorrect')
    })  

    // it('failed enter login detail', () => {
        
    //     cy.get('@visit_Z2H')
    //     cy.get('.ms-auto > [href="/home/discover"]').click()
    //     cy.get('#email').type('jjy')
    //     cy.get('#password').type('123')
    //     cy.get('#__next > main > section > div.p-0.container > div > div.bg-white.pt-5.pt-5.pb-lg-0.pb-5.col-md-6 > div > form > div.d-inline-block.w-100 > button').click()
    //     // cy.get('.fade').should('contain','incorrect')
    // }) 


    it('successful signup', () => {
        cy.get('@visit_Z2H')
        cy.get('.ms-auto > [href="/home/discover"]').click()
        cy.get('#email').type('wenruiwu3690@gmail.com')
        cy.get('#email').should('have.value','wenruiwu3690@gmail.com')
        cy.get('#password').type('Zjl131499.')
        cy.get('#password').should('have.value','Zjl131499.')
        cy.get('#__next > main > section > div.p-0.container > div > div.bg-white.pt-5.pt-5.pb-lg-0.pb-5.col-md-6 > div > form > div.d-inline-block.w-100 > button').click()
        cy.url().should('contain','/home/discover')
    })  
})
