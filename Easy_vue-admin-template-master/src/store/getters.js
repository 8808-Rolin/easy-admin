const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  aid: state => state.user.aid,
  studentID: state => state.user.studentID,
}
export default getters
