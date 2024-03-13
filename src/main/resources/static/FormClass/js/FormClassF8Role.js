class FormClassF8 {


    loadInitRole = () => {
        this.importJsSuccess();
        this.getDataUserIn4();
    }
    importJsSuccess = () =>{
        console.log("Import Js Class F8 Success");
    };
    createTableListRole = (listUserInformation) =>{
        let tbodyContentString = '';
        listUserInformation.forEach(e=>{
            tbodyContentString += '<tr>'+
                `<th scope="row">${e.role_id}</th>`+
                `<td>${e.role_name}</td>`+
                `<td>${e.description}</td>`+
                `</tr>`;
        });
        // Jquery
        $('#tbodyTableLisUserContent').html(tbodyContentString);
        let table = new DataTable('#tableListUser', {
            info: false,
            paging: true,
            ordering: false,
            lengthMenu: [
                [4, 5, 6, -1],
                [4, 5, 6, 'All']
            ]
        });
        const labelElement = document.querySelector('#tableListUser_length');
        labelElement.innerHTML = '';
        table.on('dblclick', 'tbody tr', function (x) {
            let data = table.row(this).data();
            $('#role_id').val(data[0]);
            $('#role_name').val(data[1]);
            $('#description').val(data[2]);
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
            url: '/api/v2/role/getAllRole',
            contentType:'application/json',
            success: function(data) {
                console.log("Call Api /api/v1/role Success");
                this.formatDataFromBEToFE(data);
            }.bind(this),
            error: function(error) {
                console.log("Call Api /api/v1/role Fail");}
        }, {})
    };

//     **************************
    formatDataFromBEToFE = (dataBE) => {
        console.log('function Format Data From BE to FE ');
        let listResultAfterFormatDataFromBackEndToFrontEnd = dataBE.map(function (e){
            return {
                "role_id": e.role_id,
                "role_name": e.role_name,
                "description": e.description
            }
        });
        this.createTableListRole(listResultAfterFormatDataFromBackEndToFrontEnd);
    }
}