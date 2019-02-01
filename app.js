const viewTab = function (event) { 
    $('#displayBox').empty();
    $('#addWrap').hide();
    $('#verifyWrap').hide();
    for (let i = 0; i < employeeList.length; i++){
        $('#displayBox').append(`<div class="officeInfo">
        <p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>
        </div>`)
    }
}   


const viewAdd = function (event) {
    $('#displayBox').empty();
    $('#verifyWrap').hide();
    $('#addWrap').show();
    for (let i = 0; i < employeeList.length; i++){
        $('#displayBox').append(`<div class="officeInfo">
        <p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>
        </div>`)

    }
}

    let addEmployee = function (event) {
        event.preventDefault();
        let employee = {};
        employee.name = $('#inName').val().trim();
        employee.officeNum = $('#inOffice').val().trim();
        employee.phoneNum = $('#inPhone').val().trim();
        $('#displayBox').append(`<div class="officeInfo">
            <p>${employee.name}</p>
            <p>${employee.officeNum}</p>
            <p>${employee.phoneNum}</p>
            </div>`);
    }


    let verifyEmployee = function (event) {
        $('#displayBox').empty();
        $('#addWrap').hide();
        $('#verifyWrap').show();

    }
    let veriEmploy = function (event){
        event.preventDefault();
        let veri = $('#verifyName').val().toLowerCase();
        for(let i = 0; i < employeeList.length; i++){
            if(employeeList[i].name.toLowerCase() === veri){
            $('#displayBox').html("<p>This person is an employee</p>");
            return;
        }
        
            $('#displayBox').html("<p>This person is NOT an employee</p>");
    }
}

    


$('#view').on("click", viewTab);
$('#add').on("click", viewAdd);
$('#addEmployee').on("click",addEmployee);
$('#verify').on("click", verifyEmployee);
$('#verifyEmployee').on("click", veriEmploy);