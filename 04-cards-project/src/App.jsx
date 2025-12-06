import Cards from './components/Cards'

const App = () => {

  // const arr= [10,20,30,40,50]; //array 
  // const arr = [{user:'tony',age:45},{user:'harsh',age:23},{user:'udit',age:40}];   // array of object 
  
  // arr.map(function(elem){
  //   console.log(elem.user);
  // });

  const arr = [
  {
    "brandLogo": "https://imgs.search.brave.com/cuHY22aFSzcRM6cHiGZEgGw29EzGiTAhLjBfeo2NnlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzE3Ni9zbWFs/bC9nb29nbGUtbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$60/hr",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    "companyName": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Front-End Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$72/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/16Y93CiI5cTG1Nb4s3P4sgVX-DNmDt2FaH1KlKDZ3uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY2NDAzNTg3/Nm5ldy1tZXRhLWxv/Z28ucG5n",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "React.js Developer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$55/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/h6OoPrxeJQXvr1MXcBwTxiuRQOkIhxchhvDXsjG3SgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8wMS8xNi8zNC9h/cHBsZS1sb2dvLTc0/MjU4MzNfNjQwLnBu/Zw",
    "companyName": "Apple",
    "datePosted": "3 weeks ago",
    "post": "iOS Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$85/hr",
    "location": "Cupertino, USA"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/BTkju2Opf17i7A7IjNaxZV8lx6lsLbycvNH5JW7wrr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$70/hr",
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/5UJWwoRCg-WlbKhO6DdlLofG8JOlj0zlpkssDNsdS_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$90/hr",
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/1meX8u4ZoqvEI9lPkXqyBDkosHThxn_x0jLAqVIenxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "Data Analyst",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": "$50/hr",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/CuucdnLzCrIG9h8CFVqsCyV5cd-UaUScSKJknPYNKaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTU4LzgwOS9zbWFs/bC9vcGVuYWktY2hh/dGdwdC1sb2dvLWlj/b24tZnJlZS1wbmcu/cG5n",
    "companyName": "OpenAI",
    "datePosted": "8 weeks ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$110/hr",
    "location": "San Francisco, USA"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/mrW9oZ2x_DAGndBwSYziDWZClcACqIOw00sa7S6-rpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OS8yNC8yMy8xNC9u/dmlkaWEtMTY5Mjc5/Nl82NDAuanBn",
    "companyName": "NVIDIA",
    "datePosted": "12 days ago",
    "post": "AI Research Intern",
    "tag1": "Part Time",
    "tag2": "Intern Level",
    "pay": "$40/hr",
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    "companyName": "Adobe",
    "datePosted": "3 days ago",
    "post": "Full Stack Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hr",
    "location": "Noida, India"
  }
];


  
  return (
    <div className='parent'>
      {arr.map(function(elem, idx){
        return <div key={idx}>
                    <Cards company= {elem.companyName}  datePosted= {elem.datePosted} post={elem.post} logo={elem.brandLogo} tag1= {elem.tag1} tag2={elem.tag2}  pay= {elem.pay} location ={elem.location} />
               </div>
      })}
    </div>
  )
}

export default App