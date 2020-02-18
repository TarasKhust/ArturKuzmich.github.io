import { api } from './api.js'
import { renderOptionList, renderData, select } from './render'

api().then((response) => {
    renderOptionList(response)
})

const onChange = (e) => {
    const source = e.target.value;
    const URL = `http://newsapi.org/v2/everything?domains=wsj.com${source}&apikey=036cbd4c44034cfcbb1a7a96dcb760ba`
    api(URL).then((response) => {
        renderData(response)
    })
}


select.addEventListener('change', onChange)
