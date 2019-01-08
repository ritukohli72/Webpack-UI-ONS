import '../style/style.css';

fetch(`http://ec2-18-233-155-56.compute-1.amazonaws.com:5500/fetchCustomer/7`)
    .then(res => res.json())
    .then(function (record) {
        console.log("processing ----------- ");
        console.log("recvd data --- ");
        console.log(record)

        let customerRecord = record.data;
        document.getElementById('CUCUID').innerHTML = customerRecord[0].CUCUID;
        document.getElementById('CUSTSID').innerHTML = customerRecord[0].CUSTSID;
        document.getElementById('CUREG').innerHTML = customerRecord[0].CUREG;
        document.getElementById('CUNAME').innerHTML = customerRecord[0].CUNAME;
        document.getElementById('CUCTID').innerHTML = customerRecord[0].CUCTID;
        document.getElementById('CUINID').innerHTML = customerRecord[0].CUINID;
        document.getElementById('CUFNAM').innerHTML = customerRecord[0].CUFNAM;
        document.getElementById('CUCUR').innerHTML = customerRecord[0].CUCUR;
        document.getElementById('CUCNID').innerHTML = customerRecord[0].CUCNID;

    })
    .catch(err => console.log('Error', err))







    