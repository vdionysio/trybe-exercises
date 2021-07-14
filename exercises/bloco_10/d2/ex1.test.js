const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it('Testando função callback de uppercase()', (done) => {
  uppercase('abcd', (str) => {
    expect(str).toBe('ABCD');
    done();
  })
})