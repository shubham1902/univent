'use server'

import { SignupFormSchema,LoginFormSchema } from "@/util/schemas/auth";

export async function signup(formData) {
 
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    accountType: formData.get("accountType"),
    collegeName: formData.get("collegeName"),
  });


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }; 
  }

  const { name, email, password, accountType, collegeName } = validatedFields.data
  console.log(validatedFields.data);
  
}

export async function login(formData) {

  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }; 
  }
  
  const {email, password } = validatedFields.data

  console.log(validatedFields.data);
}