import React from 'react'
import {
    Dialog, 
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from '@mui/material'
import { useFormik } from 'formik'
import validations from './Validation'
function Login({ login, closeDialog }) {
    const { handleSubmit, handleChange, values, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values, bag) => {
            try {
                console.log("User logged in");
                closeDialog();
            } catch (error) {
                bag.setErrors({ general: error.response.data.mesaj });
            }
        },
        validationSchema: validations
    })
    return (
        <Dialog open={login} onClose={closeDialog} fullWidth maxWidth={"sm"}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Login</Typography>
                </DialogTitle>
                <DialogContent>
                    {errors.general && <Uyari mesaj={errors.general} />}
                    <TextField
                        error={Boolean(errors.email && touched.email)}
                        margin="dense"
                        label="Email"
                        id="email"
                        name="email"
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
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                        className='rounded-full bg-pink-50 w-80 flex justify-center items-center'
                    >
                        <p className='font-mono text-2xl font-semibold tracking-wider not-italic text-white'>Entry</p>
                    </button>
                </DialogActions>
            </form>
        </Dialog>


    )
}

export default Login