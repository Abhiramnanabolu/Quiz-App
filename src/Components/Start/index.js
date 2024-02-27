const Start=(props)=>{

  const onClickStart=()=>{
    const {history} = props
    history.replace('/play')
  }

    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center main-bg">
          <h1 className="font-[Titan One] font-black text-5xl">TechTrivia</h1>
          <p className="font-[Poppins] mt-5 font-semibold text-xl">Elevate Your Tech IQ – Click to Begin the Quiz!</p>
          <button onClick={onClickStart} className="bg-black px-6 mt-10 rounded-lg py-2 text-white font-[Poppins] text-lg">Start !</button>
        </div>
    )
}

export default Start