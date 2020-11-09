import http from './axios.js'

export default {
    async getJokes() {
        const { data: { value } } = await http.get('jokes')

        return value
    }
}