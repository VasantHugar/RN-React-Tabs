export const NetworkHandler = {

    fetchEnquiries(completion) {
        const url = "http://www.mocky.io/v2/5c41920e0f0000543fe7b889";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Enquiries Res: ", res["dataList"]);
                completion(res["dataList"], null);
            })
            .catch(error => {
                console.log("Enquiries Error: ", error);
                completion(null, error);
            });
    },

    fetchStudents(completion) {
        const url = "http://www.mocky.io/v2/5c41950b0f0000543fe7b8a2";

        this.fetch(url, (results, error) => {
            if (results !== null) {

            }
        })

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Students Res: ", res["dataList"]);
                completion(res["dataList"], null);
            })
            .catch(error => {
                console.log("Students Error: ", error);
                completion(null, error);
            });
    },

    fetch(url, completion) {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Response: ", res);
                completion(res, null);
            })
            .catch(error => {
                console.log("Response Error: ", error);
                completion(null, error);
            });
    },
}