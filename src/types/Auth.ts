export interface Auth {
   user: user,
   token: string
}

interface user {
   id: string,
   avatar: string,
   name: string,
   roleId: string,
   country: string
}