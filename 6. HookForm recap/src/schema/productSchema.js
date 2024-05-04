import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  quantityPerUnit: yup.string().required("This field is required"),
  supplierId: yup.string().required("This field is required"),
});
