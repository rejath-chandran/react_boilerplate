import { useForm } from "react-hook-form"
import { UserStore } from "../store"
import { useNavigate } from "react-router"


function CreateScreen() {
  const nav=useNavigate()
const {addToUsers}=UserStore()
const {
  handleSubmit,
  register,
  formState:{errors}
}=useForm()


const FinalSubmit=(data)=>{
console.log(data)
addToUsers(data)
nav("/")
}


  return(<>
  <div className="w-screen h-screen flex items-center justify-center">
        <div className="join join-vertical">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">first name</span>
            </div>
            <input
            {...register('fname')}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">last name</span>
            </div>
            <input
                        {...register('lname')}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">email</span>
            </div>
            <input
                        {...register('email')}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">image</span>
            </div>
            <input
                        {...register('image')}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button  className="btn  btn-primary" onClick={handleSubmit(FinalSubmit)}>CREATE</button>
        </div>
  </div>
  
  
  </>);
}

export default CreateScreen;
