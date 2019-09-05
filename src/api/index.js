import ajax from './ajax'
const BASE_URL = '/api'
// http://127.0.0.1:5000/get_schedule?account=20173400117&passwd=130132wzf&schedule_year=2019-2020&schedule_term=1

export default {
  async getSchedule (year, term) {
    return ajax(`${BASE_URL}/get_schedule`, {year, term}, 'GET')
  },
  async getScore () {
    return ajax(`${BASE_URL}/get_score`)
  },
  async getStudentInfo () {
    return ajax(`${BASE_URL}/get_student_info`)
  },
  async unbind () {
    return ajax(`${BASE_URL}/user_untying`)
  }
}
