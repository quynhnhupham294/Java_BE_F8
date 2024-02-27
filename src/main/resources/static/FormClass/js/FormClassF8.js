class FormClassF8 {


    loadInit = () => {
        this.importJsSuccess();
        this.getDataUserIn4();
    }
    importJsSuccess = () =>{
        console.log("Import Js Class F8 Success");
    };
    createTableListUser = (listUserInformation) =>{
        let tbodyContentString = '';
        listUserInformation.forEach(e=>{
            tbodyContentString += '<tr>'+
                `<th scope="row">${e.userId}</th>`+
                `<td>${e.userName}</td>`+
                `<td>${e.age}</td>`+
                `<td>${e.gmail}</td>`+
                `<td>${e.description}</td>`+
                `</tr>`;
        });
        // Jquery
         let table = new DataTable('#tableListUser', {
            info: false,
            paging: true,
            ordering: false,
            lengthMenu: [
                [4, 5, 6, -1],
                [4, 5, 6, 'All']
            ]
        });
        $('#tbodyTableLisUserContent').html(tbodyContentString);
        const labelElement = document.querySelector('#tableListUser_length');
        labelElement.innerHTML = '';
        table.on('dblclick', 'tbody tr', function (x) {
            let data = table.row(this).data();
            $('#userId').val(data[0]);
            $('#firstName').val(data[1]);
            $('#lastName').val(data[2]);
            $('#major').val(data[3]);
        });
    };
    rowLicked = (x) =>{
        // kiểu dữ liệu Json {key: value}
        // js: const: hằng số
        //      var: có thể ghi đè và 1 lần khai báo
        //      let: trong 1 block
        let userIn4 = {
            userId: x.querySelector('th:nth-child(1)').textContent,
            firstName: x.querySelector('td:nth-child(2)').textContent,
            lastName: x.querySelector('td:nth-child(3)').textContent,
            major: x.querySelector('td:nth-child(4)').textContent
        };
        this.fillFormInformation(userIn4);
    };
    fillFormInformation = (userIn4) => {
        $('#userId').val(userIn4.userId);
        $('#firstName').val(userIn4.firstName);
        $('#lastName').val(userIn4.lastName);
        $('#major').val(userIn4.major);
    }
    btnClearForm_click = () => {
        this.fillFormInformation({userId: '', firstName: '', lastName: '', major: ''})
    }
    btnSave_click = () => {
        var userId = document.getElementById('userId').value;
        var firstName = document.getElementById('firstName').value;
        var userIn4Form = {
            userId: userId,
            firstName: firstName,
            lastName: document.getElementById('lastName').value,
            major: document.getElementById('major').value
        }
        console.log(userIn4Form);
        if(!this.validateDataFormUser(userIn4Form)){
            swal("Cảnh Báo!", "Vui Lòng Nhập Đủ Thông Tin", "warning");
        } else {
            swal("Đã Nhập UserName!", userIn4Form.firstName);
        };

    };

    validateDataFormUser = (userIn4) => {
        // nếu userIn4 != null || != undefined => true
        // ! => nếu userIn4 == null || == undefined => true
        if(userIn4.userId =='' || userIn4.firstName == '' ||
            userIn4.lastName == '' || userIn4.major == ''){
            return false;
        }
        return true;
    }

    // Call Api by Ajax of Jquery
    getDataUserIn4 = () => {
        $.ajax({
            type: 'GET',
            url: '/api/v1/users/getAllUser',
            contentType:'application/json',
            success: function(data) {
                console.log("Call Api /api/v1/users Success");
                this.formatDataFromBEToFE(data);
            }.bind(this),
            error: function(error) {
                console.log("Call Api /api/v1/users Fail");}
        }, {})
    };

    formatDataFromBEToFE = (dataBE) => {
        console.log('function Format Data From BE to FE ');
        //Case1: low level
        /* let listResultAfterFormatDataFromBackEndToFrontEnd = [];
         for(let i = 0 ; i < dataBE.length ; i++){
             let objectConverted = {
                 "userId": dataBE[i].userId,
                 "firstName": dataBE[i].userName,
                 "lastName": 'NULL',
                 "major": dataBE[i].description
             };
             listResultAfterFormatDataFromBackEndToFrontEnd.push(objectConverted);
         };
         */
        //Case2: high level
        let listResultAfterFormatDataFromBackEndToFrontEnd = dataBE.map(function (e){
            return {
                "userId": e.userId,
                "userName": e.userName,
                "age": e.age,
                "gmail": e.gmail,
                "description": e.description
            }
        });
        this.createTableListUser(listResultAfterFormatDataFromBackEndToFrontEnd);
    }
}