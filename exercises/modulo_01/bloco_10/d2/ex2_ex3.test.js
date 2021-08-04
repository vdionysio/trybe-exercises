const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Resultado da função getUserName', () => {
  // it('quando o usuário é encontrado', () => {
  //   return getUserName(4).then(foundUser => {
  //     expect(foundUser).toBe('Mark');
  //   })
  // })
  
  // it('quando o usuário é encontrado', async () => {
  //   const foundUser = await getUserName(4);
  //   expect(foundUser).toBe('Mark');
  // })

  it('quando o usuário é encontrado', () => {
    return expect(getUserName(4)).resolves.toBe('Mark')
  })

  // it('quando o usuário não é encontrado', () => {
  //   expect.assertions(1);
  //   return getUserName(6).catch(e => expect(e).toEqual({"error": "User with 6 not found."}))
  // })

  // it('quando o usuário não é encontrado', async () => {
  //   expect.assertions(1);
  //   try {
  //     await getUserName(6);
  //   } catch (e) {
  //     expect(e).toEqual({"error": "User with 6 not found."});
  //   }
  // })

  it('quando o usuário não é encontrado', () => {
    return expect(getUserName(6)).rejects.toEqual({"error": "User with 6 not found."})
  })
})