import supabase from './supabase'

export const authUser = async (email, password) => {
    const { data, error } = await supabase.from('users').select("*").match({ email: email, password: password })
    if (error || data.length === 0) {
        return { error }
    }
    return {
        email: data[0].email,
        name: data[0].name,
        id: data[0].id,
        points: data[0].points,
    }
}

export const signUpUser = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if (error) {
        return { error }
    }
    return { user }
}

export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        return { error }
    }
    return { success: true }
}

export const resetPassword = async (email) => { }

export const updatePassword = async (password) => { }

export const updateEmail = async (email) => { }

export const updateProfile = async (profile) => { }

export const deleteAccount = async () => { }

export const getUser = async () => {
    const user = supabase.auth.user()
    return user
}