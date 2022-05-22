const card = document.querySelector('.card')
const cardContainer= document.querySelector('.card-container')

//llama a la url
const getUsers =() =>{
    fetch("https://628295be92a6a5e46216b39d.mockapi.io/jobs")
    .then(response => response.json())
    .then(data => cardNewJob(data))
    .catch(error => console.log(error))
    
    }
    getUsers()
    
    
 /*    //PETICION PARA ACCEDER AL ID
    const userDataId =(id) =>{
        fetch(`https://628295be92a6a5e46216b39d.mockapi.io/jobs${id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        
        }
        getUsers() */
    
    //dinamica 
    
    /* const getApi =(endpoint) =>{
        fetch(`https://628295be92a6a5e46216b39d.mockapi.io/${endpoints}/${id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        
        }
        getApi()
     */
    //se mete en los datos GET
        const cardNewJob =(jobs) => {
         for (const job  of jobs) {
            // console.log(job)
    const {name, description,location,category,seniority,id} = job
          card.innerHTML+=`
         
          <div class="card-container">
          <div class="card--title">
          <h3>${name}</h3>
        </div>
       <!--   <img src="https://via.placeholder.com/250" alt=""
        class="card--image">  -->
        <div class="card--description">
          <div class="card--paragraph">
            <p class="paragraph">
            ${description}
            </p>
          </div>
          <div class="container-span">
          <span>${location}</span><span>${category}</span><span>${seniority}</span>
          </div>
          <div><button class="button-details">See Details</button></div>
        </div>
      </div>
      
           `
         }
    
        }
        cardNewJob() 
    
    
   