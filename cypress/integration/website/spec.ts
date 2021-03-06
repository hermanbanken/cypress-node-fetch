describe('pastbin.com', () => {
  it('ok', () => {
    expect(true).to.equal(true)
  })
  it('doing a GET request without CORS', () => {
    cy.fetchNodeJS({
      url: 'http://example.org',
      method: 'get',
      headers: {
        'User-Agent': 'c2fIAP',
        'Cache-Control': 'no-cache',
      },
    }).then((result: Object) => {
      cy.log(JSON.stringify(result))
      expect(result).to.own.include({
        ok: true,
        status: 200,
      })
    })
  })

  it('uploading a JSON body', () => {
    cy.fetchNodeJS({
      url: 'https://requestbin.net/r/dahw5vrs',
      method: 'post',
      headers: {
        'User-Agent': 'c2fIAP',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foo: 'bar',
      }),
    }).then((result: Object) => {
      cy.log(JSON.stringify(result))
      expect(result).to.own.include({
        ok: true,
        status: 200,
      })
    })
  })

  it('does a request to a self-started server', () => {
    cy.startServer({
      port: 60801,
      response: {
        status: 200,
        body: 'Foobar',
        headers: {},
      },
    }).then(() => {
      cy.request('http://localhost:60801/test', {}).then((resp) => {
        cy.log('Response', resp)
      })
    })
  })
})
