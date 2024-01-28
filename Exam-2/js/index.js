
let nameRegex=/^[a-z ,.'-]+$/i
let emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
let phoneRegex=/^[1-9]\d{2}-\d{3}-\d{4}/i
let ageRegexRegex=/^\S[0-9]{0,3}$/i
let passwordRegex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/i








console.log($('.nav-container').css('left'));

$('.open-close-icon').click(()=>{
    if ($('.nav-container').css('left')=='0px') {
       
            $('.nav-container').animate({'left':-$('.width-black-nav').outerWidth(true)},300)
       
        
        
    } else {$('.nav-container').animate({'left':'0px'},300)
   
    }
 }
)

let result=[]
async function getMinu(category=''){
        let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
         result = await resopnse.json()
        console.log(result);
        // console.log(result.categories[2].strCategoryThumb);
        // console.log(result.categories[2].strCategory);
        // console.log(maels.categories.length);
        displayMinu()
}
async function getCategories(){
        let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
         result = await resopnse.json()
        console.log(result);
        
        displayCategory()
}


getMinu()
function displayMinu() {
 let cols=[]

for(let i=0 ; i<result.meals.length ; i++){
  
        cols+=`<div class="col-md-3  img-container-all">
        <div class="img-container  position-relative overflow-hidden rounded-3 m-auto ">
          <img src="${result.meals[i].strMealThumb}"  alt="">
          <div class="cover-img  position-absolute  ">
            <p class=" position-absolute">${result.meals[i].strMeal
            }</p>
          </div>
        </div>
     
      </div>`
        
}
document.querySelector('.display-minue').innerHTML=cols

}
function displayCategory() {
 let cols=[]

for(let i=0 ; i<result.categories.length ; i++){
  
        cols+=`<div class="col-md-3  img-container-all">
        <div class="img-container  position-relative overflow-hidden rounded-3 m-auto ">
          <img src="${result.categories[i].strCategoryThumb}"  alt="">
          <div class="cover-img  position-absolute  ">
            <p class=" position-absolute">${result.categories[i].strCategory}</p>
          </div>
        </div>
     
      </div>`
        
}
document.querySelector('.display-minue').innerHTML=cols

}

$('.nav-items-search').click(()=>{
  console.log('hi');
  $('.container-search').removeClass('d-none')
  $('.display-container').css({'display':'none'})
  $('.display-area-container').addClass('d-none')
  $('.area-container').addClass('d-none')
  $('.display-ingrediant-container').addClass('d-none')
  $('.contact-us').addClass('d-none')



})





let searchName = document.querySelector('.search-name')
searchName.addEventListener('keyup',()=>{
  $('.search-name input').val()

   searchName = $('.search-name').val()
   $('.display-container').css({'display':'block'})
   getMinu(searchName)

  //  console.log(searchName);
  
})
  
let searchLetter  = document.querySelector('.search-letter')
searchLetter.addEventListener('keyup',()=>{
  $('.search-letter input').val()

   searchLetter = $('.search-letter').val()
   $('.display-container').css({'display':'block'})
   getMinu(searchLetter)

  //  console.log(searchLetter);
  
})

$('.nav-items2-category').click(()=>{
  $('.display-container').css({'display':'block'})
  $('.container-search').addClass('d-none')
  $('.display-area-container').addClass('d-none')
  $('.area-container').addClass('d-none')
  $('.display-ingrediant-container').addClass('d-none')
  $('.contact-us').addClass('d-none')



  getCategories()
})

async function getArea(cat=''){
  let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   result = await resopnse.json()
  console.log(result);
  
  displayArea()
}

function displayArea() {
  let cols=[]

for(let i=0 ; i<result.meals.length ; i++){
  
        cols+=`<div class="col-md-3 Area-location">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3>${result.meals[i].strArea}</h3>
      </div>`
     
}
document.querySelector('.display-area').innerHTML=cols
displayIdArea()
}
$('.nav-items3-Area').click(()=>{
  $('.display-container').css({'display':'none'})
  $('.container-search').addClass('d-none')
  $('.area-container').removeClass('d-none')
  $('.display-area-container').addClass('d-none')
  $('.display-ingrediant-container').addClass('d-none')
  $('.contact-us').addClass('d-none')


  getArea()


})

async function getChoice(area){
  let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
   result = await resopnse.json()
  console.log(result);
  $('.display-area-container').removeClass('d-none')
  displaySpecificArea()
}


function displayIdArea(){
	let area = document.querySelector('.display-area').children
	console.log([...area]);
	for (let x = 0; x < area.length; x++){area[x].addEventListener('click', (e)=>
	{;
		// console.log(e.currentTarget);
		// console.log(x);
	let country=["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","Filipino","French","Greek","Indian","Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican","Moroccan","Polish","Portuguese","Russian","Spanish","Thai","Tunisian","Turkish","Unknown","Vietnamese"]
// console.log(country[x]);
getChoice(country[x])
	
})

}
}

function displaySpecificArea() {
  let cols=[]
 
 for(let i=0 ; i<result.meals.length ; i++){
   
         cols+=`<div class="col-md-3  img-container-all">
         <div class="img-container  position-relative overflow-hidden rounded-3 m-auto ">
           <img src="${result.meals[i].strMealThumb}"  alt="">
           <div class="cover-img  position-absolute  ">
             <p class=" position-absolute">${result.meals[i].strMeal}</p>
           </div>
         </div>
      
       </div>`
         
 }
 $('.display-area-container').removeClass('d-none')
 $('.area-container').addClass('d-none')
 document.querySelector('.display-specific-area').innerHTML=cols

 }


 $('.nav-items4-ingrediant').click(()=>{
  $('.display-ingrediant-container').removeClass('d-none')
  $('.display-container').css({'display':'none'})
  $('.container-search').addClass('d-none')
  $('.area-container').addClass('d-none')
  $('.display-area-container').addClass('d-none')
  $('.contact-us').addClass('d-none')
  getingrediant()
 })

//  async function getChoice(){
//   let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
//    result = await resopnse.json()
//   console.log(result);
//   $('.display-area-container').removeClass('d-none')
//   displaySpecificingrediant()
// }

async function getingrediant(){
  let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
   result = await resopnse.json()
  console.log(result);
  
  displayIngrediant()
}

function displayIngrediant() {
  let cols=[]

for(let i=0 ; i<result.meals.length ; i++){
  
        cols+=`<div class="col-md-3 Area-location">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>      
          <h3>${result.meals[i].strCategory}</h3>
      </div>`
     
}
document.querySelector('.display-ingrediant-area').innerHTML=cols
displayIdingrediant()
}


async function getChoiceingrediant(ingrediantpar){
  let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ingrediantpar}`)
   result = await resopnse.json()
  console.log(result);
  $('.display-ingrediant-container').removeClass('d-none')
  displaySpecificingrediant()
}


function displayIdingrediant(){
	let ingrediant = document.querySelector('.display-ingrediant-area').children
	console.log([...ingrediant]);
	for (let x = 0; x < ingrediant.length; x++){ingrediant[x].addEventListener('click', (e)=>
	{;
		// console.log(e.currentTarget);
		// console.log(x);
	let mealsIngrediant=["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian"]
// console.log(country[x]);
getChoiceingrediant(mealsIngrediant[x])
	
})

}
}

function displaySpecificingrediant() {
  let cols=[]
 
 for(let i=0 ; i<result.meals.length ; i++){
   
         cols+=`<div class="col-md-3  img-container-all">
         <div class="img-container  position-relative overflow-hidden rounded-3 m-auto ">
           <img src="${result.meals[i].strMealThumb}"  alt="">
           <div class="cover-img  position-absolute  ">
             <p class=" position-absolute">${result.meals[i].strMeal}</p>
           </div>
         </div>
      
       </div>`
         
 }
 $('.display-ingrediant-container').removeClass('d-none')
 $('.area-container').addClass('d-none')
 document.querySelector('.display-ingrediant-area').innerHTML=cols

 }



 async function getingrediantdetail(ingrediantDetails){
  let resopnse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingrediantDetails}`)
   result = await resopnse.json()
  console.log(result);
  
  displayingrediantDetail()
}


