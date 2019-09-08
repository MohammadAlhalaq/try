// edit posts
const editButtonForPost = document.querySelector('.edit');
const postEdit = document.querySelector('.editpost');

// addcategory and addpost
const addcategorybutton = document.querySelector('.addcategorybutton');
const addpostbutton = document.querySelector('.addpostbutton');

const addcategory = document.querySelector('.addcategory');
const addpost = document.querySelector('.addpost');


editButtonForPost.addEventListener('mouseup', () => {
  postEdit.classList.toggle('hidden');
  editButtonForPost.value = editButtonForPost.value === 'hide' ? 'edit' : 'hide';
});

addcategorybutton.addEventListener('mouseup', () => {
  addcategory.classList.toggle('hidden');
  addcategorybutton.value = addcategorybutton.value === 'add category' ? 'hide' : 'add category';
});

addpostbutton.addEventListener('mouseup', () => {
  addpost.classList.toggle('hidden');
  addpostbutton.value = addpostbutton.value === 'add post' ? 'hide' : 'add post';
});
