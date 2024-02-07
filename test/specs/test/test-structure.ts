describe('mocha js demo - main suite',() =>{
    before(async () => {
        console.log('Hola soy un BEFORE HOOK')
    }) 

    beforeEach(async () => {
        console.log('Hoal soy un BEFORE EACH HOOK')
    })

    //it.only solo ejecuta ese test 
    it( 'Soy el primer test utilizando IT', async() => {
        console.log('primer test')
    })

    it( 'Soy el segundo test utilizando IT', async() => {
        console.log('segundo test')
    })

    after(async () =>{
        console.log('Hola soy un AFTER HOOK')
        await browser.debug()
    })
})