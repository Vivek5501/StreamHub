export const checkValidate=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is Not Valid";
    if(!isPasswordValid) return "Password is Not Valid";

    return null;
}