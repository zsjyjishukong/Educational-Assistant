import ajax from './ajax'
const BASE_URL = '/api'
// http://127.0.0.1:5000/get_schedule?account=20173400117&passwd=130132wzf&schedule_year=2019-2020&schedule_term=1

export const getSchedule = (year, term) => ajax(`${BASE_URL}/get_schedule`, 'GET')

export const getScore = () => ajax(`${BASE_URL}/get_score`, 'GET')

export const getStudnetInfo = () => ajax(`${BASE_URL}/get_student_info`)
