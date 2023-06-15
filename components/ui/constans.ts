export const headerNavbar: IHeader[] = [
  {
    sectionName: 'Acerca de mi',
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
