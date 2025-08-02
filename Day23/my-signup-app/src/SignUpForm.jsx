// SignUpForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Max 15 characters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={styles.wrapper}>
      <form onSubmit={formik.handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          style={styles.input}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={styles.error}>{formik.errors.name}</div>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={styles.input}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={styles.error}>{formik.errors.email}</div>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={styles.input}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={styles.error}>{formik.errors.password}</div>
        )}

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: '20px',
    boxSizing: 'border-box',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0077ff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SignUpForm;
