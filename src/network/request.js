import axios from 'axios'

const request=axios.create({
	baseURL:'http://152.136.185.210:7878/api/hy66'
})

export default request