import filesystem from 'fs';
export const createUser = async ({username, email, password}) => {
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
    users.push({username, email, password})
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})
    return users
}

export const getAllUsers = async ()=> {
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
    const justUsers = users.map(({username, email})=>({username, email}))    
    return justUsers
}

export const deleteUser = async ({email}) => {
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json', {encoding: 'utf-8'}))
    users.splice(users.findIndex(user=>user.email === email), 1)
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(users), {encoding: 'utf-8'})
}

