import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { taskValidation } from '../validations/taskValidation';

const newTask = ({ addTask }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      estimateTime: '',
      resultTime: ''
    },
    validationSchema: taskValidation,
    onSubmit: values => {
      addTask(values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label>Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}
      <label>estimateTime</label>
      <input
        id="estimateTime"
        name="estimateTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.estimateTime}
      />
      {formik.touched.estimateTime && formik.errors.estimateTime ? (
        <div>{formik.errors.estimateTime}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default newTask