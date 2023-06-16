export const headerNavbar: ILink[] = [
  {
    sectionName: 'Inicio',
    linkPage: '/'
  },
  {
    sectionName: 'Sobre mi',
    linkPage: '/about-me'
  },
  {
    sectionName: 'Proyectos',
    linkPage: '/projects'
  },
  {
    sectionName: 'Contacto',
    linkPage: '/contact-me'
  },
]


export interface ILink{
  sectionName: string,
  linkPage: string
}
