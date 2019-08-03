import ajax from './ajax'
const BASE_URL = '/api'

export const getSchedule = (studentID, password) => ajax(`${BASE_URL}/get_scedule`, {account: studentID, passwd: password}, 'GET')

export const getScore = (studentID, password) => ajax(`${BASE_URL}/get_score`, {account: studentID, passwd: password}, 'GET')
