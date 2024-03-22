class FormClassF8Role {

    listRoleIn4 = [];

    loadInitRole = async () => {
        await this.getDataRoleIn4();
        this.createTableListRole(this.listRoleIn4);
    }

    createTableListRole = (listRoleInformation) => {
        let tbodyContentString = '';
        listRoleInformation.forEach(e => {
            tbodyContentString += '<tr>' +
                `<th scope="row">${e.role_id}</th>` +
                `<td>${e.role_name}</td>` +
                `<td>${e.description}</td>` +
                `</tr>`;
        });
        // Jquery
        $('#tbodyTableLisRoleContent').html(tbodyContentString);
        let table = new DataTable('#tableListRole', {
            info: false,
            paging: true,
            ordering: false,
            lengthMenu: [
                [4, 5, 6, -1],
                [4, 5, 6, 'All']
            ]
        });
        const labelElement = document.querySelector('#tableListRole_length');
        labelElement.innerHTML = '';
        table.on('dblclick', 'tbody tr', function (x) {
            let data = table.row(this).data();
            $('#role_id').val(data[0]);
            $('#role_name').val(data[1]);
            $('#description').val(data[2]);
        });
    };

    rowLicked = (x) => {
        let roleIn4 = {
            role_id: x.querySelector('th:nth-child(1)').textContent,
            role_name: x.querySelector('td:nth-child(2)').textContent,
            description: x.querySelector('td:nth-child(3)').textContent
        };
        this.fillFormInformation(roleIn4);
    };

    fillFormInformation = (roleIn4) => {
        $('#role_id').val(roleIn4.role_id);
        $('#role_name').val(roleIn4.role_name);
        $('#description').val(roleIn4.description);
    }

    btnClearForm_click = () => {
        this.fillFormInformation({role_id: '', role_name: '', description: ''})
    }

    btnDelete_click = async () => {
        // tao form chua data
        let dataDeleteForm = {
            role_id: $('#role_id').val(),
            role_name: $('#role_name').val(),
            description: $('#description').val()
        }
        // KT DL
        let result = this.validateDataFormRole(dataDeleteForm);

        if (!result) {
            swal({
                text: result,
                icon: "warning"
            })
        } else{
            // Call Api delete DL
            const {data:response} = await axios.delete("http://localhost:8888/api/v2/role/deleteRole", {data: dataDeleteForm});
            // {data:dataDeleteForm}:
            console.log(response)
            if(response.status){
                // Load lại DL nếu xóa thành công
                var table = new DataTable('#tableListRole');
                table.destroy();
                await this.loadInitRole();
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
            role_id: $('#role_id').val(),
            role_name: $('#role_name').val(),
            description: $('#description').val()
        }
        console.log(dataForm);

        // check tính hợp lệ
        let validateResult = this.validateDataFormRole(dataForm);

        if (!validateResult) {
            swal({
                text: validateResult,
                icon: "warning"
            })
        } else {
            // call API
            const {data: response} = await axios.post("http://localhost:8888/api/v2/role/postRole", dataForm);
            console.log(response)
            if (response.status) {
                var table = new DataTable('#tableListRole');
                table.destroy(); // xóa trắng form
                await this.loadInitRole();
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

    validateDataFormRole = (roleIn4) => {
        if (!roleIn4.role_id) {
            return false;
        } else {
            return true;
        }
    }

    // Axios
    getDataRoleIn4 = async () => {
        console.log("getDataRole");
        let {data: response} = await axios.get('/api/v2/role/getAllRole',{data: this.listRoleIn4});
        this.listRoleIn4 = response.data;
    }

    formatDataFromBEToFE = (dataBE) => {
        console.log('function Format Data From BE to FE ');
        //Case2: high level
        let listResultAfterFormatDataFromBackEndToFrontEnd = dataBE.map(function (e) {
            return {
                "role_id": e.role_id,
                "role_name": e.role_name,
                "description": e.description
            }
        });
        this.createTableListRole(listResultAfterFormatDataFromBackEndToFrontEnd);
    }

}