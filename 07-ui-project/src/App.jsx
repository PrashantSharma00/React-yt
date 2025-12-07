import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Ea dolore occaecat cupidatat nostrud commodo officia quis veniam nisi consequat labore commodo duis. Amet aliquip nostrud eu irure pariatur culpa proident irure laborum labore consequat.  ',
      tag:'Satisfied',
      color:'blue'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Eiusmod ea irure commodo in id est anim nostrud nostrud. Amet magna minim in in nisi nisi proident id aute dolor occaecat dolore consectetur laborum. Minim qui consequat ullamco pariatur labore ea esse. Quis do tempor esse labore minim ea do quis ea amet ad laboris Lorem cillum.',
      tag:'underserved',
      color:'black'
    },
    {
      img:'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Quis anim minim tempor dolore. Id irure dolor duis labore commodo fugiat sunt. Qui in mollit voluptate do et magna mollit dolore. Consectetur est aliqua non laborum non occaecat exercitation proident adipisicing.',
      tag:'underbanked',
      color:'gray'

    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App