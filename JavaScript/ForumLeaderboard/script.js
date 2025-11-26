const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const postsContainer = document.getElementById("posts-container");

function timeAgo(isoTimeStamp) {
  const now = new Date();
  const then = new Date(isoTimeStamp);
  const diffMs = now - then;

  const diffMins = Math.floor(diffMs / (1000 * 60));
  if (diffMins < 60) {
    return `${diffMins}m ago`;
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return `${diffDays}d ago`;
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

function forumCategory(id) {
  let catObj = allCategories[id];
  let category, className;

  if (catObj) {
    category = catObj.category;
    className = catObj.className;
  } else {
    category = "General";
    className = "general";
  }
  
  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
}

function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find(u => u.id === poster.user_id);
    if (!user) return "";

    let src = user.avatar_template.replace("{size}", "30");
    if (src.startsWith('/')) {
      src = `${avatarUrl}${src}`;
    }

    const altText = user.name ? user.name : user.username;

    return `<img alt="${altText}" src="${src}">`;
  }).join('');
}

function showLatestPosts(postObj) {
  const { users, topic_list } = postObj;
  const topics = topic_list.topics;
  const rows = topics.map(topic => {
    const titleLink = `<a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>`;
    const categoryLink = forumCategory(topic.category_id);
    const td1 = `<td>${titleLink}${categoryLink}</td>`;
    const avatarsHtml = avatars(topic.posters, users);
    const td2 = `<td><div class="avatar-container">${avatarsHtml}</div></td>`
    const td3 = `<td>${topic.posts_count - 1}</td>`;
    const td4 = `<td>${viewCount(topic.views)}</td>`;
    const td5 = `<td>${timeAgo(topic.bumped_at)}</td>`;
    return `<tr>${td1}${td2}${td3}${td4}${td5}</tr>`;
  }).join('');
  postsContainer.innerHTML = rows;
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
console.log(forumCategory(299))
