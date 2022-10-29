const openNav = document.querySelector('.openbtn');
const closeNav = document.querySelector('.closebtn');
const mobileLinks = document.querySelectorAll('.mobile-nav');
const speakers = document.querySelector('#featured-speakers');
const showMoreButton = document.querySelector('.show-more');
const width = window.innerWidth;
const isDesktop = width > 768;
let isShowMore = false;

openNav.addEventListener('click', () => {
  document.getElementById('menu-list').style.width = '250px';
});
closeNav.addEventListener('click', () => {
  document.getElementById('menu-list').style.width = '0';
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    document.getElementById('menu-list').style.width = '0';
  });
});

const data = [
  {
    id: 0,
    name: 'Yui Miles',
    post: 'chef in the Thai Royal kitchen',
    details:
      'She is currently working with one of the UK’s leading Supermarkets developing recipes for their website and magazine and is one of only one hundred hand-picked influencers in the UK for Sainsbury’s Tastemakers campaign.',
    featuredImage: './images/chef_01.png',
  },
  {
    id: 1,
    name: 'Raphael Duntoye',
    post: 'chef-patron for La Petite Maison',
    details:
      'He was previously Chef patron of the global restaurant, La Petite Maison and chief director at The Arts Club on Dover Street. He changed career in 1995, from engineer to cook, joining Butlers Wharf Chef School.',
    featuredImage: './images/chef_02.png',
  },
  {
    id: 2,
    name: 'Debora Pangni',
    post: 'consultant at the Yarani vocational school',
    details:
      'Debora Pangni is the winner of the maiden edition of the GTCO Chef Masters competition. She holds a diploma as a professional kitchen Technician and a Bachelor’s degree in Hospitality Management',
    featuredImage: './images/chef_03.png',
  },
  {
    id: 3,
    name: 'Aldo Zilli',
    post: 'Founder of Signor Zilli, Zilli Green, Zilli Café and Zilli Bar',
    details:
      'Aldo Zilli is an award-winning celebrity chef and restaurateur who specialises in Italian, vegetarian, and seafood cuisine. He has authored many books and serves as consultant.',
    featuredImage: './images/chef_04.png',
  },
  {
    id: 4,
    name: 'Femi Oyediran and Miles White',
    post: 'Co-owners Graft Wine Shop, Charleston',
    details:
      'Determined to put their mark on Charleston’s wine scene, they opened Graft in 2018, which became a local favorite for buying and sampling wines with an emphasis on biodynamic farming and sustainable practices.',
    featuredImage: './images/chef_05.png',
  },
  {
    id: 5,
    name: 'Daryl Shular',
    post: 'Member of the American Culinary Federation since 1993',
    details:
      'He often tells his listeners “that while the ACF CMC exam is the most challenging culinary skills test in the world, it’s something I’ve pursued my entire career. It simply shows that if you are determined and believe in yourself, dreams can and will come true.',
    featuredImage: './images/chef_06.png',
  },
];

const loadSpeakers = (item) => {
  let display = ' ';
  const data = isDesktop || isShowMore ? item : !isDesktop && item.slice(0, 2);
  data.forEach(({
    name, featuredImage, post, details,
  }) => {
    display += `
      
    
        <div class="speaker-info">
            <img src=${featuredImage} alt="Chef"/>

        <ul class="speaker">
            <li><a><h3>${name}</h3> </a></li>
            <li><p class="speaker-post"> ${post}</li>
            <hr>
            <li><p>${details}</p></li>
        </ul>
        </div>`;
  });
  speakers.innerHTML = display;
};
// loadSpeakers(data);
window.addEventListener('DOMContentLoaded', () => {
  loadSpeakers(data);
});

showMoreButton.addEventListener('click', () => {
  isShowMore = !isShowMore;
  loadSpeakers(data);
  if (isShowMore) {
    showMoreButton.innerHTML = 'show less';
  } else {
    showMoreButton.innerHTML = 'show more';
  }
});
