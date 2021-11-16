const NAME = 'Diajan'
const ABOUT = `Hi, I'm Mohamad Mahdi Aghajan and 18 years old. I am a Front-end developer\n.
I started to learn 4 years ago, I worked on server-side programming languages such as python, ruby, PHP even I was a back-end developer for short time,\n but I now focused on web development, specially front-end.
I'm working now with ReactJS and NextJS and develop single-page-applications.`
const BG_INDEX = 'img/bg.jpeg'
const BG_ME = 'https://retrina.com/demo/arshia/cv/assets/img/about-03.jpg'
const PAGES = ['/', '/about', '/portfolio', '/resume', '/contact']
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
  { title: 'Birthday', value: '3 December 2003' },
  { title: 'Age', value: '18' },
  { title: 'Phone', value: '+98 938 756 1279' },
  { title: 'Mail', value: 'm.mahdi.aghajan@gmail.com' },
  { title: 'City', value: 'Iran / Esfahan' },
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
    title: 'Safi High school',
    sub: '2019-2020',
    desc: 'Diploma of Education (an year), Mathematics',
  },
  {
    title: 'Nasime Danesh Conservatory',
    sub: '2020-2022',
    desc: 'Diploma of Education, Computer Graphics',
  },
]

const EXPERIENCE = [
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance, Esfahan/Iran',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance, Esfahan/Iran',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance, Esfahan/Iran',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance, Esfahan/Iran',
  },
  {
    title: 'Web Developer',
    sub: '2020-2021',
    desc: 'Freelance, Esfahan/Iran',
  },
]

const SKILLS = [
  { skill: 'html', percent: '90' },
  { skill: 'css', percent: '90' },
  { skill: 'Javascript', percent: '85' },
  { skill: 'Typescript', percent: '70' },
  { skill: 'reactjs', percent: '85' },
  { skill: 'redux', percent: '90' },
  { skill: 'nextjs', percent: '80' },
  { skill: 'css Frameworks', percent: '90' },
  { skill: 'design systems', percent: '85' },
  { skill: 'sass', percent: '90' },
  { skill: 'webpack', percent: '70' },
  { skill: 'git', percent: '70' },
  { skill: 'php', percent: '70' },
  { skill: 'mysql', percent: '50' },
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
  PAGES,
  DOING,
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  SKILLS,
  SOCIAL_MEDIA,
  emailTemplate,
}

// 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&h=750&w=1260'
// 'https://image.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg'
