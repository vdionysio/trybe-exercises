const ex6 = require('./ex6');

describe('testando fetchDog', () => {
  ex6.fetchDog = jest.fn();
  afterEach(ex6.fetchDog.mockReset);

  // it('interpretar que a requisição se resolveu e teve como valor "request sucess"', () => {
  //   ex6.fetchDog.mockResolvedValue('request success');
  //   return ex6.fetchDog().then((result) => {
  //     expect(result).toBe('request success')
  //   })
  // })

  // it('interpretar que a requisição se resolveu e teve como valor "request sucess"', async () => {
  //   ex6.fetchDog.mockResolvedValue('request success');
  //   const result = await ex6.fetchDog()
  //   expect(result).toBe('request success')
  // })

  it('interpretar que a requisição se resolveu e teve como valor "request sucess"', () => {
    ex6.fetchDog.mockResolvedValue('request success');
    return expect(ex6.fetchDog()).resolves.toBe('request success')
  })

  // it('interpretar que a requisição falhou e ter como valor "request failed"', () => {
  //   ex6.fetchDog.mockRejectedValue('request failed');
  //   return ex6.fetchDog().catch((result) => {
  //     expect.assertions(1)
  //     expect(result).toBe('request failed')
  //   }) 
  // })

  // it('interpretar que a requisição falhou e ter como valor "request failed"', async () => {
  //   ex6.fetchDog.mockRejectedValue('request failed');
  //   expect.assertions(1);
  //   try {
  //     await ex6.fetchDog();
  //   } catch (e) {
  //     expect(e).toBe('request failed')
  //   }
  // })

  it('interpretar que a requisição falhou e ter como valor "request failed"', () => {
    ex6.fetchDog.mockRejectedValue('request failed');
    return expect(ex6.fetchDog()).rejects.toBe('request failed')
  })
})