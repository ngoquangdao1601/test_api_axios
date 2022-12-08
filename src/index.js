const baseURL = 'http://localhost:63422';

// login ----------------------------------------------------------------------
var data = JSON.stringify({
    "username": "bphr",
    "password": "1",
});
var config = {
    method: 'post',
    url: `${baseURL}/api/v1/account/login`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: data
};
function call_apiLogin() {
    axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

// Get Data ----------------------------------------------------------------------
var data1 = JSON.stringify({
    "CenterName": "VNVC Hoàng Văn Thụ",
    "CenterCode": "8.1",
    "FromMonth": "2022-09-01",
    "IsFullTime": "True",
});
var config1 = {
    method: 'post',
    url: `${baseURL}/api/v1/timesheet/getdata`,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: data1
};
function get_data() {
    axios(config1)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};