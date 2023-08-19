describe('The home page', () => {
    beforeEach(() => {
        cy.exec('npm run db:reset && npm run db:seed')  
        //初始化数据库
        cy.request('POST', '/test', {
            title: 'First Post',
            authorId: 1,
            body:'...',
        })
        //数据插入
        cy.request('POST', '/test/seed/user', { name: 'Jane' })
            .its('body')
            .as('currentUser')
    })

    it('successfully loads', () => {
        cy.visit('/')
    })
})