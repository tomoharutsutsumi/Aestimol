import React from "react"
import PropTypes from "prop-types"
import { useFormik } from "formik"

const newTask = ({ addTask }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      estimateTime: '',
      resultTime: ''
    },
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
      <label>Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <label>estimateTime</label>
      <input
        id="estimateTime"
        name="estimateTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.estimateTime}
      />
      <label>resultTime</label>
      <input
        id="resultTime"
        name="resultTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.resultTime}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default newTask