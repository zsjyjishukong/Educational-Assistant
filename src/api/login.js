import ajax from './ajax'
const BASE_URL = '/api'

export const login = (studentID, password) => ajax(`${BASE_URL}/login`, {studentID, password}, 'POST')
