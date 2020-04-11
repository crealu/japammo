let views = {
  compliments: complimentsnotesArr,
  haveto: havetonotesArr,
  ifnara: ifnaranotesArr,
  iftara: iftaranotesArr,
  inorderto: inordertonotesArr,
  potentialform: potentialformnotesArr,
  wishidid: wishididnotesArr
}

let currNoteArr;

function notes(notesArr) {
  let notesHere = document.getElementsByClassName('gets-notes')[0];
  let i = 0;

  while (notesHere.firstChild) {
    notesHere.removeChild(notesHere.firstChild);
  }

  for (i = 0; i < notesArr.length; i++) {
    let row = document.createElement("div");
    row.classList.add('notes-row');

    function makeNoteCol(n) {
      let col = document.createElement("div");
      col.innerHTML = n;
      col.classList.add('notes-col');
      row.appendChild(col);
    }

    notesArr[i].forEach( n => makeNoteCol(n) );
    notesHere.appendChild(row);
  }
}

function getUniqueKanji() {
  let randomString = '(){},~? abcdefghijklmnopqrstuvwxyz、（）『』？　';
  let uniqueKanji = [];

  currNoteArr.forEach( pairArr => {
    for (var i = 0; i < pairArr[1].length; i++) {
      if (!(katakanaArray.includes(pairArr[1][i])) && !(hiraganaArray.includes(pairArr[1][i]))) {
        if (!randomString.includes(pairArr[1][i])) {
          if (!uniqueKanji.includes(pairArr[1][i])) {
            uniqueKanji.push(pairArr[1][i]);
          }
        }
      }
    }
  });

  let notesHere = document.getElementsByClassName('gets-notes')[0];
  let uniqueKanjiDiv = document.createElement("div");
  uniqueKanjiDiv.classList.add('unique-kanji-wrapper');

  uniqueKanji.forEach( k => {
    let newKanjiP = document.createElement("p");
    newKanjiP.innerHTML = k;
    newKanjiP.classList.add('unique-kanji');
    uniqueKanjiDiv.appendChild(newKanjiP);
  });

  notesHere.appendChild(uniqueKanjiDiv);

  console.log(uniqueKanji);
}

function changeView(item) {
  let filename = item.dataset.scriptname;
  currNoteArr = views[filename];
  notes(views[filename]);
}

window.onload = notes(views.compliments);
