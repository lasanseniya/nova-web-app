import InputBox from "./InputBox"

function RegisterForm() {
    const handleUserRegister = (e)=>{
        e.preventDefault();
    }
    
  return (
    <form onSubmit={handleUserRegister}>

          <div className="mt-6">
            <InputBox id="username" placeholder="Enter username" name="username" type="text"/>
            
            </div>
  
            <div className="mt-6">
            <InputBox id="email" placeholder="Enter email address" name="email" type="email"/>
              
            </div>
  
            <div className="mt-6">
            <InputBox id="pwd" placeholder="Enter password" name="password" type="password"/>
              
            </div>
  
            <div className="mt-6">
            <InputBox id="conf_pwd" placeholder="Enter confirm password" name="confirm" type="password"/>
              
            </div>
            <h3 className="text-[13px] text-right py-5 underline underline-offset-1 cursor-pointer">
          Already have an account?
        </h3>
  
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-gray-100 font-bold py-2 px-4 w-full rounded hover:bg-blue-400"
          >
            SignUp
          </button>
        </div>

          </form>
  )
}

export default RegisterForm