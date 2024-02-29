import { useParams } from "react-router";
import { UserStore } from "../store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
function EditScreen() {
  const nav=useNavigate()
const {findandUpdate}=UserStore()
  const {
    handleSubmit,
    register,
    formState:{errors}
  }=useForm()

  const { id } = useParams();
  const {Users}=UserStore()
  let newuser= Users.filter(i=>i.id==id)


const FinalSubmit=(data)=>{
  let newdata={
    ...data,
    id:newuser[0].id
  }
  findandUpdate(newdata)
  nav('/')
}
  return (
    <>
    {
      newuser.map(item=>(<>
      
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="join join-vertical">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">first name</span>
            </div>
            <input
            {...register('first_name')}
            defaultValue={item.first_name}
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
            {...register('last_name')}
            defaultValue={item.last_name}
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
            defaultValue={item.email}
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
            {...register('avatar')}
            defaultValue={item.avatar}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button  className="btn  btn-primary"
          onClick={handleSubmit(FinalSubmit)}
          
          >UPDATE</button>
        </div>
      </div>
      
      </>))
    }
      
    </>
  );
}

export default EditScreen;
