


export const projects: IProject[] = [
  {
    name: 'WM-Events',
    description: 'Registro y control de asistencia de personas a eventos, el cual hace uso de los recursos de Firebase'
  },
  {
    name: 'Teslo-Shop',
    description: 'E-comerce funcional, con autenticacion mediant JWT o nextAuth'
  },
  {
    name: 'Type of Link',
    description: 'Apliacion de Nodejs que en base a dos tipos de atomos(existentes en la tabla periodica) determina el tipo de enlace que se crea'
  },
  {
    name: 'Pokedex',
    description: 'Creado con EJS, Nodejs, un pokedex 100% funcional el cual incorpora la PokeApi con datos de todos los pokemones actuales'
  },
  {
    name: 'Tecnm-Classroom',
    description: 'Realizado con varios colegas, incorpora el uso de la api de Classroom para administrar cursos(ver,crear,borrar,invitar) de una institucion'
  },
  {
    name: 'Hangman game',
    description: 'Realizado con un colega, juego virtual del famoso juego del ahorcado el cual consume una api de frases random'
  },
]

interface IProject{
  name: string,
  description: string
  link?: string
}