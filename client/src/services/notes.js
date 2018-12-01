import axios from 'axios';

const apiUrl = '/api/notes';

export function getAll() {
    return axios.get(apiUrl).then(response => response.data.notes);
}

export function create(note) {
    return axios.post(apiUrl, note).then(response => response.data);
}

export function remove(id) {
    const url = `${apiUrl}/${id}`;
    return axios.delete(url).then(response => response.data);
}

export function update(id, updates) {
    const url = `${apiUrl}/${id}`;
    return axios.put(url, updates).then(response => response.data);
}