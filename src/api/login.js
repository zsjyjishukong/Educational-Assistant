import ajax from './ajax'
const BASE_URL = '/api'

export const login = (studentID, password) => ajax(`${BASE_URL}/login`, {studentID, password}, 'POST')

export const isBind = () => ajax(`${BASE_URL}/user_login`)

export const bind = (account, password) => ajax(`${BASE_URL}/user_binding`, {account, password}, 'POST')
