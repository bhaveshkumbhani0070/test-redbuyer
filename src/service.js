import axios from 'axios';

const HOST = 'https://run.mocky.io/v3'; // Replace with your API base URL


export function put_api(end_point, data, cb) {
    let url = `${HOST}/${end_point}`;
    axios
        .put(url, data)
        .then(function (res) {
            cb(res);
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                window.x = "e40";
            }
            cb(error);
        });
}

export function delete_api(end_point, data, cb) {
    let url = `${HOST}/${end_point}`;
    axios
        .delete(url, data)
        .then(function (res) {
            cb(res);
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                window.x = "e40";
            }
            cb(error);
        });
}

export function post_api(end_point, data, cb) {
    let url = `${HOST}/${end_point}`;
    axios
        .post(url, data)
        .then(function (res) {
            cb(res);
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                window.x = "e40";
            }
            cb(error.response.data);
        });
}
export function get_api(end_point, cb) {
    let url = `${HOST}/${end_point}`;
    axios
        .get(url)
        .then(function (res) {
            cb(res);
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                window.x = "e40";
            }
            cb(error);
        });
}

