import React from 'react'
import './global.css'

function App() {
  const workspaces = [
    {
      nombre: 'UTN PW',
      logo: 'direccion',
      miembros: [
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        }
      ]
    },
    {
      nombre: 'UTN PW',
      logo: 'direccion',
      miembros: [
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        }
      ]
    },
    {
      nombre: 'UTN PW',
      logo: 'direccion',
      miembros: [
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        }
      ]
    }

  ]
  const workspacesJSXList = workspaces.map((workspace) => {
    return (
      <div>
        <img src={workspace.logo} />
        <h2>{workspace.nombre}</h2>
        <span>{workspace.miembros.length}</span>
      </div>
    )
  }
  )

  
  // let persona = {
  //   nombre: 'Manuel',
  //   edad: 25
  // }
  // function saludarPersona ({nombre, edad}){
    
  //   console.log (`Hola, me llamo ${nombre} y tengo ${edad} años`)
  //   }
    
  //   saludarPersona (persona)
  
  return (
  
    <div className='container'>
      {workspacesJSXList}
      {/* <h1>Hola</h1>  
      <NavBar 
        title={'Indice de marcas'}
        backgroundColor={'yellow'}
        objeto = {
          {
          valor_1 : 'valor 1',
          valor_2 : 'valor 2',
          valor_3 : 'valor 3'
          }
        }
      /> 
      <NavBar backgroundColor={'red'}/> 
      <NavBar backgroundColor={'blue'}/>  */}
    
      <div className='containerTitle'>
        <h2>Your Cards</h2>
        <img className='containerTitleLogo' src="https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-48" />
      </div>
      <CashCard 
        backgroundColor = {'linear-gradient(90deg, rgba(64,153,172,1) 13%, rgba(0,212,255,1) 47%)'}
        saldo = {'25.345,32'}
        logo = {'./src/visa.png'}
        number = {'2006 **** **** 1820'}
        name = {'Manuel Belgrano'}
      />
      <CashCard 
        backgroundColor = {'linear-gradient(90deg, rgba(156,138,13,1) 7%, rgba(182,178,63,1) 58%)'}
        saldo = {'154.342,19'}
        logo = {'./src/master.png'}
        number = {'2505 **** **** 1862'}
        name = {'Juana Azurduy'}
      />
      <CashCard 
        backgroundColor = {'linear-gradient(90deg, rgba(65,64,64,1) 22%, rgba(136,136,127,1) 88%)'}
        saldo = {'73.873,45'}
        logo = {'./src/master.png'}
        number = {'1707 **** **** 1850'}
        name = {'Jose San Martin'}
      />
    </div>
  )
}


// const NavBar = (props) => {
//   console.log(props) 
//   return (
//     <header 
//   className='navbar'
//     >
      
//       <h2>{props.title}</h2>
//       <nav className='nav'>
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a>
//       </nav>
//     </header>    
//   )
// }
/* 
Las props son objetos que recibe el componente, TODOS los componentes reciben a props
*/
const CashCard = ({backgroundColor, saldo, logo, number, name}) => {
  return (
    <div className='card' style={{background: backgroundColor}}>
      <div className='topCard'>
        <div className='topCardSaldo'>
            <span>${saldo}</span>
        </div>
        <div > 
          <img className='topCardLogo' src={logo}/>
        </div>
      </div>
      <div className='bottomCard'>
        <div className='bottomCardInfo'>
          <div className='bottomCardInfoNumber'>
            <span>{number}</span>
          </div>
          <div className='bottomCardInfoName'>
            <span>{name}</span>
          </div>
        </div>
        <div>
          <button className='bottomCardButtton'><i class="bi bi-three-dots-vertical"></i></button>
        </div>
      </div>
    </div>
  )
}
export default App
