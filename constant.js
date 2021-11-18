const NAME = 'Diajan'

const ABOUT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const BG_INDEX = 'img/bg.jpeg'

const BG_ME = 'https://retrina.com/demo/arshia/cv/assets/img/about-03.jpg'

const MENU = [
  { title: 'Home', path: '/', icon: 'fa-home' },
  { title: 'About Me', path: '/about', icon: 'fa-user' },
  { title: 'Resume', path: '/resume', icon: 'fa-file-invoice' },
  { title: 'Portfolio', path: '/portfolio', icon: 'fa-briefcase' },
  { title: 'Contact', path: '/contact', icon: 'fa-paper-plane' },
]

const SOCIAL_MEDIA = [
  {
    title: 'linkedin',
    icon: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/diajan/',
  },
  { title: 'github', icon: 'fa-github', link: 'https://github.com/diajan' },
  { title: 'twitter', icon: 'fa-twitter', link: '#' },
]

const PERSON = [
  { title: 'Birthday', value: '1 july 1990' },
  { title: 'Age', value: '31' },
  { title: 'Phone', value: '+123456789' },
  { title: 'Mail', value: 'info@gmail.com' },
  { title: 'City', value: 'Iran' },
  { title: 'Status', value: 'Available' },
]

const DOING = [
  {
    title: 'SPA Development',
    icon: 'fa-check-circle',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
  {
    title: 'Responsive Design',
    icon: 'fa-mobile-alt',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
  {
    title: 'UI-Kt to app',
    icon: 'fa-paint-brush',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
  {
    title: 'Continuous learning',
    icon: 'fa-graduation-cap',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
  {
    title: 'working with css frameworks',
    icon: 'fa-cube',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
  {
    title: 'support',
    icon: 'fa-users',
    sub: `In a professional context it often happens that private clients corder
  a publication to be made`,
  },
]

const EDUCATION = [
  {
    title: 'Lorem ipsum is placeholder text',
    sub: '2019-2020',
    desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
  },
  {
    title: 'Lorem ipsum is placeholder text',
    sub: '2020-2022',
    desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
  },
]

const EXPERIENCE = [
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance',
  },
]

const SKILLS = [
  { skill: 'html', percent: '90' },
  { skill: 'css', percent: '90' },
  { skill: 'Javascript', percent: '85' },
  { skill: 'Typescript', percent: '70' },
  { skill: 'reactjs', percent: '85' },
  { skill: 'redux', percent: '90' },
]

const PORTFOLIOS = [
  {
    title: 'lorem ipsum',
    img: 'img/bg.jpeg',
    repo: '',
    link: '',
    keyword: 'lorem',
  },
  {
    title: 'test',
    img: 'img/bg.jpeg',
    repo: '',
    link: '',
    keyword: 'test',
  },
  {
    title: 'lorem ipsum',
    img: 'img/bg.jpeg',
    repo: '',
    link: '',
    keyword: 'lorem',
  },
  {
    title: 'test',
    img: 'img/bg.jpeg',
    repo: '',
    link: '',
    keyword: 'test',
  },
]

function emailTemplate(name, email, subject, message) {
  return `
  <div style='padding: 2rem 1rem;margin-bottom: 2rem;background-color: #e9ecef;border-radius: 0.3rem;'>
    <h1
      style='background-color: #41d0cf;
      background-image: linear-gradient(43deg, #41d0cf 0%, #5092c8 46%, #ff70c3 100%);
      ;color:#f3f3f3;border-radius: 10px ; text-align: center ; padding: 30px'
    >
      ✨ New Message (: ✨
    </h1>
    <h2 style='font-weight: 700; margin-bottom:10px;'>${subject}</h2/>
    <br/>
    <p style='font-weight: 700;color: #9b219b; text-align: center; '>
      ${message}😉
    </p>
    <p style='font-weight: 600;'>From: ${name}; ${email}</p>
  </div>`
}

module.exports = {
  BG_ME,
  BG_INDEX,
  NAME,
  PERSON,
  DOING,
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  SKILLS,
  SOCIAL_MEDIA,
  PORTFOLIOS,
  MENU,
  emailTemplate,
}