function displayIdDetailingrediant(){
	let ingrediant = document.querySelector('.display-ingrediant-area').children
	console.log([...ingrediant]);
	for (let x = 0; x < ingrediant.length; x++){ingrediant[x].addEventListener('click', (e)=>
	{;
		// console.log(e.currentTarget);
		// console.log(x);
	let mealsIngrediant=["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian"]
// console.log(country[x]);
getingrediantdetail(mealsIngrediant[x])
	
})

}
}

function displayingrediantDetail() {
  let cols=[]
 
 for(let i=0 ; i<result.meals.length ; i++){
   
         cols+=` <div class="col-md-5">
         <img src="${result.meals[i].strMealThumb}"class='w-100 rounded-3' alt="">
       </div>
       <div class="col-md-7 text-white">
         <h3>Instructions</h3>
         <p>${result.meals[i].strInstructions}</p>
   
       </div>
     </div>
     <div class="row text-white ">
       <div class="col-md-5">
         <h3>${result.meals[i].strMeal}</h3>
       </div>
       <div class="col-md-7 text-white">
         <h3>Area : ${result.meals[i].strArea}</h3>
         <h3>Category : ${result.meals[i].strCategory}</h3>
         <h3>Recipes :</h3>
         <ul class="list-unstyled d-flex g-3 flex-wrap">
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure1}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure2}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure3}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure4}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure5}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure6}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure7}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure8}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure9}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure10}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure11}</li>
           <li class="alert alert-info m-2 p-1">${result.meals[i].strMeasure12}</li>
           
   
         
       </ul>
       <h3>Tags:${result.meals[i].strTags} </h3>
       <button class="btn btn-success">Source</button>
       <button class="btn btn-danger">Youtube</button>
       </div>`
         
 }
 $('.display-ingrediant-container').removeClass('d-none')
 $('.area-container').addClass('d-none')
 document.querySelector('.display-ingrediant-area').innerHTML=cols

 }






