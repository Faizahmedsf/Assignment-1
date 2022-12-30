console.log("index.js");
const formData = () => {

    let dataTable = document.getElementById("dataTable")
    // json data strats from here 
    const data = [
        {
            "id": 1,
            "first_name": "faiz ",
            "middle_name": "ahmed",
            "last_name": "choudhary",
            "email": "faiz@mail.com",
            "phone_number": "8878-86876",
            "role": "trainee",
            "address": "Mumbai"
        },
        {
            "id": 2,
            "first_name": "Zain",
            "middle_name": "New",
            "last_name": "Malik",
            "email": "malik@mail.com",
            "phone_number": "12321-9887",
            "role": "Band",
            "address": "Delhi"
        },
        {
            "id": 3,
            "first_name": "React",
            "middle_name": "JS",
            "last_name": "Native",
            "email": "react@mail.com",
            "phone_number": "0987-564321",
            "role": "Developer",
            "address": "USA"
        }
    ]
    // json data ends here

    // now create a dynamic header starts form here
    let headerdata = [];
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
            // console.log("key" , key)
            // means the header data is black
            if (headerdata.indexOf(key) === -1) {
                // console.log(key)
                headerdata.push(key)
            }
        }

    }

    // lets create a table
    const table = document.createElement('table');
    table.classList.add("data-table")

    // create a table header 
    const thead = document.createElement('thead')
    table.append(thead);

    // create a row in thead
    let theadrow = thead.insertRow(0)

    // now lets add data to it
    for (let i = 0; i < headerdata.length; i++) {
        th = document.createElement('th');
        th.append(headerdata[i])
        theadrow.append(th);
    }
    action = theadrow.insertCell(-1)
    action.innerHTML = `<th>Action</th>`

    // now lets create table cell and data to it
    const tbody = document.createElement('tbody');

    table.append(tbody)

    dataTable.innerHTML = ''
    document.querySelector('.showdata-btn').innerText = 'Refresh  data';
    dataTable.append(table)

    // now add value form data in column
    for (let i = 0; i < data.length; i++) {
        let tbodyrow = tbody.insertRow(0)
        tbodyrow.setAttribute('id', 'tbody-tr-' + i)
        tbodyrow.classList.add('tbodyrow')
        tbody.append(tbodyrow)

        for (let j = 0; j < headerdata.length; j++) {
            let tcell = tbodyrow.insertCell(-1)
            // console.log("i is" , i)
            // console.log("j is" , j)
            // console.log("j is" , headerdata[j])
            // console.log("data[i][headerdata[j] is" , data[i][headerdata[j]])
            tcell.innerText = data[i][headerdata[j]]
            tcell.classList.add('tcell-editable')

        }

        // now let create a edit and a delte button for every row 
        editCell = tbodyrow.insertCell(-1)
        // edit btn
        editbutton = document.createElement('button');
        editbutton.setAttribute('id', 'save-button-' + i);
        editbutton.innerText = 'Edit';
        editbutton.classList.add('edit-btn', 'btn-dark', 'mr-2');

        // let edit = document.querySelectorAll('.edit-btn')
        $(document).ready(function () {
            $('.edit-btn').click(function () {
                console.log('k')
                $(this).closest('tr').find('.tcell-editable').attr('contenteditable', 'true');
                $(this).closest('tr').css("background-color", "#E2C4B8");
                $(this).closest('tr').find('.clear').css("display", "block");
                $(this).closest('tr').find('.save').css("display", "block");
            })
        })

        editCell.append(editbutton);

        // delete btn
        deletebtn = document.createElement('button')
        deletebtn.classList.add("btn-danger", "delete-btn");
        deletebtn.innerHTML = 'Delete';
        deletebtn.setAttribute('id', 'deletebtn' + i)

        // delete btn functionality
        $(document).ready(function () {

            $('.delete-btn').click(function () {
                console.log('${this}');
                $(this).closest('tr').hide()
            })

        })


        editCell.append(deletebtn)


        // lets create a save & cancel btn
        savebutton = document.createElement('button');
        savebutton.setAttribute('id', 'save-button-' + i);
        savebutton.innerText = 'Save';
        savebutton.classList.add('btn-primary', 'save');
        savebutton.style.display = 'none'
        trt = tbodyrow.insertCell(-1);
        trt.append(savebutton);

        $('.save').click(function () {
            $(this).closest('tr').find('.tcell-editable').attr('contenteditable', 'false');
            $(this).closest('tr').css("background-color", "#fff");
            // alert('changes saved')
            $(this).closest('tr').find('.clear').css('display', 'none');
            $(this).closest('tr').find('.save').css('display', 'none');
        })

        // cancel
        clearbutton = document.createElement('button');
        clearbutton.setAttribute('id', 'clear-button-' + i);
        clearbutton.innerText = 'Clear';
        clearbutton.classList.add('btn-info', 'clear');
        clearbutton.style.display = 'none'
        trt.append(clearbutton);


        $('.clear').click(function () {
            let ctablerow = $(this).closest('tr')[0].rowIndex;
            console.log(ctablerow)

            for (let k = 0; k < headerdata.length; k++) {
                let content = data[ctablerow - 1][headerdata[k]];
                $(this).closest('tr').children('.tcell-editable').eq(k).text(content)
            }
            $(this).closest('tr').find('.tcell-editable').attr('contenteditable', 'false');
            $(this).closest('tr').find('.clear').css('display', 'none');
            $(this).closest('tr').find('.save').css('display', 'none');
            $(this).closest('tr').css("background-color", "#fff");

        })


    }


    // let create a show data button
    // main table datasource 

    // showdata = document.createElement('button')
    // showdata.classList.add("showdata-btn", 'btn-dark');
    // showdata.innerText = 'Load Data';
    // dataTable.append(showdata);

    // document.querySelector('.showdata-btn').addEventListener('click', () => {
    //     console.log('show btn clicked')

    // })


}















