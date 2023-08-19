
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useEffect, useState } from 'react';
import { Autocomplete, CircularProgress, createFilterOptions, DialogContentText, IconButton } from '@mui/material';
import { firestore_db } from '../../firebase';
import { Add, Domain, Done } from '@mui/icons-material';
import { addDoc, collection, doc, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import React from 'react';
import { User } from '../../types/user';
import AuthContext from '../../contexts/auth.provider';


const filter = createFilterOptions<UserOptionType>();

export default function NewUser(props: any) {
  const [newUser, setNewUser] = useState<UserOptionType | null>(null);
  const [dialogValue, setDialogValue] = useState({ name: '', id: '', });
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, toggleOpen] = useState(false);
  const [users, setUsers] = useState([])
  const [touched, setTouched] = useState(false)
  const usersRef = collection(firestore_db, 'users')
  const [isEmpty, setIsEmpty] = useState(false)
  const { auth } = useContext(AuthContext)
  const domain = props.domain


  useEffect(() => {
    setUsers(props.nonMembers)
  }, [props])


  const createDbUser = () => {

    if (newUser) {
      setIsLoading(true)

      let user: any = users.filter((u: any) => u.id === newUser.id)[0]
      const userRef = doc(firestore_db, 'users', newUser.id);

      if (user) {

        if (user.name !== newUser.name) {
          console.error('show exists on diffent name error', user)
          setError("Email already exist under")
          setIsLoading(false)
        } else {
          console.warn('User exist update only domains')
          let updates = domain.space === 'role'? {role_id:domain.id} : {teams:[...user.teams, domain.id]}
          console.log('updates',updates)
          updateDoc(userRef,updates).then(x=> {
            setNewUser({
              name: '',
              id: '',
            });
            setIsLoading(false)
          })
        }

      } else {

        const dbUser: User = {
          name: newUser.name,
          email: newUser.id,
          avatar: "",
          role_id: domain.space === 'role' ? domain.id : null,
          teams: domain.space === 'team' ? [domain.id] : [],
          suspendend_date: null,
          contact: null,
          country: null,
          status: 'invited',
          verification_code: Math.floor(Math.random() * 1000000),
          created_date: new Date().getTime() / 1000,
          timestamp: new Date().getTime() / 1000,
          created_by: auth.user.id
        }
       

        console.log('User dont exist create new', dbUser)
        setDoc(userRef, dbUser).then(x=>{
          setIsLoading(false)
          handleClose()
        })

      }
      setTouched(false)
    }

  }

  const handleClose = () => {
    setDialogValue({
      name: '',
      id: '',
    });
    toggleOpen(false);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //set newuser from dialogbox
    setTouched(true)
    setError(null)
    console.log('daalog val', dialogValue)
    setNewUser({
      name: dialogValue.name,
      id: dialogValue.id,

    });
    handleClose();
  };

  return (
    <React.Fragment>

      <Autocomplete
        value={newUser}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
                id: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
              id: '',
            });
          } else {
            setTouched(true)
            setError(null)
            setNewUser(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          setTouched(false)

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
              id: ""
            });

          }

          return filtered;
        }}
        id="users-autocomplete"
        options={users}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField
          error={Boolean(error)}
          {...params}
          variant="standard"
          label="Invite user"
          helperText={error}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isloading &&
                  <IconButton>
                    <CircularProgress color="inherit" size={20} />
                  </IconButton>

                }
                {params.InputProps.endAdornment}
                {(touched && newUser?.id) &&
                  <IconButton onClick={createDbUser}>
                    <Done fontSize="small" />
                  </IconButton>
                }
              </React.Fragment>
            ),
          }}
        />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please register new user
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="Name"
              type="text"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.id}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  id: event.target.value,
                })
              }
              label="Email"
              type="email"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>

    </React.Fragment>
  );
}

interface UserOptionType {
  inputValue?: string;
  name: string;
  id: string;
}