$('.nav-items5-contactUs').click(()=>{
  $('.contact-us').removeClass('d-none')
  $('.container-search').addClass('d-none')
  $('.display-container').css({'display':'none'})
  $('.display-area-container').addClass('d-none')
  $('.area-container').addClass('d-none')
  $('.display-ingrediant-container').addClass('d-none')
 
})



$('.Enter-Your-Name').val()
$('.Enter-Your-Email').val()
$('.Enter-Your-Phone').val()
$('.Enter-Your-Age').val()
$('.Enter-Your-Password').val()
$('.Enter-Your-RePassword').val()



$('.Enter-Your-Name').keyup(()=>{
   submitButton()
})
$('.Enter-Your-Email').click(()=>{
   submitButton()
})
$('.Enter-Your-Phone').click(()=>{
   submitButton()
})
$('.Enter-Your-Age').click(()=>{
   submitButton()
})
$('.Enter-Your-Password').click(()=>{
   submitButton()
})
$('.Enter-Your-RePassword').click(()=>{
   submitButton()
})

// let enterYourName  = document.querySelector('.Enter-Your-Name')
// enterYourName.addEventListener('keyup',()=>{
//   $('.Enter-Your-Name').val()}




function validateNameRegex(name) {
  nameRegex =/^[a-z ,.'-]+$/i

  return nameRegex.test(name)


  
}
function validateEmailRegex(email) {
  emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

  return emailRegex.test(email)


  
}
function validatePhoneRegex(phone) {
  phoneRegex =/^[1-9]\d{2}-\d{3}-\d{4}/i


  return phoneRegex.test(phone)


  
}
function validateAgeRegex(age) {
  ageRegex =/^\S[0-9]{0,3}$/i

  return ageRegex.test(age)


  
}
function validatePasswordRegex(password) {
  passwordRegex =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/i

  return passwordRegex.test(password)


  
}


function submitButton() {
if (validateNameRegex($('.Enter-Your-Name').val()) && validateEmailRegex($('.Enter-Your-Email').val()) && validatePhoneRegex($('.Enter-Your-Phone').val()) && validateAgeRegex($('.Enter-Your-Age').val()) && validatePasswordRegex($('.Enter-Your-Password').val()) && validatePasswordRegex($('.Enter-Your-RePassword').val())) {
  
  // console.log('hi');
  $('.button-submit').css({'cursor':'pointer'})
} else {prompt('error')
  
}
  
}


// function submitButton() {
//   if (validateNameRegex($('.Enter-Your-Name').val())) {
//     if (validateEmailRegex($('.Enter-Your-Email').val())) {
//       if (validatePhoneRegex($('.Enter-Your-Phone').val())) {
//         if (validateAgeRegex($('.Enter-Your-Age').val())) {
//           if (validatePasswordRegex($('.Enter-Your-Password').val())) {
//             if (validatePasswordRegex($('.Enter-Your-RePassword').val())) {
            
//           }else{prompt('error')}
          
//         }else{prompt('error')}
        
//       }else{prompt('error')}
      
//     }else{prompt('error')}
      
//     }else{prompt('error')}
    
//   }else{prompt('error')}
  
// }
