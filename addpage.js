
var profile = document.getElementById('image')
var intname = document.getElementById("internName");
 var phone = document.getElementById("phoneNumber");
 var email = document.getElementById("emailAddress");
 var sDate = document.getElementById("startDate");
 var eDate = document.getElementById("endDate");
 var dleft = document.getElementById("daysLeft");
 var metnorT = document.getElementById("metnorT");
 var result1 = document.getElementById("result1");
 var result2 = document.getElementById("result2");
 var taskBox = document.getElementById('imgT');
 var firstTask = document.getElementById("firstTask")
 var secondTask = document.getElementById("secondTask")
 var department = document.getElementById("department");
var profileImg = '';
var taskImg = '';
var dleft=  document.getElementById("daysLeft").disabled = true;
// document.getElementById("submit1").addEventListener("click", function() {
   
  
    
//     // localStorage.setItem("internName", name);
//     // localStorage.setItem("image", profileImg);
//     // localStorage.setItem("phoneNumber", phone);
//     // localStorage.setItem("emailAddress", email);
//     // localStorage.setItem("startDate", sDate);
//     // localStorage.setItem("endDate", eDate);
//     // //localStorage.setItem("daysLeft", dleft);
//     // localStorage.setItem("metnorT", metnorT);
//     // localStorage.setItem("result1", result1);
//     // localStorage.setItem("result2", result2);
//     // localStorage.setItem("imgT", taskImg);
//     // localStorage.setItem("firstTask", firstTask);
//     // localStorage.setItem("secondTask", secondTask);
//     // localStorage.setItem("department", department);
   
//     document.getElementById("internName").value = "";
//     document.getElementById("image").value = "";
//     document.getElementById("phoneNumber").value = "";
//     document.getElementById("emailAddress").value = "";
//     document.getElementById("startDate").value = "";
//     document.getElementById("endDate").value = "";
//     document.getElementById("daysLeft").value = "";
//     document.getElementById("metnorT").value = "";
//     document.getElementById("result1").value = "";
//     document.getElementById("result2").value = "";
//     document.getElementById("imgT").value = "";
//     document.getElementById("firstTask").value = "";
//     document.getElementById("secondTask").value = "";
//     document.getElementById("department").value = "";
// });

submit1.addEventListener('click', insertNewRecord);

function insertNewRecord() {
  var tableData = JSON.parse(localStorage.getItem('data')) || []; // use an empty array if no data exists
  var ime = intname.value;
  var tel = phone.value;
  var emailAd = email.value;
  var dat1 = sDate.value;
  var dat2 = eDate.value;
  var datL = dleft.value;
  var Mtor = metnorT.value;
  var res1 = result1.value;
  var res2 = result2.value;
  var fTask = firstTask.value;
  var sTask = secondTask.value;
  var dep = department.value;
//   var table = document.getElementById('table');
// var nameRow = table.rows[0];
// var profRow = table.rows[1];
// var phoneRow = table.rows[2];
// var emailRow = table.rows[3];
// var dat1Row = table.rows[4];
// var dat2Row = table.rows[5];
// var datLRow = table.rows[6];
// var MtorRow = table.rows[7];
// var res1Row = table.rows[8];
// var res2Row = table.rows[9];
// var fTaskRow = table.rows[10];
// var sTaskRow = table.rows[11];
// var departmentRow = table.rows[12];
var startDateInput = document.getElementById('startDate');
var endDateInput = document.getElementById('endDate');
var daysLeftInput = document.getElementById('daysLeft');



function updateDaysLeft() {
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
  
    var differenceInTime = endDate.getTime() - startDate.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
  
    daysLeftInput.value = differenceInDays;
    return differenceInDays;
  }
  startDateInput.addEventListener('change', updateDaysLeft);
endDateInput.addEventListener('change', updateDaysLeft);



sDate.addEventListener('change',() => {
    eDate.min = sDate.value;
});

eDate.addEventListener('change', () => {
    sDate.max = eDate.value;
});
  
  var datL = updateDaysLeft();
  tableData.push({
    'name': ime,
  'profile': profileImg,
  'phone': tel,
  'email': emailAd,
  'sDate': dat1,
  'eDate': dat2,
  'dleft': datL,
  'metnorT': Mtor,
  'result1': res1,
  'result2': res2,
  'firstTask': fTask,
  'secondTask': sTask,
  'department': dep,
  'taskBox': taskImg
  });
  localStorage.setItem('data', JSON.stringify(tableData));
  window.location.assign('index.html');
}
taskBox.addEventListener('change', handleImageUpload);
function handleImageUpload() {
    console.log('change event'); 
  const files = taskBox.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = function() {
     taskImg = reader.result;
      console.log(taskImg);
    };
  }
}


profile.addEventListener('change', handleImagesUpload);
function handleImagesUpload() {
    //console.log(profile.files);
    console.log('change event'); 

    var file = profile.files;
    console.time()

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
        console.log('reader ready');
        console.timeEnd()
        //base64Image of uploaded img
        profileImg = reader.result;
        console.log(profileImg)
    };
}
const editIndex = sessionStorage.getItem('editIndex');

// Retrieve the data from local storage using the index
const tableData = JSON.parse(localStorage.getItem('data'));
const data = tableData[editIndex];



