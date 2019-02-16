import { URL } from './Constants';

export const NetworkHandler = {

    fetchEnquiries(completion) {
        this.fetch(URL.enquiries, completion);
    },

    fetchStudents(completion) {
        this.fetch(URL.students, completion)
    },

    fetch(url, completion) {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Response(" + url + "): ");
                console.log(res);
                completion(res["dataList"], null);
            })
            .catch(error => {
                console.log("Response Error (" + url + "): " + error);
                completion(null, error);
            });
    },
}