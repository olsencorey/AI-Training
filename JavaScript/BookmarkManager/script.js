const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const inputName = document.getElementById("name");
const inputUrl = document.getElementById("url");


function getBookmarks() {
  const bookmarkStr = localStorage.getItem("bookmarks");
  let bookmarks;
  try {
    bookmarks = JSON.parse(bookmarkStr);
    if (Array.isArray(bookmarks) && bookmarks.every(
        bm => bm.name && bm.category && bm.url)) {
      return bookmarks;
    } 
  } catch (e) {}
  return [];
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
};

addBookmarkBtn.addEventListener('click', () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener('click', () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener('click', () => {
  const bookmarks = getBookmarks();
  const newBookmark = { 
    name: inputName.value, 
    category: categoryDropdown.value, 
    url: inputUrl.value 
  };

  bookmarks.push(newBookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  inputName.value = "";
  categoryDropdown.value = "";
  inputUrl.value = "";
  displayOrCloseForm();
});

const displayOrHideCategory = () => {
  mainSection.classList.toggle('hidden');
  bookmarkListSection.classList.toggle('hidden');
};

viewCategoryBtn.addEventListener('click', () => {
  categoryName.innerText = categoryDropdown.value;
  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter(bm => bm.category === categoryDropdown.value)
  if (!filtered.length) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    categoryList.innerHTML = filtered.map(bm => (
      `<div>
         <input type="radio" id="${bm.name}" name="bookmark" value="${bm.name}"></input>
         <label for="${bm.name}">
           <a href="${bm.url}" target="_blank">${bm.name}</a>
         </label>
       </div>`
    ))
    .join("");
  }
  
  displayOrHideCategory();
});

closeListBtn.addEventListener('click', () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
  if (!selectedRadio) {
    alert("Please select a bookmark to delete.");
    return;
  }

  const bookMarkName = selectedRadio.value;
  const selectedCat = categoryDropdown.value;
  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(bm => !(bm.name === bookMarkName && bm.category === selectedCat));
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  categoryList.innerHTML = "";
  const filtered = bookmarks.filter(bm => bm.category === selectedCat)
  if (!filtered.length) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    categoryList.innerHTML = filtered.map(bm => (
      `<div>
         <input type="radio" id="${bm.name}" name="bookmark" value="${bm.name}">
         <label for="${bm.name}">
           <a href="${bm.url}" target="_blank">${bm.name}</a>
         </label>
       </div>`
    ))
    .join("");
  }
});
