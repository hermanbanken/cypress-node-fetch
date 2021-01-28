describe('pastbin.com', () => {
  it('ok', () => {
    expect(true).to.equal(true)
  })
  it('uploading a JSON body', () => {
    cy.fetchNodeJS({
      url: 'http://example.org',
      method: 'GET',
      headers: {
        'User-Agent': 'c2fIAP',
        'Cache-Control': 'no-cache',
        // "Authorization": `Bearer TOKEN`,
        // "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // 	foo: "bar"
      // }),
    }).then((result: Object) => {
      cy.log(JSON.stringify(result))
      expect(result).to.own.include({
        ok: true,
        status: 200,
      })
    })
  })
})
