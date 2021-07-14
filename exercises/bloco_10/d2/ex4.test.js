const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('verifica se os repositórios estão na lista', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(url).then(listRepos => {
    expect(listRepos).toContain('sd-01-week4-5-project-todo-list');
    expect(listRepos).toContain('sd-01-week4-5-project-meme-generator');
  })
})