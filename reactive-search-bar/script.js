document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('#searchBar');
  const outPut = document.querySelector('#reposContainer');
  const baseUrl = 'https://api.github.com/search/repositories';
  const message = document.querySelector('#message');

  const searchRepos = (term) => {
    if (term === '') {
      console.log(`not defined`);
      return Rx.Observable.of(null);
    } else {
      return Rx.Observable.create((observer) => {
        fetch(baseUrl + `?q=${term}`)
          .then((res) => res.json())
          .then((repos) => {
            observer.next(repos);
            observer.complete();
          })
          .catch((err) => console.log(err));
      });
    }
  };

  Rx.Observable.fromEvent(searchBar, 'input')
    .map((e) => {
      console.log(e.target.value);
      return e.target.value;
    })
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap((term) => {
      return searchRepos(term);
    })
    .subscribe((repos) => {
      console.log(repos);

      if (!repos) {
        message.style.display = 'none';
        createChildren(repos['items']);
      } else {
        outPut.innerHTML = '';
        message.style.display = '';
      }
    });

  const createChildren = (arr) => {
    arr.map((item) => {
      let div = document.createElement('div');
      div.classList.add('item');
      let img = document.createElement('img');
      img.setAttribute('src', item.owner.avatar_url);
      img.setAttribute('loading', 'lazy');
      let repoTitle = document.createElement('p');
      let repoTitleNode = document.createTextNode(item.full_name);
      repoTitle.appendChild(repoTitleNode);

      let goButton = document.createElement('a');
      goButton.setAttribute('href', item.html_url);
      goButton.setAttribute('target', '_blank');
      let goButtonNode = document.createTextNode('Check Repo');
      goButton.appendChild(goButtonNode);

      div.appendChild(img);
      div.appendChild(repoTitle);
      div.appendChild(goButton);
      outPut.appendChild(div);
    });
  };
});
