import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

export const UserStore = create((set, get) => ({
  Users: [],
  UserCount: 0,
  InitUser: (list) => {
    let { Users } = get();

    let newUsers = [...Users, ...list];

    set({ Users: newUsers, UserCount: newUsers.length });
  },
  addToUsers: (newuser) => {
    let { Users } = get();

    let data={
      "id":parseInt(Users.length+1) ,
      "email": newuser.email,
      "first_name":newuser.fname,
      "last_name": newuser.lname,
      "avatar":newuser.image
    }

    Users.push(data);

    set({ Users: Users, UserCount: Users.length });
  },
  removeFromUser: (id) => {
    let { Users } = get();
    let newusers = Users.filter((i) => i.id != id);
    set({ Users: newusers, UserCount: Users.length });
  },
  findandUpdate:(data)=>{
    const {id}=data
    let { Users } = get();
    let index= Users.findIndex(x => Users.id ==id)
    if (index !== -1) {
      Users[index] = data;
  }
  set({ Users: Users, UserCount: Users.length })
  },
  resetUsers: () => {
    set({ Users: [], UserCount: 0 });
  },
}));
