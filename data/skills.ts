

export const skillsFrontEnd: ISkill[] = [
  {
    name: 'Css',
    image: '/icons/css.svg'
  },
  {
    name: 'Material UI',
    image: '/icons/materialui.svg'
  },
  {
    name: 'TypeScript',
    image: '/icons/typescript.svg' 
  },
  {
    name: 'ReactJs' ,
    image: '/icons/reactjs.svg'
  },
  {
    name: 'NextJs',
    image: '/icons/nextjs.svg' 
  },
]

export const skillsBackEnd: ISkill[] = [
  {
    name: 'NodeJs' ,
    image: '/icons/nodejs.svg'
  },
  {
    name: 'MongoDB' ,
    image: '/icons/mongodb.svg'
  },
  {
    name: 'Firebase',
    image: '/icons/firebase.svg'
  },
  {
    name: 'MySql',
    image: '/icons/mysql.svg'
  },
  {
    name: 'Git',
    image: '/icons/git.svg' 
  },
  {
    name: 'Docker',
    image: '/icons/docker.svg' 
  },
]


export interface ISkill{
  name: string
  image: string
}