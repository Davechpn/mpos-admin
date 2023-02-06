import { Contact } from "../types/contact"
import { User } from "../types/user"

const usersData = [
    {
        id:1,
        name: "David",
        position: "Software Developer",
        cell_no: "077 059 9931"
    },
    {
        id:2,
        name: "Rothfuss",
        position: "Grapics Designer",
        cell_no: "078 344 3444"
    },
    {
        id:3,
        name: "Annatori",
        position: "Accountant",
        cell_no: "077 454 9288"
    }

]

export default usersData

const contact:Contact = {
    name:"",
    address:"24 dawnhill ",
    city:"Harare",
    email:"chipundodavid@gmail.com",
    cell:"0778667887",
    tell:"024-67887",
    country:"",
}

export const users:User[] = [{
    id:"1",
    name: "David",
    email: "chipundodavid@gmail.com",
    avatar:"",
    role:"2",
    teams:["1","2"],
    suspendend_date: 2,
    contact:contact,
    country:"Zimbabwe",
    status:"Active",
    verification_code:1,
    created_date:0,
    created_by:"david"
},
{
    id:"2",
    name: "Rothfuss",
    email: "rothfuss@gmail.com",
    avatar:"",
    role:"2",
    teams:["1","2"],
    suspendend_date: 2,
    contact:contact,
    country:"Namibia",
    status:"Invited",
    verification_code:1,
    created_date:0,
    created_by:"david"
},
{
    id:"3",
    name: "Annatori",
    email: "annatori@gmail.com",
    avatar:"",
    role:"3",
    teams:["1","2"],
    suspendend_date: 2,
    contact:contact,
    country:"Zambia",
    status:"Invited",
    verification_code:1,
    created_date:0,
    created_by:"david"
}
]
