import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormilContainer = () => {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is Required'),
  });
  const onSubmit = (values) => console.log('Form data', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}

    </Formik>
  );
};

export default FormilContainer;

// import React from 'react';
// import { useFormik } from 'formik'; // Use useFormik hook instead of Formik component
// import * as Yup from 'yup';
// import FormikControl from './FormikControl';

// const FormilContainer = () => {
//   const initialValues = {
//     email: '',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().required('Email is Required'),
//   });

//   const onSubmit = (values) => console.log('Form data', values);

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <FormikControl control="input" type="email" label="Email" name="email" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormilContainer;
