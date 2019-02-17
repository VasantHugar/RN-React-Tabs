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

                const dataList = res["dataList"];
                const temp = [];
                dataList.forEach(element => {
                    element["isFavourite"] = false;
                    temp.push(element);
                });
                completion(temp, null);
            })
            .catch(error => {
                console.log("Response Error (" + url + "): " + error);
                completion(null, error);
            });
    },
}