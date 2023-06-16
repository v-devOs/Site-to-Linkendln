export const headerNavbar: IHeader[] = [
  {
    sectionName: 'Inicio',
    linkPage: '/'
  },
  {
    sectionName: 'Sobre mi',
    linkPage: 'about-me'
  },
  {
    sectionName: 'Habilidades',
    linkPage: 'skills'
  },
  {
    sectionName: 'Proyectos',
    linkPage: 'projects'
  },
]


interface IHeader{
  sectionName: string,
  linkPage: string
}
