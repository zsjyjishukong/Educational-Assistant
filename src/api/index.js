import ajax from './ajax'
const BASE_URL = '/api'
// http://127.0.0.1:5000/get_schedule?account=20173400117&passwd=130132wzf&schedule_year=2019-2020&schedule_term=1

export const getSchedule = (studentID, password, scheduleYear, scheduleTerm) => ajax(`${BASE_URL}/get_schedule`, {account: studentID, passwd: password, schedule_year: scheduleYear, schedule_term: scheduleTerm}, 'GET')

export const getScore = (studentID, password) => ajax(`${BASE_URL}/get_score`, {account: studentID, passwd: password}, 'GET')
