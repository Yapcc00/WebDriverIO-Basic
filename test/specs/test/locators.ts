describe('Selectors DemoQA', () => {
    beforeEach(async() =>{
        await browser.url('https://demoqa.com/links')
    })

    it('CSS Example', async()=> {
        const createdLink = await $('#created') 
        const responseLink = await $('#linkResponse') 

        //colocar metodo  scroll
        createdLink.scrollIntoView()
        createdLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 201 and status text Created')
    })

    it('CSS Example', async()=> {
        const noContentLink = await $('#linkWrapper p:nth-child(6) a') 
        const responseLink = await $('#linkResponse') 

        //colocar metodo  scroll
        noContentLink.scrollIntoView()
        noContentLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 204 and status text No Content')
    })

    it('Partial Element Text', async()=> {
        const movedLink = await $('a=Moved') 
        const responseLink = await $('#linkResponse') 

        //colocar metodo  scroll
        movedLink.scrollIntoView()
        movedLink.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Xpath Example', async()=> {
        const badRequest = await $('//*[@id="bad-request"]') 
        const responseLink = await $('#linkResponse') 

        //colocar metodo  scroll
        badRequest.scrollIntoView()
        badRequest.click()

        responseLink.scrollIntoView()
        await expect(responseLink).toHaveTextContaining('Link has responded with staus 400 and status text Bad Request')
    })

    

})