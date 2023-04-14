
var couresApi = 'http://localhost:3000/posts';
function start(){
//   c1  // getCoures(function(courses){
    //      renderCoures(courses);
    // });
// c2 
        getCoures(renderCoures);   
        handleCreateForm();

}
start();
function getCoures(callback){
    fetch(couresApi)
    .then(function(response){
        return response.json();
    })
    .then(callback);//callback  chứa value =>callback(value)
    
}


function handleDeleteCourse(id){
    var option = {
        method: 'DELETE',
        headers: {
        'Content-Type':'application/json'
       },
    }
    fetch(couresApi+ '/'+ id,option)
    .then(function(response){
        response.json();
    })
    .then(function(){
       var courseItem = document.querySelector('.course-item-'+ id);
       if(courseItem){
        courseItem.remove();
       }
    });

}

function renderCoures(courses){
    var listcoureseBlock = document.querySelector('#list-coures');
    var htmls = courses.map( function (coures) {
        return `
        <li class="course-item-${coures.id}">
        <h2>${coures.title}</h2>
        <p>${coures.author}</p>
        <button onclick ="handleDeleteCourse(${coures.id})">xóa</button>
        <button onclick ="handleUpdateCourse(${coures.id})">sửa</button>
        </li>
        ` ;
    });
    listcoureseBlock.innerHTML = htmls.join('') ;
    

}
//create
function createCoures(data,callback){
    var option = {
        method: 'POST',
        headers: {
        'Content-Type':'application/json'
       },
       body :JSON.stringify(data),//js -> json

    }
    fetch(couresApi,option)
    .then(function(response){
        response.json();
    })
    .then(callback);

}
function handleCreateForm(){
    createBtn = document.querySelector('.create');
    createBtn.onclick = function() {
        var title = document.querySelector('input[name="title"]').value;
        var author = document.querySelector('input[name="author"]').value;
        // console.log(title + author);
        var formData ={
            title : title ,
            author : author 
        };  
        createCoures(formData, function(){
            getCoures(renderCoures);
        });
    }
}
function handleUpdateCourse(id){
    fetch(couresApi)
    .then(response => response.json())
    .then(function(data){
        return result = data.find(element => element.id === id)
    })
    .then(function(result){
        var title = document.querySelector('input[name="title"]');
        var author = document.querySelector('input[name="author"]');
        var btnCreateCourse = document.querySelector('.create');
        title.value = result['title'];
        author.value = result['author'];
        btnCreateCourse.classList.remove('.create') ;
        btnCreateCourse.innerHTML = 'Save';
        btnCreateCourse.classList.add('save');
        var btnUpdateCourse = document.querySelector('.save');
        
        btnUpdateCourse.onclick = function(){
            var title = document.querySelector('input[name="title"]').value;
            var author = document.querySelector('input[name="author"]').value;
            var dataUpdate = {title: title,
            author: author};
                handleUpdateCourse(id, dataUpdate);
            }
    })
    function handleUpdateCourse(id, data) {
        var options = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
    
        }
        fetch(couresApi + '/' + id, options)
        .then(function(response){
            response.json()
        })
        .then(
            window.location.reload()
        )
    }
}

