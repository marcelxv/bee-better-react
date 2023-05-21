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

export const updatePoints = async (id, points) => {
    console.log('id', id)
    console.log('points', points)
    const { data, error } = await supabase.from('users').update({ points: points }).match({ id: id })
    if (error) {
        return { error }
    }
    console.log('updated data', data)
    return { data }
}

export const createCollect = async (collect) => {
    console.log('collect', collect)
    const { data, error } = await supabase.from('collects').insert({ ...collect })
    if (error) {
        return { error }
    }
    console.log('updated data', data)
    return { data }
}