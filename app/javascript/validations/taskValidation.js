import * as Yup from 'yup';

export const taskValidation = Yup.object({
  name: Yup.string().required('name is Required'),
  description: Yup.string().required('description is Required'),
  estimateTime: Yup.string().required('estimateTime is Required'),
})