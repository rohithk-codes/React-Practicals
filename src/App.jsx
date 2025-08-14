
// import React from 'react'

// import ThemSwitcher from './components/ThemeSwitcher'
// import Counter from './components/Counter'
// import { useSelector } from 'react-redux'

// const App = () => {

//   const theme = useSelector((state)=>state.theme.mode)
//   return (
//     <div
//     style={{
      
//         backgroundColor: theme === "light" ? "#fff" : "#222",
//         color: theme === "light" ? "#000" : "#fff",
//         height: "100vh",
//         transition: "all 0.3s",
        
//     }}>

//       <ThemSwitcher/>
//       <Counter/>
   
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Counter from './components/ReduxCounter'
// import Theme from './components/ReduxTheme'
// import { useSelector } from 'react-redux'

// const App = () => {

//   const theme = useSelector((state)=>state.theme.mode)
//   return (
//     <div
//     style={{backgroundColor:theme=="light"?"#fff":"#222",
//       color: theme==="light"?"#000":"#fff"
//     }}
//     >
//       <Counter/>
//       <Theme/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Parent from './practice/Parent'


const App = () => {

  
  return (
    <div>
  <Parent/>
    </div>
  )
}

export default App
