import React ,{createContext}from 'react'
export const Usercontext = createContext()


const FirstProblem = () => {
    const userName = 'john Doe';
  return (
   <>
    <div>
      <Usercontext.Provider value={userName}>
        <Profile/>
      </Usercontext.Provider>
    </div>
    </>
  )
}

export default FirstProblem
