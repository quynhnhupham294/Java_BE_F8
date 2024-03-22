class FormClassF8 {

    listUserIn4 = [];

    loadInit = async () => {
        await this.getDataUserIn4();
        this.createTableListUser(this.listUserIn4);
        await this.createComponentSelectRole();
    }

    createTableListUser = (listUserInformation) => {
        let tbodyContentString = '';
        listUserInformation.forEach(e => {
            tbodyContentString += '<tr>' +
                `<th scope="row">${e.userId}</th>` +
                `<td>${e.userName}</td>` +
                `<td>${e.age}</td>` +
                `<td>${e.gmail}</td>` +
                `<td>${e.roleName}</td>` +
                `<td>${e.description}</td>` +
                `</tr>`;
        });
        // Jquery
        // if ($.fn.DataTable.isDataTable(#tableListUser)){
        //     $('#tableListUser').DataTable().destroy();
        // }

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
            $('#userId').val(data[0]);
            $('#userName').val(data[1]);
            $('#age').val(data[2]);
            $('#gmail').val(data[3]);
            $('#role_name').val(data[4])
            $('#description').val(data[5]);
        });
    };

    rowLicked = (x) => {
        // kiểu dữ liệu Json {key: value}
        // js: const: hằng số
        //      var: có thể ghi đè và 1 lần khai báo
        //      let: trong 1 block
        let userIn4 = {
            userId: x.querySelector('th:nth-child(1)').textContent,
            userName: x.querySelector('td:nth-child(2)').textContent,
            age: x.querySelector('td:nth-child(3)').textContent,
            gmail: x.querySelector('td:nth-child(4)').textContent,
            role_id: x.querySelector('td:nth-child(5)').textContent,
            description: x.querySelector('td:nth-child(6)').textContent
        };
        this.fillFormInformation(userIn4);
    };

    fillFormInformation = (userIn4) => {
        $('#userId').val(userIn4.userId);
        $('#userName').val(userIn4.userName);
        $('#age').val(userIn4.age);
        $('#gmail').val(userIn4.gmail);
        $('#role_id').val(userIn4.role_id);
        $('#description').val(userIn4.description);
    }

    btnClearForm_click = () => {
        this.fillFormInformation({userId: '', userName: '', age: '', gmail: '', description: ''})
    }

    // btnDelete_click = () => {}
    btnDelete_click = async () => {
        // tao form chua data
        let dataDeleteForm = {
            userId: $('#userId').val(),
            userName: $('#userName').val(),
            age: $('#age').val(),
            gmail: $('#gmail').val(),
            description: $('#description').val()
        }
        // KT dữ
        let result = this.validateDataFormUser(dataDeleteForm);

        if (!result) {
            swal({
                text: result,
                icon: "warning"
            })
        } else{
            // Call Api delete DL
            const {data:response} = await axios.delete("http://localhost:8888/api/v1/users/deleteUser", {data:dataDeleteForm});
            // {data:dataDeleteForm}:
            console.log(response)
            if(response.status){
                // Load lại DL nếu xóa thành công
                var table = new DataTable('#tableListUser');
                table.destroy();
                await this.loadInit();
                swal({
                    text: response.message,
                    icon: "success"
                });
            } else {
                swal({
                    text: response.message,
                    icon: "warning"
                });
            }
        }
    };

    btnSave_click = async () => {
        let dataForm = {
            userId: $('#userId').val(),
            userName: $('#userName').val(),
            age: $('#age').val(),
            gmail: $('#gmail').val(),
            role_name: $('#role_name').val(),
            description: $('#description').val()

        }
        console.log(dataForm);

        // check tính hợp lệ
        let validateResult = this.validateDataFormUser(dataForm);

        if (!validateResult) {
            swal({
                text: validateResult,
                icon: "warning"
            })
        } else {
            // call API
            const {data: response} = await axios.post("http://localhost:8888/api/v1/users/postUser", dataForm);
            console.log(response)
            if (response.status) {
                var table = new DataTable('#tableListUser');
                table.destroy(); // xóa trắng form
                await this.loadInit();
                swal({
                    text: response.message,
                    icon: "success"
                });
            } else {
                swal({
                    text: response.message,
                    icon: "warning"
                });
            }
            //
        }
    };
    // if (!validateDataFormUser.status){
    //     swal("Cảnh Báo!", "Vui Lòng Nhập Đủ Thông Tin", "warning");
    // }
    // else {
    //     swal("Success");
    //     let {data: response} = await axios.post('/api/v1/users/postAllUser',dataForm);
    // }

    // var userId = document.getElementById('userId').value;
    // var firstName = document.getElementById('firstName').value;
    // var userIn4Form = {
    //     userId: userId,
    //     firstName: firstName,
    //     lastName: document.getElementById('lastName').value,
    //     major: document.getElementById('major').value
    // }
    // console.log(userIn4Form);
    // if(!this.validateDataFormUser(userIn4Form)){
    //     swal("Cảnh Báo!", "Vui Lòng Nhập Đủ Thông Tin", "warning");
    // } else {
    //     swal("Đã Nhập UserName!", userIn4Form.firstName);
    // };


    validateDataFormUser = (userIn4) => {
        // nếu userIn4 != null || != undefined => true
        // ! => nếu userIn4 == null || == undefined => true
        if(!userIn4.userId || !userIn4.userName || !userIn4.role_name || !userIn4.age || !userIn4.gmail || !user.description) {
            return {
                status: false,
                message: 'Required to fill in all information'
            }
        }
        else{
            return {
                status: true,
                message: 'Successful data validation'
            }
        }
    }

    // Call Api by Ajax of Jquery
    // getDataUserIn4 = () => {
    //     $.ajax({
    //         type: 'GET',
    //         url: '/api/v1/users/getAllUser',
    //         contentType:'application/json',
    //         success: function(data) {
    //             console.log("Call Api /api/v1/users Success");
    //             this.formatDataFromBEToFE(data);
    //         }.bind(this),
    //         error: function(error) {
    //             console.log("Call Api /api/v1/users Fail");}
    //     }, {})
    // };

    // Axios
    getDataUserIn4 = async () => {
        console.log("getDataUser");
        let {data: response} = await axios.get('/api/v1/users/getAllUser',{data: this.listUserIn4});
        this.listUserIn4 = response.data;
    }

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
        let listResultAfterFormatDataFromBackEndToFrontEnd = dataBE.map(function (e) {
            return {
                "userId": e.userId,
                "userName": e.userName,
                "roleName": e.roleName,
                "age": e.age,
                "gmail": e.gmail,
                "description": e.description
            }
        });
        this.createTableListUser(listResultAfterFormatDataFromBackEndToFrontEnd);
    }

//    dynamic component listRole uiUserPage
    createComponentSelectRole = async () => {
        // Call API để lấy dữ liệu Role
        let { data: dataRole } = await axios.get("/api/v2/role/getAllRole");

        if (dataRole.status) {
            // Tạo thành phần Role
            let componentRoleString = `<select id="role_id" class="form-select">`;
            dataRole.data.forEach((e) => {
                componentRoleString += `<option value="${e.role_id}">${e.role_name}</option>`;
            });
            componentRoleString += `</select>`;
            // Chèn danh sách vai trò vào phần tử có id là componentSelectRole
            $("#componentSelectRole").html(componentRoleString);
        }
    };

}