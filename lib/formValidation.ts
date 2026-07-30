import * as yup from "yup";
import { parsePhoneNumberWithError } from "libphonenumber-js";

// ✅ Use local API route instead of direct backend URL
export const url = "/api/contact"; // Changed from direct URL to local API route

export const formSchema = yup.object({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^(?:\+91[\s-]?|91[\s-]?)?[6-9]\d{9}$/, "Invalid Indian phone number")
    .required("Phone number is required"),
});

export function toE164(phone: string) {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, "IN");

    if (!phoneNumber.isValid()) {
      throw new Error("Invalid phone number");
    }

    return phoneNumber.number;
  } catch (err) {
    return null;
  }
}