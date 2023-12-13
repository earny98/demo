"use server";
export async function formSubmission(prevState:any, data:FormData) {
    const email = data.get('email');
    const name = data.get('name');
    console.log(name,email);
    return {
        error: "example error"
    }
}
