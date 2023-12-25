import React from 'react'
import {
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material'
import { useFormik } from 'formik'
import validations from './Validation'
function Register({ register, closeDialog }) {

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      passwordRepeat: ""
    },
    onSubmit: async (values, bag) => {
      try {
        console.log("User registered");
        closeDialog();
      } catch (error) {
        bag.setErrors({ general: error });
      }
    },
    validationSchema: validations
  })
  return (
    <Dialog open={register} onClose={closeDialog} fullWidth maxWidth={"sm"}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Register</Typography>
        </DialogTitle>
        <DialogContent>
          {errors.general && <Uyari mesaj={"This user is already registered"} />}
          <TextField
            error={Boolean(errors.name && touched.name)}
            margin='dense'
            label="Name"
            id='name'
            name='name'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            helperText={errors.name && touched.name && `${errors.name}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.userName && touched.userName)}
            margin='dense'
            label="User Name"
            id='userName'
            name='userName'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
            helperText={errors.userName && touched.userName && `${errors.userName}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.email && touched.email)}
            margin="dense"
            label="E-Mail"
            id="email"
            name='email'
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            helperText={errors.email && touched.email && `${errors.email}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.password && touched.password)}
            margin="dense"
            label="Password"
            id="password"
            name='password'
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            helperText={errors.password && touched.password && `${errors.password}`}
            fullWidth
          />
          <TextField
            error={Boolean(errors.passwordRepeat && touched.passwordRepeat)}
            margin="dense"
            label="Password Confirmation"
            id="passwordRepeat"
            name='passwordRepeat'
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordRepeat}
            helperText={errors.passwordRepeat && touched.passwordRepeat && `${errors.passwordRepeat}`}
            fullWidth
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox disabled checked />} label="I have read and approve the membership agreement." />
          </FormGroup>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button
            className='rounded-full bg-pink-50 w-80 flex justify-center items-center'
          >
            <p className='font-mono text-2xl font-semibold tracking-wider not-italic text-white'>Register</p>
          </button>
        </DialogActions>
      </form>

    </Dialog>
  )
}

export default Register